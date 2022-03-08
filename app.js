const express=require('express')
const { send } = require('express/lib/response')
const app=express()
const task=require('./routes/task')
const connectdb=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const errorHandler=require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes


app.use('/api/v1/tasks',task)
app.use(notFound)
app.use(errorHandler)




//port listen 
const port=3000

const start=async()=>{
   try {
      await connectdb(process.env.MONGO_URI)
      app.listen(port,console.log(`server is listening on ${port}`))
   } catch (error) {
      console.log(error);
   }
}

start()