import { useEffect, useState } from 'react'
import Personaje from './personaje';


function Navpagina({pagina , setpagina }) {
    return (
        <header className='d-flex align-items-center'>
            <p>Page : {pagina}</p>
            <button className='btn btn-primary btn-sm pote'
                onClick={() => {
                    setpagina(pagina - 1) 
                }}
            >Page {pagina - 1}</button>
            <button className='btn btn-primary btn-sm pote'
                onClick={() => {
                    setpagina(pagina + 1) 
                }}
            >Page {pagina + 1}</button>
        </header>
    )
}


const Lista = () => {

    const [caracter, setcaracter] = useState([])
    const [pagina, setpagina] = useState(1)
    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://rickandmortyapi.com/api/character?page=${pagina}`
            );
            const dato = await data.json();
            setcaracter(dato.results)
        }
        fetchData();
    }, [pagina]);


    return (
        <div className='container'>
            <Navpagina pagina={pagina} setpagina={setpagina}/>
            <div className='row'>
                {caracter.map(caracter => {
                    return (
                        <div className='col-md-6' key={caracter.id}>
                            <Personaje caracter={caracter} />
                        </div>
                    )
                })}
            <Navpagina pagina={pagina} setpagina={setpagina}/>
            </div>
        </div>
    );
}

export default Lista;