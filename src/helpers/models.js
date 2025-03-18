import mongoose from "mongoose";

export const createIfNotExist = (modelName, schema) => {
  return mongoose.models[modelName] || mongoose.model(modelName, schema);
};

export const newUniqueId = () => new mongoose.Types.ObjectId();
