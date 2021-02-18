import {firebaseApp} from './firebase'
import firebase from 'firebase'
require('firebase/firestore')

const db = firebase.firestore(firebaseApp)

export const getCollection = async(collection) => {
    const result = { statusResponse : false, data: null, error: null }
    try {
        const data = await db.collection(collection).get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        result.statusResponse = true 
        result.data = arrayData
    } catch (error) {
        result.error = error
    }
    return result
}

export const addDocument = async(collection, data) => {
    const result = { statusResponse : false, data: null, error: null }
    try {
        const reponse = await db.collection(collection).add(data)
        result.data = { id: reponse.id }
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }
    return result
}