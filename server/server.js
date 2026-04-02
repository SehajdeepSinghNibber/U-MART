import dotenv from 'dotenv'

//utils
import connectDb from './src/config/db.js'
import app from './src/app.js'

dotenv.config()

const PORT = process.env.PORT || 3000

 connectDb()

app.listen(PORT,()=>{
    console.log("Server is up at PORT:",PORT)
})