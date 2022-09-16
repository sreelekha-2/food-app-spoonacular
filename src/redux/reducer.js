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
      
       total:0,
       items:[]
    },
    reducers:{

        updateCart:(state,action)=>{
           
            state.items.push({...action.payload});
              
        },
        removeCartItem:(state,action)=>{

            const filteredItems=state.items.filter(item=>item.id!==action.payload);
            state.items=filteredItems
            console.log(filteredItems)
            
        },
        incrementQuantity:(state,action)=>{
          
            const item = state.items.find((item) => item.id === action.payload);
            
            item.quantity+=1;
        },
        decrementQuantity:(state,action)=>{
          
            const item = state.items.find((item) => item.id === action.payload);

            if(item.quantity>1){
                item.quantity-=1;
            }
            
        },
        updatePrice:(state)=>{

            if(state.items.length!==0){
                state.total=state.items.map(item=>item.price*item.quantity).reduce((acc,curr)=>acc+curr)
            }
            else{
                state.total=0
            }
           
        }
    },

    extraReducers:{
        [getCartData.fulfilled]: (state, { payload }) => {
            state.items = payload;
            if(state.items.length!==0){
                state.total=state.items.map(item=>item.price*item.quantity).reduce((acc,curr)=>acc+curr)
            }
            else{
                state.total=0
            }
           
          },
    }
})

export const {updateCart,incrementQuantity,decrementQuantity,removeCartItem,updatePrice}=cartSlice.actions
export default cartSlice.reducer;
