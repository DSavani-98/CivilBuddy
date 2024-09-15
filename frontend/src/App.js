import React, { useState } from "react";
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [docxId, setDocxId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select an image to upload.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.error) {
        setMessage(result.error);
      } else {
        setMessage("Report generated successfully!");
        setDocxId(result.docx_id);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error uploading image.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    window.location.href = `/download/${docxId}`;
  };

  return (
    <div className="App">
      <h1>Upload Image and Generate Report</h1>
      <form onSubmit={handleFileUpload}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? "Generating report..." : "Generate Report"}
        </button>
      </form>
      {message && <p>{message}</p>}
      {docxId && (
        <button onClick={handleDownload}>
          Download Generated Report
        </button>
      )}
    </div>
  );
}

export default App;
