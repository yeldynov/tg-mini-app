import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = "6407990766:AAEx0Rv7qbPLXYWSWUqK7vWMChlm8Jvvo60";
const webAppUrl = "https://angular-tg-app-a66dd.web.app/";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Вітаю! Натиснить кнопку нижче щоб запустити застосунок: ",
    Markup.keyboard([
      Markup.button.webApp("Надіслати повідомлення", webAppUrl + "/feedback"),
    ])
  );
});

bot.on(message("web_app_data"), async (ctx) => {
  const data = ctx.webAppData.data.json();
  ctx.reply(
    `Ваше повідомлення: "${data?.feedback}" - на розгляді у куратора. З вами зв'яжуться, очікуйте... ` ??
      "empty message"
  );
});

bot.launch();
