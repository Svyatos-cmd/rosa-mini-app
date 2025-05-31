import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_TOKEN || '7685562703:AAGSzEIEVCxcAGKHh-f3kde25q1SL4rPHrs');

bot.start((ctx) => {
  ctx.reply('Привет! Это бот ROSA. Чтобы открыть мини-аппу, нажми кнопку ниже 👇', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: 'Открыть ROSA',
          web_app: {
            url: 'https://rosa-mini-app.vercel.app'
          }
        }
      ]]
    }
  });
});

bot.launch();
console.log('🚀 Бот запущен');
