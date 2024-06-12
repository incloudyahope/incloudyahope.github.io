import "./index.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect } from "react";

function Author2() {
  const API_KEY = "AIzaSyCyze2PMnHIQOA0a1f7z1JzVfftUShL-Hk";
  const [data, setData] = useState(undefined);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    return () => {
      synth.cancel();
    };
  }, []);

  async function fetchDataFromGeminiProAPI() {
    try {
      // ONLY TEXT
      if (!inputText) {
        alert("Please enter text!");
        return;
      }
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(inputText);
      const text = result.response.text();
      setLoading(false);
      var text2 = text.replace(/\*' '/g, "");
      var text2s = text2.replace(/\**/g, "");
      setData(text2s);
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  }

  async function fetchDataFromGeminiProVisionAPI() {
    try {
      // TEXT AND FILE
      if (!inputText) {
        alert("Please enter text!");
        return;
      }
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const fileInputEl = document.querySelector("input[type=file]");
      const imageParts = await Promise.all([...fileInputEl.files].map(fileToGenerativePart));
      const result = await model.generateContent([inputText, ...imageParts]);
      const text = result.response.text();
      var text2 = text.replace("*", "");
      console.log(text2);
      setLoading(false);
      setData(text2);
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  }

  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }

  return (
    <div className="root2" style={{ backgroundColor: "black", margin: "-33px" }}>
      <div style={{ backgroundColor: "black", padding: "33px" }}>
        <div>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
              className="logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src="./react.svg" className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="card">
          <input
            type="text"
            className="inP"
            value={inputText}
            style={{ padding: "5px" }}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                fetchDataFromGeminiProAPI();
              }
            }}
          />
          <input type="file" style={{ marginTop: "5px" }} />
          <button
            style={{ padding: "5px", marginRight: "8px" }}
            disabled={loading}
            onClick={() => fetchDataFromGeminiProAPI()}
          >
            {loading ? "Loading..." : "Pencarian Input"}
          </button>
          <button
            style={{ padding: "5px", marginRight: "8px", marginTop: "5px" }}
            disabled={loading}
            onClick={() => fetchDataFromGeminiProVisionAPI()}
          >
            {loading ? "Loading..." : "Pencarian Gambar"}
          </button>
          <hr style={{ margin: "20px" }} />
          <div>Hasil Pencarian : </div>
          <textarea className="txtAr" value={loading ? "Loading Data..." : data}>
            {loading ? "Loading Data..." : data}
          </textarea>
        </div>
      </div>
    </div>
  );
}
export default Author2;
