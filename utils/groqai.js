import "dotenv/config";

const getGroqAiAPIResponse = async (message) => {
  console.log("GROQ_API_KEY exists:", !!process.env.GROQ_API_KEY);
  console.log("First 8 chars:", process.env.GROQ_API_KEY?.substring(0, 8));

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();

    console.log("Groq Response:", data);

    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }

    return data.choices[0].message.content;
  } catch (err) {
    console.error("Groq Error:", err);
    return null;
  }
};

export default getGroqAiAPIResponse;