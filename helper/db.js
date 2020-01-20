const mongoose = require('mongoose');

module.exports = ()=> {
    mongoose.connect('mongodb://localhost/movies', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("mongoDB connection is provided.");
        })
        .catch((err)=>{
            console.log("mongoDB connection failed!");
        });

    mongoose.Promise = global.Promise;
};