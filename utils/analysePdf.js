import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI,
});
console.log(process.env.OPEN_AI);
const openai = new OpenAIApi(configuration);

const analysePdf = async (text, query, summary) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Given ${summary}: "${text}". ${query} ?`,
    max_tokens: 3000,
    n: 1,
    stop: "none",
    temperature: 0.8,
  });
  console.log(response?.data?.error);
  console.log(response?.data?.choices[0]?.text);
  return response?.data?.choices[0]?.text;
};

export default analysePdf;
