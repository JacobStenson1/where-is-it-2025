import mongoose from "mongoose";

let isConnected = false;

(async () => {
  try {
    if (isConnected) {
      console.log("Mongoose using existing connection.");
      return;
    }

    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    isConnected = mongoose.connections[0].readyState;

    console.log("MongoDB connection established successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error.message);
    // Exit process with failure
    process.exit(1);
  }
})();

// export default connectDB;
