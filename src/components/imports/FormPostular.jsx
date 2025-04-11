import styles from '../../styles/modules/form.module.css';

import { useForm } from '../../hooks/UseForm';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useParams, NavLink } from 'react-router-dom';

export const FormPostular = () => {
    const { id } = useParams();

    const [formSent, setFormSent] = useState(false);

    const { formData, errors, loading, handleChange, handleSubmit, handleFileChange, estados, showAlert } = useForm(
        {
            nombre: '',
            telefono: '+52',
            email: '',
            estado: '',
            cv: null,
            vacanteId: id,
        },
        (success, data) => {
            if (success) {
                showAlert('Excelente', 'Datos enviados correctamente.<br>Pronto nos pondremos en contacto contigo.', 'success', '#9fc750');
                setFormSent(true);
            } else {
                showAlert('Ups', 'Hubo un error al enviar los datos.', 'error', '#1497ee');
            }
        }
    );

    if (formSent) {
        return (
            <div className={styles.mensajeExito}>
                <p className="light-text">
                    Gracias por enviar tu postulación. <br /> Un agente se pondrá en contacto contigo
                </p>

                <NavLink to="/" aria-label="Ir a la pagina de inicio">
                    <button className="boton-2 bold-text">Ir al inicio</button>
                </NavLink>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.textosForm}>
                <p className="light-text">Deja aquí tus datos y en breve un asesor se pondrá en contacto contigo</p>
            </div>

            <div className={styles.camposObligatorios}>
                <p className="light-text">(*) Campos obligatorios</p>
            </div>

            {/* NOMBRE */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="nombre" className="light-text" aria-label="Nombre del usuario">
                    *Nombre Completo:
                </label>
                <input type="text" className={styles.formControl} id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                {errors.nombre && (
                    <small className={`${styles.textDanger} light-text`} aria-live="assertive">
                        {errors.nombre}
                    </small>
                )}
            </div>

            {/* TELEFONO */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="telefono" className="light-text" aria-label="Telefono del usuario">
                    *Teléfono:
                </label>
                <input
                    type="text"
                    className={styles.formControl}
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    maxLength="13"
                />
                {errors.telefono && (
                    <small className={`${styles.textDanger} light-text`} aria-live="assertive">
                        {errors.telefono}
                    </small>
                )}
            </div>

            {/* EMAIL */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="email" className="light-text" aria-label="email del usuario">
                    *Correo Electrónico :
                </label>
                <input type="text" className={styles.formControl} id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && (
                    <small className={`${styles.textDanger} light-text`} aria-live="assertive">
                        {errors.email}
                    </small>
                )}
            </div>

            {/* ESTADOS */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="estado" className="light-text" aria-label="Estado donde vive el usuario">
                    *Estado:
                </label>
                <select className={styles.formControl} id="estado" name="estado" value={formData.estado} onChange={handleChange}>
                    {estados.map((estado) => (
                        <option key={estado} value={estado}>
                            {estado}
                        </option>
                    ))}
                </select>
                {errors.estado && (
                    <small className={`${styles.textDanger} light-text`} aria-live="assertive">
                        {errors.estado}
                    </small>
                )}
            </div>

            {/* CV */}
            <div className={styles.campoPrecalificarForm}>
                <label htmlFor="cv" className="light-text" aria-label="Curriculum del usuario">
                    Curriculum:
                </label>
                <input
                    type="file"
                    className={styles.formControl}
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                {errors.cv && (
                    <small className={`${styles.textDanger} light-text`} aria-live="assertive">
                        {errors.cv}
                    </small>
                )}
            </div>

            {/* Contenedor para el botón y spinner */}
            <div className={styles.contentEnvio}>
                <button type="submit" className="boton-1 bold-text" title="Haz clic para enviarnos tus datos" disabled={loading}>
                    {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'ENVIAR'}
                </button>
            </div>
        </form>
    );
};
