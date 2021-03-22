// Include express package
const express = require('express')
// Initialize express instance
const app = express()


// Starts server, should always be at the bottom of the file!
app.listen(3000, function(){
    console.log('App on port 3000')
})
