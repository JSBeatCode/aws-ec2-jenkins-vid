const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello There!')
})

app.listen(7771, () => {
    console.log('Server Started on Port 7771')
})