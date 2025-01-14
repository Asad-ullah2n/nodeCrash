import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use('/api/user', userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`server running on port  ${PORT}`);
});
// DfQrR9OJuv37131T
