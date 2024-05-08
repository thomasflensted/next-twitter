import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export const testOpenAi = async () => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "What is the capital of Denmark?" }],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0].message.content;
}