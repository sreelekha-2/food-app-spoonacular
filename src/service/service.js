import {db} from "../firebase-config"

import {collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore"

const cartDataCollectionRef=collection(db,"cartData")

class CartDataService{

    addCartData=(data)=>{
        return addDoc(cartDataCollectionRef,data)
    }

   updateCartData=(id,updateBook)=>{
    const itemDoc=doc(db,"cartData",id)
    
    return updateDoc(itemDoc,updateBook)
   }

   getSingleItem=(id)=>{
    const itemDoc=doc(db,"cartData",id)
    return getDoc(itemDoc)
   }

    getTotalCartData=()=>{
        return getDocs(cartDataCollectionRef)
    }
}

export default new CartDataService()