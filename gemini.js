const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY="AIzaSyCzTjQ5fdb_8In1Otg7zk4c7uD089GUesc";

const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "can you write a html sample filez";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();