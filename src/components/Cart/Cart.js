import React from 'react'
import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch ,useSelector} from 'react-redux'
import { incrementQuantity ,decrementQuantity} from '../../redux/reducer'
import Navbar from '../Navbar/Navbar'
import CartDataService from "../../service/service"

export default function Cart() {

 const dispatch=useDispatch()
 const {items}=useSelector(state=>state.cart)


 const increaseQuantity=async(id,itemId)=>{
    dispatch(incrementQuantity(itemId))
   

    try{
        const editItemDoc=await CartDataService.getSingleItem(id)
        
        const editItem = editItemDoc.data()
        const updateItem={...editItem,quantity:editItem.quantity+1}
        await CartDataService.updateCartData(id,updateItem)
    }
    catch(err){
        console.log(err.message)
    }
 }

 const decreaseQuantity=async(id,itemId)=>{
    dispatch(decrementQuantity(itemId))
    console.log(id)

    try{
        const editItemDoc=await CartDataService.getSingleItem(id)
        
        const editItem=editItemDoc.data()
        const updateItem={...editItem,quantity:editItem.quantity-1}
        await CartDataService.updateCartData(id,updateItem)
    }
    catch(err){
        console.log(err.message)
    }
 }

  return (
    <div>
        <Navbar/>
        <Container>
            <Row>
            <table className="w-100 mt-5">
            <tbody>
            {items.map(item=>


            <tr className=" border-bottom mb-3" key={item.itemId}>
                <td><img src={item.image} className="cart-recipe-img me-3" alt="recipe"/></td>
                <td><p>{item.title}</p></td>
                <td><p className="fw-bold">price</p></td>
       
                <td> <div>
                    <button className='btn btn-outline-success' onClick={()=>decreaseQuantity(item.id,item.itemId)}>-</button>
                    <button className='btn btn-success'>{item.quantity}</button>
                    <button className='btn btn-outline-success' onClick={()=>increaseQuantity(item.id,item.itemId)}>+</button>
                </div></td>
                {/* <td><button  className="btn bg-dark text-white" onClick={()=>deleteProduct(product.id)} >Delete</button></td>
 */}


            </tr>

)}
</tbody>
</table>
            </Row>
        </Container>

        {/* <ul>
        {items.map(item=>(
            <li key={item.itemId} className="d-flex flex-wrap align-items-center mb-3">
                <img src={item.image} className="cart-recipe-img me-3" alt="recipe"/>
                <p>{item.title}</p>
                <p>price</p>
                <div>
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                </div>
            </li>
        ))}
        </ul> */}
        
    </div>
  )
}
