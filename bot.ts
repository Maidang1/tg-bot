import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_bot_api@0.4.0/mod.ts"
import { load } from "https://deno.land/std@0.207.0/dotenv/mod.ts"


const env = await load();

const TOKEN = env["TG_TOKEN"];
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async ({ message }) => {
  await bot.sendMessage({
    chat_id: message.chat.id,
    text: "hello world",
  });
});

bot.run({
  polling: true,
});
