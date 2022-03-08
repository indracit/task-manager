const mongoose=require('mongoose')


const connectdb=(url)=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
}

module.exports=connectdb