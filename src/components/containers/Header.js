/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import logo from '../../assets/psm-logo.svg';
import Button from '../UI/Button';
import Icon from '../UI/Icon';
import Navbar from './Navbar';

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
      justify-content: center;
      color: white;
    }
  }
`;

const ShoppingCart = styled.div`
  position: relative;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -5px;
    top: -5px;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 800;
    height: 18px;
    width: 18px;
    color: white;
    background-color: rgb(27, 61, 94);
    border-radius: 50%;
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
              margin-left: auto;
              align-items: center;
              gap: 15px;
            `}
          >
            <Button type="ghost">Cursos</Button>
            <Separator />
            <Button type="ghost">Intranet</Button>
            <Button type="ghost">Regístrate</Button>
            <Button>Ingresa</Button>
            <Separator />
            <ShoppingCart>
              <Icon type="cart" size="30" />
              <span>1</span>
            </ShoppingCart>
          </div>
        </div>
      </div>
      <div className="secondary__header">
        <div className="secondary-container__header">
          <Navbar />
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
