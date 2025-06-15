import mongoose from "mongoose";

// Use your Docker Compose service name (typically "mongodb") instead of "localhost"
const db = "mongodb://localhost:27017/admin";

const connectDb = () => {
  return mongoose
    .connect(db)
    .then(() => {
      console.log("Connected to MongoDB.");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB.", err);
    });
};

export default connectDb;
