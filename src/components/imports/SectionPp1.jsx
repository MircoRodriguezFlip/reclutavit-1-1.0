import styles from '../../styles/modules/sectionPp1.module.css';

import imgSection1Pp from '../../assets/images/imagen-section-1-pp.webp';

import { FormPostular } from './FormPostular';

export const SectionPp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="bold-text">Postula Aquí</h1>
            </header>

            <section className={styles.sectionContenido}>
                <img src={imgSection1Pp} alt="Agente de Reclutavit esperando tu contacto de postulación" />

                <div className={styles.form}>
                    <FormPostular />
                </div>
            </section>
        </section>
    );
};
