const Personaje = ({ caracter }) => {
    return (
        <div className="text-center p-3 padre m-2 ">
            <h2 className="nombre">{caracter.name}</h2>
            <div className="row">
                <div className="col-md-6">
                    <h6 className="num"># - {caracter.id}</h6>
                    <img className="img-fluid rounded-pill" src={caracter.image} alt={caracter.name} />
                </div>

                <div className="col-md-6 cen">
                    <h5>Origen</h5>
                    <p>{caracter.origin.name}</p>
                    <p>{caracter.species} - {caracter.gender}</p>
                    <p>Ultima ubicacion registrada : {caracter.location.name}</p>
                    <p>{caracter.status} <samp className={caracter.status === 'Alive' ? 'vivo' : 'muerto'}>◉</samp></p>
                </div>
            </div>
        </div>
    );
}

export default Personaje;