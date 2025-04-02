import styles from '../../styles/modules/section1Lp.module.css';

import imgSection1Lp from '../../assets/images/Imagen.png';

import { Form } from './Form';

export const Section1Lp = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="light-text">
                    ¡Únete y <br />
                    <span className="bold-text">logra tu potencial laboral</span>
                </h1>
                <h2 className="light-text">con Reclutavit</h2>
            </header>

            <section className={styles.sectionContenido}>
                <img src={imgSection1Lp} alt="Agente de Reclutavit esperando tu contacto" />

                <div className={styles.form}>
                    <Form />
                </div>
            </section>
        </section>
    );
};
