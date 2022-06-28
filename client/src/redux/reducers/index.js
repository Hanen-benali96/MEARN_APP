import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import productReducer from './productReducer'
import userReducer from './userReducer'
import handleCart from "./handleCart";
import  contactReducer,{CONTACT_KEY} from "./contactReducer";
const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  productReducer,
  userReducer,
 handleCart,
  [CONTACT_KEY]:contactReducer,

});
export default rootReducer;