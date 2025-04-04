import styles from '../../styles/modules/sectionLp2.module.css';

import { categoriasSectionLp2 } from '../utils/categoriasSectionLp2';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">¡Conoce nuestros beneficios!</h2>
            </header>

            <section className={styles.sectionCategorias}>
                {categoriasSectionLp2.map((categoria) => (
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
