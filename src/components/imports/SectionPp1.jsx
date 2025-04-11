import styles from '../../styles/modules/sectionPp1.module.css';

import { FormPostular } from './FormPostular';

export const SectionPp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="bold-text">Postula Aquí</h1>
            </header>

            <div className={styles.form}>
                <FormPostular />
            </div>
        </section>
    );
};
