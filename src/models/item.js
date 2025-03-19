import { Schema } from "mongoose";
import { createIfNotExist } from "../helpers/models";

const itemSchema = new Schema({
  name: String,
});

const ItemModel = createIfNotExist("Item", itemSchema);

export default ItemModel;
