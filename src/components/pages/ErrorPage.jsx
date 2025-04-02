import styles from '../../styles/modules/errorPage.module.css';

import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <main className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="bold-text">
                    Error 404 <br /> Página no encontrada
                </h1>

                <h2 className="light-text">Lo sentimos, la página que estás buscando no existe.</h2>
            </header>

            <section>
                <NavLink to="/" aria-label="Ir a la página de inicio.">
                    <button className="boton-1 bold-text" title="Haz clic para ir a la página de inicio">
                        IR AL INICIO
                    </button>
                </NavLink>
            </section>
        </main>
    );
};

export default ErrorPage;
