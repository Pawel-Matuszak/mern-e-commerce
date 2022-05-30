import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import productsRoutes from "./routes/products.js"
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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
app.use(express.json())


//Routes
app.use("/products", productsRoutes);

if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'));

  app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  })
}

app.listen(port, () => console.log(`App listening on port ${port}!`))