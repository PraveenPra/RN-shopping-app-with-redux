import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import p from '@/data/products.json'

export interface ProductsProp {
  products: {}[],
  productImgs:{}[],
  selectedProd:{}
}

const initialState:ProductsProp = {
  products: p.products,
  productImgs:p.products.map((item,i)=>item.images[0]),
  selectedProd:{}
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProd:(state,action:PayloadAction<number>)=>{
        state.selectedProd = state.products[action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedProd } = productsSlice.actions

export default productsSlice.reducer