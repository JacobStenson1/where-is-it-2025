import { Schema } from "mongoose";
import {createIfNotExist} from '../helpers/models';

const menuItemSchema = new Schema({
  name: String,
});

const MenuItemModel = createIfNotExist("MenuItem", menuItemSchema);

export default MenuItemModel;
