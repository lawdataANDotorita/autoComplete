
import {OpenAI} from 'openai';

const openai = new OpenAI({apiKey: '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'});

export async function go(sPrompt) {
  if (!!sPrompt){
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." },
                   { role: "user", content: sPrompt }],
        model: "gpt-3.5-turbo",
      });
      return completion.choices[0].message.content;
  }
}

