const OpenAI = require("openai");

// const API_KEY = "sk-proj-VAApM2U0hl4xkyH38rOST3BlbkFJ86OmLR2rWs0TAMrxSutA";

const openai = new OpenAI({apiKey:"sk-proj-VAApM2U0hl4xkyH38rOST3BlbkFJ86OmLR2rWs0TAMrxSutA"});

async function main() {
  try {
    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo",
      prompt: "what is apple?",
      max_tokens: 100,
      temperature: 0,
    });
    // sk-proj-VAApM2U0hl4xkyH38rOST3BlbkFJ86OmLR2rWs0TAMrxSutA
    console.log(completion);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
