
import {getFirestore} from 'firebase/firestore'
import firebaseApp from '../firebaseConfig'
import { getAuth } from 'firebase/auth'



const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
export {auth,db}