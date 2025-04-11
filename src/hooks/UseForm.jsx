import { useState } from 'react';
import Swal from 'sweetalert2';

export const useForm = (initialState, submitCallback) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateFile = (file) => {
        const validFormats = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'image/jpeg',
            'image/png',
        ];
        const maxSize = 2 * 1024 * 1024;

        if (!validFormats.includes(file.type)) {
            return 'Formato de archivo no permitido. Usa PDF, Word o imágenes (JPEG/PNG).';
        }

        if (file.size > maxSize) {
            return 'El archivo es demasiado grande. Máximo 2 MB.';
        }

        return '';
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const error = validateFile(file);

            if (error) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    cv: error,
                }));
                return;
            }

            setErrors((prevErrors) => ({ ...prevErrors, cv: '' }));
            setFormData((prevState) => ({ ...prevState, cv: file }));
        }
    };

    const estados = [
        'Estado',
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'México',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
    ];

    const showAlert = (title, message, icon, color) => {
        Swal.fire({
            title,
            html: `<div class="light-text"><p>${message}</p></div>`,
            icon,
            confirmButtonColor: color,
            scrollbarPadding: false,
            customClass: {
                title: 'bold-text',
            },
            willOpen: () => {
                document.body.style.overflow = 'auto';
            },
            willClose: () => {
                document.body.style.overflow = 'auto';
            },
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'telefono') {
            const cleanValue = value.replace(/\D/g, '');
            const formattedValue = cleanValue.startsWith('52') ? '+' + cleanValue : '+52' + cleanValue;
            setFormData((prev) => ({ ...prev, telefono: formattedValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        validateNombre(newErrors);

        validateTelefono(newErrors);

        validateEmail(newErrors);

        validateEstado(newErrors);

        validateCV(newErrors);

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateNombre = (newErrors) => {
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'Completa este campo.';
        }
    };

    const validateTelefono = (newErrors) => {
        if (!formData.telefono.match(/^\+52\d{10}$/)) {
            newErrors.telefono = 'Ingresa un número de teléfono válido.';
        }
    };

    const validateEmail = (newErrors) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido.';
        }
    };

    const validateEstado = (newErrors) => {
        if (!formData.estado.trim() || formData.estado === 'Estado') {
            newErrors.estado = 'Selecciona un estado válido.';
        }
    };

    const validateCV = (newErrors) => {
        if (formData.cv) {
            const valid = formData.cv.type.match(
                /application\/pdf|application\/msword|application\/vnd.openxmlformats-officedocument.wordprocessingml.document|image\/jpeg|image\/png/
            );
            if (!valid) {
                newErrors.cv = 'Formato de archivo no permitido. Usa PDF, Word o imágenes (JPEG/PNG).';
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('nombre', formData.nombre);
            formDataToSend.append('telefono', formData.telefono);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('estado', formData.estado);
            if (formData.vacanteId) {
                formDataToSend.append('vacanteId', formData.vacanteId);
            }

            if (formData.cv) {
                formDataToSend.append('cv', formData.cv);
            }

            const response = await fetch('/reclutavit/backend/submit.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();

            if (response.ok) {
                submitCallback(true, data);
                resetForm();
            } else {
                submitCallback(false, data);
            }
        } catch (error) {
            submitCallback(false, error);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    return { formData, errors, loading, handleChange, handleSubmit, handleFileChange, estados, showAlert };
};
