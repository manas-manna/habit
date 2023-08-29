const mongoose=require('mongoose');


mongoose.connect("mongodb+srv://groverdivyanshu97:grover@cluster0.0gajsdn.mongodb.net/HabbitTrackert?retryWrites=true&w=majority");

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to Mongodb"));

db.once('open',
    function(){
        console.log('connect to databse');
    })
 module.exports=db;
