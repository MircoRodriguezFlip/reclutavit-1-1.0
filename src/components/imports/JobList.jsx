import styles from '../../styles/modules/sectionVp1.module.css';

import { NavLink } from 'react-router-dom';

export const JobList = ({ jobs, activeJob, onJobClick }) => {
    if (jobs.length === 0) {
        return (
            <div className={styles.placeholder}>
                <p className="light-text">No hay vacantes disponibles</p>
            </div>
        );
    }

    return (
        <div className={styles.cardColumn}>
            {jobs.map((job) => (
                <div key={job.id} className={`${styles.cardContainer} ${activeJob === job.id ? styles.active : ''}`}>
                    <NavLink onClick={() => onJobClick(job.id)} className={styles.buttonVacante} title={`Ver detalles de ${job.fields.title}`}>
                        <h3 className="bold-text">{job.fields.title}</h3>
                        <p className="light-text">
                            <strong>Tipo:</strong> {job.fields.type}
                        </p>
                        <p className="light-text">
                            <strong>Tiempo:</strong> {job.fields.time}
                        </p>
                        <p className="light-text">
                            <strong>Horario:</strong> {job.fields.work_days}
                        </p>
                    </NavLink>
                </div>
            ))}
        </div>
    );
};
