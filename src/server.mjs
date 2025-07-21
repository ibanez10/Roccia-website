import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import midtransClient from "midtrans-client";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-transaction", async (req, res) => {
  try {
    const { orderId, grossAmount, customerDetails } = req.body;

    console.log("REQ BODY:", req.body);

    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
    });

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: Number(grossAmount) || 1000, // HARUS ANGKA
      },
      customer_details: customerDetails,
    };

    const transaction = await snap.createTransaction(parameter);
    console.log("MIDTRANS RESPONSE:", transaction);

    res.json({ token: transaction.token });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
