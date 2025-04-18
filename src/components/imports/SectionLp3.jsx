import styles from '../../styles/modules/sectionLp3.module.css';

import { Cargando } from '../utils/cargando';
import { ErrorCarga } from '../utils/ErrorCarga';
import { BotonNav } from '../utils/BotonNav';

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const SectionLp3 = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Función asíncrona para obtener las vacantes desde el backend
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/reclutavit/backend/jobs.php');
                const records = response.data.records;

                let selectedJobs = [];
                if (records.length > 4) {
                    selectedJobs = records.slice(0, 4);
                } else {
                    selectedJobs = records;
                }

                setJobs(selectedJobs);
            } catch (err) {
                setError(err.message || 'Error al obtener las vacantes');
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">Vacantes disponibles</h2>
            </header>

            <section className={styles.cards}>
                {loading && <Cargando />}
                {!loading && error && <ErrorCarga />}
                {!loading &&
                    !error &&
                    jobs.map((job) => (
                        <NavLink to={`/vacantes/${job.id}`} key={job.id}>
                            <div className={styles.card}>
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
                            </div>
                        </NavLink>
                    ))}
                {!loading && !error && jobs.length === 0 && (
                    <div className={styles.contenidoAdicional} aria-live="polite">
                        <p className="light-text">No se encontraron vacantes</p>
                    </div>
                )}
            </section>

            <BotonNav to="/vacantes" aria-label="Ver todas las vacantes disponibles" title="Haz clic para ver todas las vacantes">
                VER TODOS
            </BotonNav>
        </section>
    );
};
