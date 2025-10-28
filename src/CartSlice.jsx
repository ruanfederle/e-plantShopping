import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    // total: 0,
  },

  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Verifica se o item já existe no carrinho
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        // Se já existir, aumenta a quantidade
        existingItem.quantity++;
      } else {
        // Se não existir, adiciona o item com quantidade 1
        state.items.push({ name, image, cost, quantity: 1 });
      }

    //   // Recalcula o total do carrinho
    //   state.total = state.items.reduce(
    //     (acc, item) => acc + item.cost * item.quantity,
    //     0
    //   );
    },

    removeItem: (state, action) => {
      const name = action.payload;

      // Remove o item filtrando o array
      state.items = state.items.filter((item) => item.name !== name);

    //   // Atualiza o total
    //   state.total = state.items.reduce(
    //     (acc, item) => acc + item.cost * item.quantity,
    //     0
    //   );
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find((item) => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }

    //   // Atualiza o total também aqui
    //   state.total = state.items.reduce(
    //     (acc, item) => acc + item.cost * item.quantity,
    //     0
    //   );
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
