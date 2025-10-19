// server/server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 

app.get('/api/news', async (req, res) => {
  const category = req.query.category || 'general';
  const apiKey = process.env.NEWS_API_KEY;

  console.log("Backend received category:", category);

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
