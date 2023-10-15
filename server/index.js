import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import productsRouter from "./routes/products.routes.js";
import { PORT } from "./config.js";

const app = express();

app.use(cors())
app.listen(PORT, () => console.log(`Server up at PORT ${PORT}!`));

app.use("/api/products", productsRouter);

const URI =
  "mongodb+srv://ecommercecoder:ecommercecoder@ecommerce.uk3b0az.mongodb.net/ecommerce?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
try {
    mongoose.connect(URI);
    console.log('Mongo DB connected!');
} catch (error) {
    console.log(error)
}
