module.exports = [
  {
    order: 1,
    title: "Schemas and Models with Mongoose",
    theory: "Mongoose schemas define the shape and validation rules for documents in a MongoDB collection. A model is a compiled version of the schema that provides methods to interact with the database.",
    code: `const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);`,
  },
  {
    order: 2,
    title: "Aggregation Pipeline",
    theory: "The aggregation pipeline processes documents through a series of stages like match, group, and sort to transform and analyze data directly inside the database.",
    code: `const result = await Order.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
]);`,
  },
];