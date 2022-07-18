import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://firevol:ganesh%4068@cluster0.kvg8g.mongodb.net/ecommerce`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
