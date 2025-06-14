const paidEmails = require("../data/mails.js")

let result = {}

function matchData(input) {
  let userName = paidEmails.find((user) => user.email == input.email)

  if (!input) {
    result = { match: false, message: "No email found." }
  }

  if (paidEmails.includes(input.email)) {
    result = { match: true, name: userName, message: "Email Found!" }
  } else {
    result = {
      match: false,
      message: "Can't find your email in bootcamp database.",
    }
  }
  return result
}

module.exports = matchData
