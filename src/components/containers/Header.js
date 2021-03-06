/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import logo from '../../assets/psm-logo.svg';
import Button from '../UI/Button';
import Icon from '../UI/Icon';

const StyledHeader = styled.header`
  .primary__header {
    height: 90px;
    padding: 0 5%;

    .primary-container__header {
      margin: 0 auto;
      max-width: 1220px;
      min-height: 90px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .secondary__header {
    height: 50px;
    background-color: rgb(27, 61, 94);

    .secondary-container__header {
      margin: 0 auto;
      max-width: 1220px;
      min-height: 50px;
      display: flex;
      align-items: center;
      color: white;
    }
  }
`;

const Separator = styled.div`
  border-right: 1px solid #d9d9d9;
  height: 44px;
`;

function Header() {
  return (
    <StyledHeader>
      <div className="primary__header">
        <div className="primary-container__header">
          <img
            src={logo}
            alt="Proyectos San Marcos"
            css={css`
              height: 65px;
            `}
          />
          <div
            css={css`
              display: flex;
              width: 50%;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <Button type="ghost">Cursos</Button>
            <Separator />
            <Button type="ghost">Intranet</Button>
            <Button type="ghost">Regístrate</Button>
            <Button>Ingresa</Button>
            <Separator />
            <Icon type="cart" size="30" />
          </div>
        </div>
      </div>
      <div className="secondary__header">
        <div className="secondary-container__header">
          <p>Inicio</p>
          <p>Nosotros</p>
          <p>Equipo</p>
          <p>Proyectos</p>
          <p>Contactos</p>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
