const express = require('express')
const app = express()

module.exports = {
    baseUrl: '/api/',
}

app.get("/api", (req,res) => {
    res.json({"socials": [{name: "mail", src: "/mail.svg", href: "xd"},{name: "mail", src: "/whatsapp.svg", href: "xd"}]})
})

app.listen(5000, () => {
    console.log("Server starter on port 5000")
})