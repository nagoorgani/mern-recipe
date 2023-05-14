import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://ynagoorgani:k4OhdWjcWbSxekST@cluster0.kj4nnwp.mongodb.net/Cluster0?retryWrites=true&w=majority").then(() => {
    console.log("DATABASE CONNECTED");
});

app.listen(3500, () => {
    
    console.log(`Connected to localhost port ${3500}`);
})
