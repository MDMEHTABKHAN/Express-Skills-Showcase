require ('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send("Welcome to Md Mehtab Khan's Express App!");
});

app.get('/skills', (req,res) =>{
    res.send(`
    <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>BOOTSTRAP</li>
        <li>TAILWIND CSS</li>
        <li>REACTJS</li>
        <li>NODE.JS</li>
        <li>EXPRESSJS</li>
        <li>MONGODB</li>
        <li>MYSQL</li>
        <li>PYTHON</li>
        <li>JAVA</li>
        <li>GIT & GITHUB</li>
        <li>MS WORD</li>
        <li>MS POWER POINT</li>
        <li>MS EXCEL</li>
        <li>POWER BI</li>
 </ol>`)
})


app.listen(process.env.PORT, () => {
    console.log(`server running at ${port}`)
})