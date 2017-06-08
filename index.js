const Telegraf = require('telegraf')
const { Extra, Markup } = require('telegraf')

const gameShortName = 'game_test'
const gameUrl = 'http://idle.wakeup.coffee'

const markup = Extra.markup(
  Markup.inlineKeyboard([
    Markup.gameButton('🎮 Play now!'),
    Markup.urlButton('Telegraf help', 'http://telegraf.js.org')
  ])
)

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('start', ({ replyWithGame }) => replyWithGame(gameShortName))
bot.command('foo', ({ replyWithGame }) => replyWithGame(gameShortName, markup))
bot.gameQuery(({ answerGameQuery }) => answerGameQuery(gameUrl))
bot.startPolling()
