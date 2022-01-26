import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import productsRoutes from "./routes/products.js"
import bodyParser from 'body-parser'

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
app.use(bodyParser.json())


//Routes
app.use("/products", productsRoutes);

app.listen(port, () => console.log(`App listening on port ${port}!`))