import {db} from "../firebase-config"

import {collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore"

const usersDetailsCollectionRef=collection(db,"usersDetails")
class UsersDetailsService{

    // addUser=(newUser)=>{
    //     return addDoc(usersDetailsCollectionRef,newUser)
    // }

    addUsersDetails=(newUser)=>{
        return addDoc(usersDetailsCollectionRef,newUser)
    }

    getAllUsersDetails=()=>{
        return getDocs(usersDetailsCollectionRef)
    }

    getUserDetails=(id)=>{
        const user=doc(db,"usersDetails",id)
        return getDoc(user)
    }
}

export default new UsersDetailsService()