let handler = async (m, { conn, text }) => {
conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['🌶', '🍆', '🍌', '🗿', '🍫', '🍜', '🍷', '🍻', '☕', '🍹', '🧋', '🐒', '🦝', '🐕', '🐈', '🐖', '🐥', '🐦', '🐊', '🌹', '🥀', '⚘', '💐', '🪰', '🐝', '🌻', '🍃', '🙄', '🤔', '😆', '🤢', '🤮', '😱', '💀', '💩', '👻', '🤖', '🙈', '💦', '💢', '💨', '❤', '💘', '🤍', '🖤', '💖', '💤', '🖕🏻', '👀', '🙋‍♀️', '👩‍💻', '💃', '🏇', '👣', '🕋', '🚀', '🚁', '🕘', '🌡', '🌝', '🌚', '🌧', '🔥', '⚡', '🎋', '🎀', '🎉', '🎭', '👙', '💍', '🎶', '🎤', '🎥', '📸', '💰', '🛠', '⚰', '🔞', '🚮', '❗', '🏳', '🚩', '🏴‍'])}`,
            key: m.key,
          }})
  }
handler.customPrefix = /🗿|🤔|😒|🙄|❤|hadeh|alay|hmm|iya/i
handler.command = new RegExp
  
handler.mods = false

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}