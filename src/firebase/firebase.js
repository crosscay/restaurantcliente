// import app from 'firebase/app';
// import 'firebase/firestore';
// // import 'firebase/compat/firestore';
// // import 'firebase/storage';

// import firebaseConfig from './config';

// class Firebase {
//     constructor() {
//         if(!app.apps.length) {
//             app.initializeApp(firebaseConfig)
//         }
//         this.dbcarlos = app.firestore()
//         // this.storage = app.storage();
//     }
// }

// const firebase = new Firebase();
// export default firebase;


import app from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
 
// importaciones necesarias para insertar
import { getFirestore, addDoc, collection } from "firebase/firestore";
 
import firebaseConfig from "./config.js";
 
class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
 
    // inicialización de firestore
    this.db = getFirestore();

    // console.log(this.db);
 
    // añadir un nuevo documento
    this.insertarProducto = async function insertarProducto(coleccion = "", cuerpo = {}) 
    {
      const resultado = await addDoc(collection(this.db, coleccion), {
        ...cuerpo,
      });
      return resultado;
    };
  }
}
 
const firebase = new Firebase();
export default firebase;
