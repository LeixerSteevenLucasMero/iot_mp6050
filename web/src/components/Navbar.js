// Navbar.js
import styled from 'styled-components';

export const StyledNavbar = styled.div`
  overflow: hidden;
  background-color: #00795e;
  color: #ffffff;
  font-size: 1rem;
  padding: 15px; /* Agrega padding para dar espacio al contenido */
  text-align: center;
`;

export const StyledTitle = styled.h1`
  margin: 0; /* Elimina el margen predeterminado del h1 */
  font-size: 1.5rem; /* Ajusta el tamaño de la fuente según sea necesario */
`;

// Resto del componente Navbar
const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledTitle>
        <i className="far fa-compass"></i> MPU6050 <i className="far fa-compass"></i>
      </StyledTitle>
    </StyledNavbar>
  );
};

export default Navbar;
