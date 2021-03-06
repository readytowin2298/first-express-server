// Include express package
const express = require('express')
// Initialize express instance
const app = express()


app.get('/dogs', (request, response) => {
    console.log("You asked for the dogs")
    console.log(request)
    response.send("WOOF WOOF!!")
})

app.get('/123', (request, response) => {
    console.log("You like Numbers?")
    response.send(`
    <ol>
    <li>I am the first Number!</li>
    <li>I am the second Number!</li>
    <li>I am the third Number!</li>
    <li>I am the fouth and last number!</li>
    </ol>
    `)
})

// Responds to get request only
app.get('/chickens', (req, res) => {
    res.send("BCK BCK BCK")
})

// Will respond to post request, can test with insomnia
app.post('/chickens', function createChcicken(req, res){
    res.send("you created a new chicken (not really)")
})

const greetings = {
    en : "Hello!",
    fr : "Bonjour",
    ic : "halo",
    js : "Konichiwa"
}

// Access a variable from the url with req.params
app.get('/greet/:language', (req, res) => {
    console.log(req.params)
    res.send(greetings[req.params.language])
})

// Starts server, should always be at the bottom of the file!
app.listen(3000, function(){
    console.log('App on port 3000')
})
