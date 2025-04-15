import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BotonNav = ({
    to = '/',
    ariaLabel = 'Ir a la página de inicio.',
    className = 'boton-2 bold-text',
    title = 'Haz clic para ir a la página de inicio',
    children = 'IR AL INICIO',
}) => {
    return (
        <NavLink to={to} aria-label={ariaLabel}>
            <button className={className} title={title}>
                {children}
            </button>
        </NavLink>
    );
};

BotonNav.propTypes = {
    to: PropTypes.string,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
};
