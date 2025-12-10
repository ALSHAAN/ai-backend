# Thinkr AI – Backend

Node.js + Express backend for **Thinkr AI**, an AI chat assistant powered by the **Groq API** and **MongoDB**.  
This service exposes REST APIs to manage threads, store conversations, and fetch AI-generated responses.

---

## 🚀 Tech Stack

- **Runtime:** Node.js, Express.js  
- **AI Provider:** Groq API  
- **Database:** MongoDB + Mongoose  
- **Other:** dotenv, CORS, JSON-based REST APIs

---

## 📁 Project Structure 

- `src/`
  - `index.js` – Entry point / Express app
  - `routes/` – Route handlers (e.g., `/api/thread`, `/api/chat`)
  - `models/` – Mongoose schemas (Thread, Message, etc.)
  - `utils/` – Groq API client, helper functions
- `.env` – Environment variables (not committed)


