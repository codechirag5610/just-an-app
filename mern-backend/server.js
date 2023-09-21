import express from "express"
import mongoose from "mongoose"
import cors from 'cors'

import cards from './dbCards.js'

// App config

const app = express()
const port = process.env.PORT || 8080;
const connection_url = 'mongodb+srv://chirag6510:Chirag6510@cluster0.b3hew.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middlewares

app.use(express.json());
app.use(cors())
;
// DB config

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpt

app.get('/', (req, res)=>{res.status(200).send("Hello")});
app.post('/tinder/cards', (req, res) => {
    const dbCards = req.body;
    cards.create(dbCards, (err, data) => {
        if(err) {
            res.status(500).send("Error Occured");
        }else{
            res.status(201).send(data);
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    const dbCards = req.body;
    cards.find((err, data) => {
        if(err) {
            res.status(500).send("Error Occured");
        }else{
            res.status(200).send(data);
        }
    })
})

// Listener

app.listen(port, () => {console.log(`Running on port: ${port}`)});