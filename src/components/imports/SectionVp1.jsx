import styles from '../../styles/modules/sectionVp1.module.css';
import { Cargando } from '../utils/cargando';
import { ErrorCarga } from '../utils/ErrorCarga';
import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'; // Importamos useParams
import axios from 'axios';

export const SectionVp1 = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeJob, setActiveJob] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Nueva variable de paginación:
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    // Obtenemos el id de la URL (si existe)
    const { id: routeId } = useParams();

    // Actualiza el valor de isMobile en función del tamaño de la ventana
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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

    // Ajustar la paginación si cambia el número de vacantes
    useEffect(() => {
        const totalPages = Math.ceil(jobs.length / itemsPerPage);
        if (totalPages === 0) {
            setCurrentPage(1);
        } else if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [jobs, currentPage]);

    // Si estamos en escritorio, cada vez que se cambie de página reiniciamos activeJob
    useEffect(() => {
        if (!isMobile) {
            setActiveJob(null);
        }
    }, [currentPage, isMobile]);

    // Usamos otro useEffect para inicializar el activeJob según el id de la URL
    useEffect(() => {
        if (routeId) {
            setActiveJob(routeId);
        }
    }, [routeId]);

    const handleClick = (jobId) => {
        setActiveJob((prevActive) => (prevActive === jobId ? null : jobId));
    };

    // Función para renderizar la paginación
    const renderPagination = () => {
        const totalPages = Math.ceil(jobs.length / itemsPerPage);
        if (totalPages === 0) return null;
        return (
            <div className={styles.pagination}>
                <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                    {'<'}
                </button>
                {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1;
                    return (
                        <button key={page} onClick={() => setCurrentPage(page)} className={page === currentPage ? styles.activePage : ''}>
                            {page}
                        </button>
                    );
                })}
                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                    {'>'}
                </button>
            </div>
        );
    };

    const indexOfLastJob = currentPage * itemsPerPage;
    const indexOfFirstJob = indexOfLastJob - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Renderizado para Desktop
    if (!isMobile) {
        const activeJobDetails = jobs.find((job) => job.id === activeJob);

        return (
            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text">Vacantes disponibles</h1>
                </header>

                <section className={styles.sectionContenido}>
                    {loading && (
                        <div className={styles.contenidoAdicional}>
                            <Cargando />
                        </div>
                    )}

                    {!loading && error && (
                        <div className={styles.contenidoAdicional}>
                            <ErrorCarga />
                        </div>
                    )}

                    {!loading && !error && (
                        <section className={styles.sectionTablaVacantes}>
                            {renderPagination()}
                            <section className={styles.sectionTabla}>
                                <div className={styles.cardColumn}>
                                    {jobs.length === 0 ? (
                                        <div className={styles.placeholder}>
                                            <p className="light-text">No hay vacantes disponibles</p>
                                        </div>
                                    ) : (
                                        currentJobs.map((job) => (
                                            <div key={job.id} className={`${styles.cardContainer} ${activeJob === job.id ? styles.active : ''}`}>
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
                                        ))
                                    )}
                                </div>

                                <div className={styles.detalleColumn}>
                                    {activeJobDetails ? (
                                        <div key={activeJobDetails.id} className={`${styles.detallesVacante} fade-in`} aria-live="polite">
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
                                                <strong>Horario:</strong> <br /> {activeJobDetails.fields.work_days} <br />{' '}
                                                {activeJobDetails.fields.work_time}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className={styles.placeholder}>
                                            <p className="light-text">Selecciona una vacante para ver los detalles</p>
                                        </div>
                                    )}
                                </div>
                            </section>
                            {renderPagination()}
                        </section>
                    )}
                </section>
            </section>
        );
    }

    // Renderizado para Mobile
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="bold-text">Vacantes disponibles</h1>
            </header>

            <section className={styles.sectionContenido}>
                {loading && (
                    <div className={styles.contenidoAdicional}>
                        <Cargando />
                    </div>
                )}

                {!loading && error && (
                    <div className={styles.contenidoAdicional}>
                        <ErrorCarga />
                    </div>
                )}

                {!loading && !error && (
                    <section className={styles.sectionTabla}>
                        {renderPagination()}
                        <section>
                            {currentJobs.map((job) => (
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
                        {renderPagination()}
                    </section>
                )}
            </section>
        </section>
    );
};
