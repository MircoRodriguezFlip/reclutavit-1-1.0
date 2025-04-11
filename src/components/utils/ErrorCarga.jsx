import imgCargando from '../../assets/images/error.webp';

export const ErrorCarga = () => {
    return (
        <div className="error-carga">
            <img src={imgCargando} alt="Error al cargar los datos" />
            <h3 className="bold-text">Lo sentimos</h3>
            <p className="light-text">
                No se han podido cargar los datos <br />
                recarga la pagina o intentalo mas tarde
            </p>
        </div>
    );
};
