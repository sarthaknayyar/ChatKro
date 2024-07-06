const mongoose = require('mongoose');

function connectDB(url){
    mongoose.connect(url).then(()=>{
        console.log('Connected to database');
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = {connectDB}
