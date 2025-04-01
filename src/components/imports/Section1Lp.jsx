import styles from '../../styles/modules/section1Lp.module.css';

import imgSection1Lp from '../../assets/images/Imagen.png';

import { Form } from './Form';

export const Section1Lp = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitulo}>
                <h1 className="light-text">
                    ¡Únete y <br />
                    <span className="bold-text">logra tu potencial laboral</span>
                </h1>
                <h2 className="light-text">con Reclutavit</h2>
            </div>

            <div className={styles.sectionContenido}>
                <img src={imgSection1Lp} alt="" />

                <div className={styles.form}>
                    <Form />
                </div>
            </div>
        </section>
    );
};
