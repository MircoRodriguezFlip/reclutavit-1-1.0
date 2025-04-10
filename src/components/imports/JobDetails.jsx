import styles from '../../styles/modules/sectionVp1.module.css';

import { NavLink } from 'react-router-dom';

export const JobDetails = ({ job }) => {
    if (!job) {
        return (
            <div className={styles.placeholder}>
                <p className="light-text">Selecciona una vacante para ver los detalles</p>
            </div>
        );
    }

    return (
        <div key={job.id} className={`${styles.detallesVacante} fade-in`} aria-live="polite">
            <h3 className="bold-text">{job.fields.title}</h3>
            <p className="light-text">
                <strong>Descripción:</strong> <br /> {job.fields.description}
            </p>
            <p className="light-text">
                <strong>Habilidades:</strong> <br /> {job.fields.skills}
            </p>
            <p className="light-text">
                <strong>Responsabilidades:</strong> <br /> {job.fields.responsibilities}
            </p>
            <p className="light-text">
                <strong>Oferta:</strong> <br /> {job.fields.offer}
            </p>
            <p className="light-text">
                <strong>Tipo:</strong> <br /> {job.fields.type}
            </p>
            <p className="light-text">
                <strong>Tiempo:</strong> <br /> {job.fields.time}
            </p>
            <p className="light-text">
                <strong>Horario:</strong> <br /> {job.fields.work_days} <br /> {job.fields.work_time}
            </p>
            <NavLink to={`/postular?id=${job.id}`} aria-label="Postular a la vacante" className={styles.botonPostular}>
                <button className="boton-1 bold-text">POSTULAR</button>
            </NavLink>
        </div>
    );
};
