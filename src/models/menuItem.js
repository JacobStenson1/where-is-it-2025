import { MODELS } from "@constants/mongodb";
import { Schema } from "mongoose";
import { createIfNotExist } from "../helpers/models";

const menuItemSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  name: String,
  type: String,
  parent_id: String,
});

const MenuItemModel = createIfNotExist(MODELS.MENU_ITEM, menuItemSchema);

export default MenuItemModel;
