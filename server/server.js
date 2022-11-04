import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';


const PORT = 4000;
const app = express();
app.use(cors);

await mongoose.connect("mongodb+srv://Rishabhpal:zz5dx7s2hrh6nDqR@cluster0.ljgf0cl.mongodb.net/?retryWrites=true&w=majority");

console.log("MongoDB connection is successful")

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000");
})