import "dotenv/config";

const getGroqAiAPIResponse = async (message) => {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", // or llama3-70b-8192
        messages: [
          { role: "user", content: message }, // <-- uses parameter instead of hardcoding
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("API Error:", data.error.message);
      return null;
    }

    console.log("\n🤖 Joke:", data.choices[0].message.content, "\n");
    return data.choices[0].message.content;  // reply

  }  catch (err) {
    console.error("Error:", err.message);
    return null;
  }
};

export default getGroqAiAPIResponse;