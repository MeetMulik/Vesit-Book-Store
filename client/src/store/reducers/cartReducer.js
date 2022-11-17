import { createSlice } from "@reduxjs/toolkit";
import { discount } from "../../utils/discount";
const cartData = localStorage.getItem("cart");
const cartArray = cartData ? JSON.parse(cartData) : [];
function allItems(data) {
  let items = 0;
  for (let i = 0; i < data.length; i++) {
    items += data[i].quantity;
  }
  return items;
}
function calcuateTotal(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].price;
  }
  return total;
}
const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: cartArray.length > 0 ? cartArray : [],
    items: cartArray.length > 0 ? allItems(cartArray) : 0,
    total: cartArray.length > 0 ? calcuateTotal(cartArray) : 0,
  },
  reducers: {
    addCart: (state, { payload }) => {
      state.cart.push(payload);
      state.items += payload.quantity;
      state.total += payload.price;
    },
    removeItem: (state, { payload }) => {
      const find = state.cart.find((item) => item._id === payload);
      if (find) {
        const index = state.cart.indexOf(find);
        state.items -= find.quantity;
        state.total -= find.price;
        state.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    emptyCart: (state) => {
      state.cart = [];
      state.items = 0;
      state.total = 0;
    },
  },
});
export const { addCart, incQuantity, decQuantity, removeItem, emptyCart } =
  cartReducer.actions;
export default cartReducer.reducer;
