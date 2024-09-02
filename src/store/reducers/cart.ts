import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardapioItem, Restaurant } from '../../pages/Home';
import { ModalState } from '../../components/PratosList';

type CartState = {
  items: CardapioItem[];
  isOpen: boolean;
  isCheckoutOpen: boolean;
  isLocationOpen: boolean;
  isPaymentOpen: boolean;
  isSuccessMessage: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckoutOpen: false,
  isLocationOpen: false,
  isPaymentOpen: false,
  isSuccessMessage: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const game = state.items.find((item) => item.id === action.payload.id);
      if (!game) {
        state.items.push(action.payload);
      } else {
        alert('Este prato já está no carrinho');
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
      state.isCheckoutOpen = false;
    },
    close: (state) => {
      state.isOpen = false;
    },

    openLocation: (state) => {
      state.isLocationOpen = true;
      state.isOpen = false;
    },
    openPayment: (state) => {
      state.isPaymentOpen = true;
      state.isLocationOpen = false;
    },

    closeLocation: (state) => {
      state.isCheckoutOpen = false;
    }
  }
});

cartSlice.actions.add;

export const {
  add,
  remove,
  open,
  close,
  openLocation,
  openPayment,
  closeLocation
} = cartSlice.actions;
export default cartSlice.reducer;
