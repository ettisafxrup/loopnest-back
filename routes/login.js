const paidEmails = require("../data/mails.js")

let result = {}

function matchData(input) {
  let existedUser = paidEmails.find((user) => user.email == input.email)

  if (!input) {
    result = { match: false, message: "No email found." }
  }

  if (existedUser) {
    result = { match: true, name: existedUser["name"], message: "Email Found!" }
  } else {
    result = {
      match: false,
      message: "Can't find your email in bootcamp database.",
    }
  }
  return result
}

module.exports = matchData
