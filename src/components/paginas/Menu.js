import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../firebase/index';
import Platillo from '../ui/Platillo';

const Menu = () => {

    // definir el state para los platillos
    const [ platillos, guadarPlatillos ] = useState([]);

    // Context con las operaciones de firebase
    const { firebase } = useContext(FirebaseContext);

    // consultar la base de datos al cargar
    
    useEffect(() => {
        const obtenerPlatillos = () => {
            firebase.db.collection('productos').onSnapshot(manejarSnapshot);
            
        }
        obtenerPlatillos();
    }, []);

    // Snapshot nos permite utilizar la base de datos en tiempo real de firestore
    function manejarSnapshot(snapshot) {
        const platillos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        // almacenar los resultados en el state
        guadarPlatillos(platillos);
        // console.log(platillos)
    }

    return ( 
        <>
            <h1 className='text-3xl font-light mb4'>Menu</h1>
            <Link to="/nuevo-platillo"  className='bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold'>
                Agregar Platillo
            </Link>

            {platillos.map( platillo => (
                <Platillo
                    key={platillo.id}
                    platillo={platillo}
                />
            ))}
        </>
     );
}
 
export default Menu;