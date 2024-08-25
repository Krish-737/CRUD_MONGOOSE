const mongodb = require('mongodb');

const mongoose = require('mongoose');



async function getDatabase(){

    mongoose.connect('mongodb://127.0.0.1:27017/library').then(() => {
        console.log('Database connected')
    }).catch((err) => {
        console.log('Connection error!', err)
    })
}



module.exports = {
    getDatabase,
    
}