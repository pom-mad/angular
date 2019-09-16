const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const db = "mongodb+srv://usermad:passwordmad@eventsdb-gveha.mongodb.net/test?retryWrites=true&w=majority"

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(db, err => {
    if(err){
        console.error('Error!' + err)
    }else{
        console.log('Connected to mongodb')
    }
})

router.get('/', (req, res) => {
    res.send('From API route')
})

module.exports = router
useUnifiedTopology: true