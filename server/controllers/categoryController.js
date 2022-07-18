import Category from "../models/categoryModels.js";

const categoryContoller = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCategory: async (req, res) => {
    try {
      //if user has admin access
      const { name } = req.body;
      const category = await Category.findOne({ name });
      if (category)
        return res.status(400).json({ msg: "This Category already exists" });
      const newCategory = new Category({ name });
      await newCategory.save();
      res.json({ msg: "Created a Category!!" });
      //
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted the Category" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      await Category.findOneAndUpdate(req.params.id);
      res.json({ msg: "Updated the Category" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
export default categoryContoller;
