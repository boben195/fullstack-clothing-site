import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";



const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());


app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
    res.send("Its alife");
});

app.listen(port, () => console.log("Server started on port: " + port));