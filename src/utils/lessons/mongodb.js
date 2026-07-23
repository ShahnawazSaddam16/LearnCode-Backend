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
  {
    order: 3,
    title: "Connecting to MongoDB with Mongoose",
    theory: "Mongoose connects to a MongoDB instance using a connection string via mongoose.connect, and emits events like connected and error on the underlying connection object to help monitor connection health.",
    code: `const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Connection error:", err);
});`,
  },
  {
    order: 4,
    title: "CRUD Operations: Create",
    theory: "New documents are created either by instantiating a model and calling save, or by using the create method directly on the model, which handles instantiation and saving in one step.",
    code: `const product = new Product({ name: "Laptop", price: 1200 });
await product.save();

const created = await Product.create({ name: "Mouse", price: 25 });`,
  },
  {
    order: 5,
    title: "CRUD Operations: Read and Find",
    theory: "Documents are retrieved using find for multiple matches, findOne for a single match, and findById for retrieving by the document's unique identifier.",
    code: `const allProducts = await Product.find();
const cheapProducts = await Product.find({ price: { $lt: 100 } });
const oneProduct = await Product.findOne({ name: "Laptop" });
const byId = await Product.findById("64f1a2b3c4d5e6f7a8b9c0d1");`,
  },
  {
    order: 6,
    title: "CRUD Operations: Update",
    theory: "Documents can be updated using updateOne or updateMany for direct updates, or findByIdAndUpdate to update and optionally return the modified document in a single call.",
    code: `await Product.updateOne({ name: "Laptop" }, { price: 1100 });
await Product.updateMany({ price: { $lt: 50 } }, { $set: { onSale: true } });

const updated = await Product.findByIdAndUpdate(
  "64f1a2b3c4d5e6f7a8b9c0d1",
  { price: 999 },
  { new: true }
);`,
  },
  {
    order: 7,
    title: "CRUD Operations: Delete",
    theory: "Documents are removed using deleteOne or deleteMany based on a filter condition, or findByIdAndDelete when the document's id is already known.",
    code: `await Product.deleteOne({ name: "Mouse" });
await Product.deleteMany({ price: { $lt: 10 } });

const deleted = await Product.findByIdAndDelete("64f1a2b3c4d5e6f7a8b9c0d1");`,
  },
  {
    order: 8,
    title: "Schema Types and Validation",
    theory: "Mongoose supports schema types such as String, Number, Boolean, Date, and Array, each accepting validation options like required, min, max, minlength, maxlength, and enum to enforce data integrity.",
    code: `const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  age: { type: Number, min: 0, max: 120 },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});`,
  },
  {
    order: 9,
    title: "Default Values and Virtuals",
    theory: "Default values automatically populate a field when no value is provided during creation. Virtuals are computed properties that do not get stored in the database but are derived from existing fields.",
    code: `const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  isActive: { type: Boolean, default: true },
});

userSchema.virtual("fullName").get(function () {
  return \`\${this.firstName} \${this.lastName}\`;
});`,
  },
  {
    order: 10,
    title: "Schema Methods and Statics",
    theory: "Instance methods are defined on schema.methods and are available on individual documents, while static methods are defined on schema.statics and are called directly on the model itself.",
    code: `userSchema.methods.isAdult = function () {
  return this.age >= 18;
};

userSchema.statics.findByRole = function (role) {
  return this.find({ role });
};

const user = await User.findOne();
console.log(user.isAdult());
const admins = await User.findByRole("admin");`,
  },
  {
    order: 11,
    title: "Middleware and Hooks",
    theory: "Mongoose middleware, also called hooks, run custom logic before or after certain operations like save or remove, commonly used for hashing passwords or logging changes.",
    code: `userSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

userSchema.post("save", function (doc) {
  console.log("Saved user:", doc.name);
});`,
  },
  {
    order: 12,
    title: "Population and References",
    theory: "References link documents across collections using an ObjectId and a ref to another model. The populate method replaces those references with the actual referenced documents when querying.",
    code: `const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  total: Number,
});

const orders = await Order.find().populate("user");`,
  },
  {
    order: 13,
    title: "Indexes in MongoDB",
    theory: "Indexes improve query performance by allowing MongoDB to quickly locate documents without scanning the entire collection, defined in a schema using the index method or an index option on a field.",
    code: `userSchema.index({ email: 1 });

await User.collection.createIndex({ email: 1 });`,
  },
  {
    order: 14,
    title: "Comparison Query Operators",
    theory: "Query operators like $gt, $gte, $lt, $lte, and $ne compare field values against a given value, allowing range-based filtering beyond simple equality matches.",
    code: `const results = await Product.find({
  price: { $gt: 100, $lte: 500 },
});

const notLaptop = await Product.find({ name: { $ne: "Laptop" } });`,
  },
  {
    order: 15,
    title: "Logical Query Operators",
    theory: "Logical operators such as $and, $or, $not, and $in combine multiple conditions or check whether a value matches any item in a given list.",
    code: `const results = await Product.find({
  $or: [{ price: { $lt: 50 } }, { onSale: true }],
});

const filtered = await Product.find({
  category: { $in: ["electronics", "accessories"] },
});`,
  },
  {
    order: 16,
    title: "Array Update Operators",
    theory: "Array-specific update operators modify array fields directly in the database, with $push adding elements, $pull removing matching elements, and $addToSet adding an element only if it does not already exist.",
    code: `await User.updateOne({ _id: userId }, { $push: { tags: "vip" } });
await User.updateOne({ _id: userId }, { $pull: { tags: "inactive" } });
await User.updateOne({ _id: userId }, { $addToSet: { tags: "verified" } });`,
  },
  {
    order: 17,
    title: "Sorting, Limiting, and Pagination",
    theory: "Query results can be sorted with sort, restricted in count with limit, and offset for pagination using skip, commonly combined to implement paginated API responses.",
    code: `const page = 2;
const pageSize = 10;

const products = await Product.find()
  .sort({ price: -1 })
  .skip((page - 1) * pageSize)
  .limit(pageSize);`,
  },
  {
    order: 18,
    title: "Projection: Selecting Specific Fields",
    theory: "Projection controls which fields are returned in a query result, using the select method or a projection object, improving performance by avoiding unnecessary data transfer.",
    code: `const users = await User.find().select("name email -_id");
const usersAlt = await User.find({}, { name: 1, email: 1, _id: 0 });`,
  },
  {
    order: 19,
    title: "Embedded Documents and Subdocuments",
    theory: "A subdocument is a schema nested inside another schema, allowing related data to be embedded directly within a parent document rather than stored in a separate collection.",
    code: `const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  address: addressSchema,
});`,
  },
  {
    order: 20,
    title: "Arrays of Subdocuments",
    theory: "A schema field can hold an array of subdocuments, each with its own automatically generated id, useful for modeling one-to-many relationships embedded within a single parent document.",
    code: `const commentSchema = new mongoose.Schema({
  text: String,
  author: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  comments: [commentSchema],
});

post.comments.push({ text: "Great post!", author: "Ali" });
await post.save();`,
  },
  {
    order: 21,
    title: "Aggregation: $project and $unwind",
    theory: "The $project stage reshapes documents by including, excluding, or computing fields, while $unwind deconstructs an array field into separate documents, one per array element.",
    code: `const result = await Order.aggregate([
  { $unwind: "$items" },
  { $project: { product: "$items.name", quantity: "$items.quantity" } },
]);`,
  },
  {
    order: 22,
    title: "Aggregation: $lookup for Joins",
    theory: "The $lookup stage performs a left outer join with another collection, merging matching documents into an array field, similar to a JOIN operation in relational databases.",
    code: `const result = await Order.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails",
    },
  },
]);`,
  },
  {
    order: 23,
    title: "Transactions in MongoDB",
    theory: "Transactions allow multiple operations across one or more collections to be executed atomically, ensuring either all changes succeed together or none are applied, using a session started with startSession.",
    code: `const session = await mongoose.startSession();
session.startTransaction();

try {
  await Account.updateOne({ _id: fromId }, { $inc: { balance: -100 } }, { session });
  await Account.updateOne({ _id: toId }, { $inc: { balance: 100 } }, { session });
  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
} finally {
  session.endSession();
}`,
  },
  {
    order: 24,
    title: "Unique and Compound Indexes",
    theory: "A unique index prevents duplicate values for a field across a collection. A compound index spans multiple fields, optimizing queries that filter or sort on that specific combination of fields together.",
    code: `userSchema.index({ email: 1 }, { unique: true });
orderSchema.index({ userId: 1, createdAt: -1 });`,
  },
  {
    order: 25,
    title: "Text Search Indexes",
    theory: "A text index enables full-text search across string fields, allowing queries with the $text operator and $search parameter to find documents containing specific words or phrases.",
    code: `productSchema.index({ name: "text", description: "text" });

const results = await Product.find({ $text: { $search: "wireless mouse" } });`,
  },
  {
    order: 26,
    title: "Geospatial Queries",
    theory: "MongoDB supports geospatial data types like Point, and a 2dsphere index enables location-based queries such as finding documents near a specific coordinate using $near.",
    code: `const storeSchema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: [Number],
  },
});

storeSchema.index({ location: "2dsphere" });

const nearby = await Store.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [74.35, 31.52] },
      $maxDistance: 5000,
    },
  },
});`,
  },
  {
    order: 27,
    title: "Schema Timestamps",
    theory: "Passing the timestamps option to a schema automatically adds and manages createdAt and updatedAt fields, tracking when each document was created and last modified without manual handling.",
    code: `const postSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
  },
  { timestamps: true }
);`,
  },
  {
    order: 28,
    title: "Custom Validators",
    theory: "Beyond built-in validation options, Mongoose allows custom validator functions on a schema field to enforce specific business rules, returning a boolean and an optional custom error message.",
    code: `const userSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: {
      validator: function (value) {
        return /^\\S+@\\S+\\.\\S+$/.test(value);
      },
      message: (props) => \`\${props.value} is not a valid email\`,
    },
  },
});`,
  },
  {
    order: 29,
    title: "findOneAndUpdate and Upsert",
    theory: "findOneAndUpdate finds a matching document and updates it in a single atomic operation. Setting the upsert option creates a new document if no match is found instead of doing nothing.",
    code: `const result = await Product.findOneAndUpdate(
  { sku: "ABC123" },
  { $set: { stock: 50 } },
  { new: true, upsert: true }
);`,
  },
  {
    order: 30,
    title: "Bulk Write Operations",
    theory: "bulkWrite executes multiple insert, update, and delete operations in a single request to the database, reducing round trips and improving performance for batch data changes.",
    code: `await Product.bulkWrite([
  { insertOne: { document: { name: "Keyboard", price: 60 } } },
  { updateOne: { filter: { name: "Mouse" }, update: { $set: { price: 30 } } } },
  { deleteOne: { filter: { name: "Old Item" } } },
]);`,
  },
  {
    order: 31,
    title: "MongoDB Data Types: ObjectId and Dates",
    theory: "ObjectId is a 12-byte unique identifier automatically generated for every document's id field. Dates are stored as BSON date objects, allowing accurate time-based queries and sorting.",
    code: `const mongoose = require("mongoose");

const id = new mongoose.Types.ObjectId();
console.log(id.toString());

const recentOrders = await Order.find({
  createdAt: { $gte: new Date("2026-01-01") },
});`,
  },
  {
    order: 32,
    title: "Connection Pooling and Options",
    theory: "Mongoose manages a pool of reusable database connections to handle concurrent requests efficiently, configurable through options like maxPoolSize, serverSelectionTimeoutMS, and autoIndex.",
    code: `mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
});`,
  },
  {
    order: 33,
    title: "Error Handling in Mongoose",
    theory: "Mongoose operations can throw validation errors, cast errors, or duplicate key errors, which should be caught and handled gracefully, often by inspecting the error's name or code property.",
    code: `try {
  await User.create({ email: "invalid-email" });
} catch (err) {
  if (err.name === "ValidationError") {
    console.log("Validation failed:", err.message);
  } else if (err.code === 11000) {
    console.log("Duplicate key error");
  }
}`,
  },
  {
    order: 34,
    title: "Lean Queries for Performance",
    theory: "Calling lean on a query returns plain JavaScript objects instead of full Mongoose documents, skipping features like virtuals and change tracking, which improves performance for read-only operations.",
    code: `const products = await Product.find().lean();

console.log(products[0] instanceof mongoose.Document);`,
  },
];