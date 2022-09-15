import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import CartDataService from "../service/service"


 export const getCartData = createAsyncThunk('cart/getCart', async () => {
    const result =  await CartDataService.getTotalCartData();
    const finalArr=result.docs.map(doc=>({...doc.data(),id:doc.id}))
 
    return finalArr;
  });


const cartSlice=createSlice({
    name:"cart",
    initialState:{
      
       count:0,
       items:[]
    },
    reducers:{

        updateCart:(state,action)=>{
           
            state.items.push({...action.payload});
              
        },
        incrementQuantity:(state,action)=>{
          
            const item = state.items.find((item) => item.itemId === action.payload);
            
            item.quantity+=1;
        },
        decrementQuantity:(state,action)=>{
          
            const item = state.items.find((item) => item.itemId === action.payload);
            
            item.quantity-=1;
        }
    },

    extraReducers:{
        [getCartData.fulfilled]: (state, { payload }) => {
            state.items = payload;
          },
    }
})

export const {updateCart,incrementQuantity,decrementQuantity}=cartSlice.actions
export default cartSlice.reducer;
