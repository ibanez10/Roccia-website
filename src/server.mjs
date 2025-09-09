import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import midtransClient from "midtrans-client";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Simpan order sementara di memory (hilang kalau server restart)
let orders = [];

// === CREATE TRANSACTION ===
app.post("/create-transaction", async (req, res) => {
  try {
    const { orderId, grossAmount, customerDetails, userId } = req.body;

    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
    });

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: Number(grossAmount) || 1000,
      },
      customer_details: customerDetails,
    };

    const transaction = await snap.createTransaction(parameter);

    // Simpan ke memory
    orders.push({
      order_id: orderId,
      user_id: userId,
      total_price: grossAmount,
      status: "Pending",
      created_at: new Date().toISOString(),
    });

    res.json({ token: transaction.token });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

// === GET USER ORDERS (history) ===
app.get("/api/users/orders/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // filter order sesuai user
    const userOrders = orders.filter(
      (o) => String(o.user_id) === String(userId)
    );

    // update status real-time dari Midtrans
    const coreApi = new midtransClient.CoreApi({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.MIDTRANS_CLIENT_KEY,
    });

    const updatedOrders = await Promise.all(
      userOrders.map(async (order) => {
        try {
          const statusResponse = await coreApi.transaction.status(
            order.order_id
          );

          let newStatus = order.status;
          if (statusResponse.transaction_status === "settlement")
            newStatus = "Selesai";
          else if (statusResponse.transaction_status === "expire")
            newStatus = "Expired";
          else if (statusResponse.transaction_status === "cancel")
            newStatus = "Dibatalkan";
          else newStatus = "Pending";

          return {
            ...order,
            status: newStatus,
          };
        } catch (err) {
          console.error("Gagal ambil status Midtrans:", err);
          return order; // fallback
        }
      })
    );

    res.json({ isSuccess: true, data: updatedOrders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ isSuccess: false, message: "Gagal ambil data" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
