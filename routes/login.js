const paidEmails = require("../data/mails.js")

let result = {}

function matchData(input) {
  console.log(input.email)
  if (!input) {
    result = { match: false, message: "No email found." }
  }

  if (paidEmails.includes(input.email)) {
    result = { match: true, message: "Email Found!" }
  } else {
    result = {
      match: false,
      message: "Can't find your email in bootcamp database.",
    }
  }
  return result
}

module.exports = matchData
