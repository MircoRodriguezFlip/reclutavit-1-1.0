import styles from '../../styles/modules/section2Lp.module.css';

import { categoriasSection2Lp } from '../utils/categoriasSection2Lp';

export const Section2Lp = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">¡Conoce nuestros beneficios!</h2>
            </header>

            <section className={styles.sectionCategorias}>
                {categoriasSection2Lp.map((categoria) => (
                    <div className={styles.sectionCategoria} key={categoria.id}>
                        <img src={categoria.img} alt={categoria.alt} />

                        <div className={styles.sectionCategoriaTexto}>
                            <p className="light-text">{categoria.titulo}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
};
