import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"

const app = express()
const port = process.env.PORT || 5000;

//Mongodb connect
const DB_URI = process.env.DB_URI;

const main = async () => {
  await mongoose.connect(DB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  });
}

main().catch(err => console.error(err));

//Routes

app.get('/home', (req, res) => {
  res.json({msg: "success"})
})

app.listen(port, () => console.log(`App listening on port ${port}!`))