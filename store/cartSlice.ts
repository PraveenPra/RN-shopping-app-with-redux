import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'


export interface cartProp {
 products:[],
 deliveryFee:number,
 freeOfferFrom:number

}

const initialState:cartProp = {
    products:[],
    deliveryFee:15,
    freeOfferFrom:1200,
    
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state,action:PayloadAction)=>{

        const newPrd = action.payload;

       const cartitem = state.products.find((p)=>p.product.id === newPrd.id)

       if(cartitem){
        //existing item
        cartitem.quantity += 1;
        
       }else{
        //new item
           state.products.push({product:newPrd,quantity:1})
           state.cartQuantity += 1;
        }

        //add this item price to total
        state.total += newPrd.price
    },
    changeAmt:(state,action)=>{

        const {pid,amt} = action.payload;


       let cartitem = state.products.find((p)=>p.product.id === pid)

       if(cartitem){
        //inc or dec the item quantity
        cartitem.quantity += amt;
        state.total += cartitem.product.price * amt;
       }
       
       if( cartitem.quantity <= 0){
        //remove the item
        state.products = state.products.filter(p=>p !== cartitem)
        state.cartQuantity -= 1
       }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart ,changeAmt} = cartSlice.actions

export default cartSlice.reducer

//selectors
export const numbOfCartItems = (state)=>state.cart.products.length;

export const subTotal = (state)=> {
 
  return state.cart.products.reduce((sum,current)=> sum + current.product.price * current.quantity,0);
  
}

const cartSelector = (state:RootState)=>state.cart;

export const deliveryFee = createSelector(
  cartSelector,subTotal,(cart,subTot) => subTot > cart.freeOfferFrom ? 0 : cart.deliveryFee
)

