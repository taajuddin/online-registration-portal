const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const CONNECTION_URI= "mongodb://localhost:27017/online-registration-portal"
mongoose.connect(CONNECTION_URI,{useNewUrlParser: true})
    .then(()=>{
        console.log('succesfully connected to db')
    })
    .catch(()=>{
        console.log('error connecting to db')
    })

module.exports = mongoose