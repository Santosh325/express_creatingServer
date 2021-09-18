const express = require('express');
const PORT = 3000;
const app = express();

app.get('/',(req,res) => {
    res.send('hello world!!')
})

app.get('/messages',(req,res) => {
    res.send({
        'id': 1,
        'name': 'Albert jonh'
    })
})

app.post('/messages',(req,res) => {
    console.log('i am just posting');
})

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})