import mongoose from "mongoose";
import Product from "../models/product.model.js";



export const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
      message: "Product added successfully",
    });
  } catch (error) {
    console.log("error", error);

    res.status(500).json({ success: false, message: "Sever Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfullt",
      data: deleteProduct,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Requested data not Found" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }

  const product = req.body;

  try {
    const productUpdated = await Product.findByIdAndUpdate(id, product, {
      success: true,
    });
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: productUpdated,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
