import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "sk-proj-VAApM2U0hl4xkyH38rOST3BlbkFJ86OmLR2rWs0TAMrxSutA",
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "user",
      "content": "how are you ?"
    }
  ],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});