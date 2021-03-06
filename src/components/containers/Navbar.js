/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
`;

const StyledNavButton = styled.a`
  font-family: Montserrat;
  display: block;
  padding: 14px 20px;
  font-weight: 700;
  position: relative;
  user-select: none;
  color: ${(props) => (props.active ? '#ffffffa1' : 'white')};
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: #ffffffa1;
  }

  &:after {
    display: block;
    height: 3px;
    width: ${(props) => (props.active ? '100%' : 0)};
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
    transition: 0.3s;
  }

  &:after:not(:hover) {
    height: 0;
    width: 0;
    left: 50%;
  }

  &:hover:after {
    width: 100%;
  }
`;

const NavElements = [
  { title: 'Inicio', active: true },
  { title: 'Nosotros', active: false },
  { title: 'Equipo', active: false },
  { title: 'Proyectos', active: false },
  { title: 'Contacto', active: false },
];

function Navbar() {
  return (
    <StyledNav>
      <ul>
        {NavElements.map((element) => (
          <li>
            <StyledNavButton active={element.active}>
              {element.title}
            </StyledNavButton>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
}

export default Navbar;
