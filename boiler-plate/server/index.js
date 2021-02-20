const express = require('express')
const app = express()
const port = 7000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://magarin:rhrnak213@boilerplate.2tzum.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/hello', (req, res)=>{
    res.send("안녕하세요 ~")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})