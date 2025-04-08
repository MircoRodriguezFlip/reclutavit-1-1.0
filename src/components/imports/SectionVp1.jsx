import styles from '../../styles/modules/sectionVp1.module.css';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const SectionVp1 = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeJob, setActiveJob] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Actualiza el valor de isMobile en función del tamaño de la ventana
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Llamada a la API para obtener las vacantes
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/jobs');
                setJobs(response.data.records || response.data);
            } catch (err) {
                setError(err.message || 'Error al obtener las vacantes');
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleClick = (jobId) => {
        setActiveJob((prevActive) => (prevActive === jobId ? null : jobId));
    };

    if (loading) return <div className={styles.mensaje}>Cargando vacantes...</div>;
    if (error) return <div className={styles.mensaje}>Error: {error}</div>;

    // Renderizado para Desktop: columna izquierda para botones y columna derecha para el detalle activo
    if (!isMobile) {
        const activeJobDetails = jobs.find((job) => job.id === activeJob);

        return (
            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text">Vacantes disponibles</h1>
                </header>

                <section className={styles.sectionContenido}>
                    {/* Columna izquierda: Lista de botones */}
                    <div className={styles.cardColumn}>
                        {jobs.map((job) => (
                            <div key={job.id} className={styles.cardContainer}>
                                <NavLink
                                    onClick={() => handleClick(job.id)}
                                    className={styles.buttonVacante}
                                    title={`Ver detalles de ${job.fields.title}`}
                                >
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

                    {/* Columna derecha: detalle de la vacante activa */}
                    <div className={styles.detalleColumn}>
                        {activeJobDetails ? (
                            <div className={styles.detallesVacante} aria-live="polite">
                                <h3 className="bold-text">{activeJobDetails.fields.title}</h3>
                                <p className="light-text">
                                    <strong>Descripción:</strong> <br /> {activeJobDetails.fields.description}
                                </p>
                                <p className="light-text">
                                    <strong>Habilidades:</strong> <br /> {activeJobDetails.fields.skills}
                                </p>
                                <p className="light-text">
                                    <strong>Responsabilidades:</strong> <br /> {activeJobDetails.fields.responsibilities}
                                </p>
                                <p className="light-text">
                                    <strong>Oferta:</strong> <br /> {activeJobDetails.fields.offer}
                                </p>
                                <p className="light-text">
                                    <strong>Tipo:</strong> <br /> {activeJobDetails.fields.type}
                                </p>
                                <p className="light-text">
                                    <strong>Tiempo:</strong> <br /> {activeJobDetails.fields.time}
                                </p>
                                <p className="light-text">
                                    <strong>Horario:</strong> <br /> {activeJobDetails.fields.work_days} <br /> {activeJobDetails.fields.work_time}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.placeholder}>
                                <p className="light-text">Selecciona una vacante para ver los detalles</p>
                            </div>
                        )}
                    </div>
                </section>
            </section>
        );
    }

    // Renderizado para Mobile: cada card muestra el detalle justo debajo de su botón si está activa
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="bold-text">Vacantes disponibles</h1>
            </header>

            <section className={styles.sectionContenido}>
                {jobs.map((job) => (
                    <div key={job.id} className={styles.cardContainer}>
                        <NavLink onClick={() => handleClick(job.id)} className={styles.buttonVacante} title={`Ver detalles de ${job.fields.title}`}>
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

                        {activeJob === job.id && (
                            <div className={styles.detallesVacante} aria-live="polite">
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
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </section>
    );
};
