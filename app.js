const express = require('express');
const app = express ();
const port = 3030;

app.get( "/", (req,res) => {
    res.send("Sosi")
})
app.listen(port, ()=>{
    console.log (`server is running on http:localhost:${port}`);
}); 
