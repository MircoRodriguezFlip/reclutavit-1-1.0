import styles from '../../styles/modules/sectionVp1.module.css';

import { Cargando } from '../utils/cargando';
import { ErrorCarga } from '../utils/ErrorCarga';
import { BotonNav } from '../utils/BotonNav';
import { Pagination } from '../utils/Pagination';
import { JobList } from './JobList';
import { JobDetails } from './JobDetails';

import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

export const SectionVp1 = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeJob, setActiveJob] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const { id: routeId } = useParams();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/reclutavit/backend/jobs.php');
                setJobs(response.data.records || response.data);
            } catch (err) {
                setError(err.message || 'Error al obtener las vacantes');
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    useEffect(() => {
        const totalPages = Math.ceil(jobs.length / itemsPerPage);
        if (totalPages === 0) {
            setCurrentPage(1);
        } else if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [jobs, currentPage]);

    useEffect(() => {
        if (!isMobile) {
            setActiveJob(null);
        }
    }, [currentPage, isMobile]);

    useEffect(() => {
        if (routeId) {
            setActiveJob(routeId);
        }
    }, [routeId]);

    const handleClick = (jobId) => {
        setActiveJob((prevActive) => (prevActive === jobId ? null : jobId));
    };

    const totalPages = Math.ceil(jobs.length / itemsPerPage);
    const indexOfLastJob = currentPage * itemsPerPage;
    const indexOfFirstJob = indexOfLastJob - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Vista de escritorio
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
                            <BotonNav />
                        </div>
                    )}
                    {!loading && !error && (
                        <section className={styles.sectionTablaVacantes}>
                            <div className={styles.tablaVacantes}>
                                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />

                                <section className={styles.sectionTabla}>
                                    <JobList jobs={currentJobs} activeJob={activeJob} onJobClick={handleClick} />

                                    <div className={styles.detalleColumn}>
                                        <JobDetails job={activeJobDetails} />
                                    </div>
                                </section>

                                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
                            </div>

                            <BotonNav />
                        </section>
                    )}
                </section>
            </section>
        );
    }

    // Vista Mobile (puedes modularizarla de forma similar)
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
                        <BotonNav />
                    </div>
                )}

                {!loading && !error && (
                    <section className={styles.sectionTabla}>
                        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />

                        {currentJobs.length === 0 ? (
                            <div className={styles.contenidoAdicional}>
                                <p className="light-text">No hay vacantes disponibles</p>
                            </div>
                        ) : (
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

                                        {activeJob === job.id && <JobDetails job={job} />}
                                    </div>
                                ))}
                            </section>
                        )}

                        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />

                        <BotonNav />
                    </section>
                )}
            </section>
        </section>
    );
};
