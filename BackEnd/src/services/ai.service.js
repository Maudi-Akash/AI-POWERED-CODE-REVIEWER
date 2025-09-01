const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Gemini AI client with API key from environment
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

async function generateAIResponse(prompt) {
  try {
    // Load the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate AI content
    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ]
    });

    // Safely extract and return AI-generated text
    const text = response?.response?.text?.();
    return text || "No response text generated.";
  } catch (error) {
    console.error("AI Generation Error:", error.message);
    return "Error generating AI response.";
  }
}

module.exports = generateAIResponse;
