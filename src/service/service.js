import {db} from "../firebase-config"

import {collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore"

const usernamesCollectionRef=collection(db,"users")
const usersDetailsCollectionRef=collection(db,"usersDetails")
class UsernamesService{

    addUser=(newUser)=>{
        return addDoc(usernamesCollectionRef,newUser)
    }

    addUsersDetails=(newUser)=>{
        return addDoc(usersDetailsCollectionRef,newUser)
    }

    getAllUsers=()=>{
        return getDocs(usernamesCollectionRef)
    }
}

export default new UsernamesService()