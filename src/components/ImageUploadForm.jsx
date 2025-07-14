import React, { useState } from "react";

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Pilih gambar dulu!");

    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Upload berhasil:", data);
      setUploadedUrl(data.secure_url);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload gagal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="my-10">
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md max-w-md mx-auto">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
        <img src="https://res.cloudinary.com/dpswqafiq/image/upload/v1752222864/table_strlnq.png" alt="Uploaded" className="mt-2 w-48 h-48 object-cover rounded" />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-48 h-48 object-cover rounded border"
        />
      )}

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Mengupload..." : "Upload ke Cloudinary"}
      </button>

      {uploadedUrl && (
        <div className="text-center">
          <p className="text-green-600">Upload berhasil!</p>
          <img src={uploadedUrl} alt="Uploaded" className="mt-2 w-48 h-48 object-cover rounded" />
          <p className="text-sm text-gray-600 break-words mt-2">{uploadedUrl}</p>
        </div>
      )}
    </form>
    </div>
    </>
  );
};

export default ImageUploadForm;
