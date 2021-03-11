/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
// import { css } from '@emotion/react';
import Icon from '../UI/Icon';

const StyledFooter = styled.footer`
  font-family: Montserrat;
  color: white;
  background-color: rgb(27, 61, 94);

  .container__footer {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 5%;
  }

  .info__footer {
    padding: 15px 0;
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 1fr;
  }

  .info-section__footer {
    padding: 0 15px;
    border-right: 1px solid white;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 8px;

    a {
      text-decoration: none;
      color: white;
    }
  }

  .disclaimer__footer {
    height: 35px;
    font-size: 15px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const footerData = [
  {
    title: 'Conecta con PSM',
    links: [
      { name: 'Soporte al cliente', link: '' },
      { name: 'Términos y condiciones', link: '' },
      { name: '¿Quieres ser parte de PSM?', link: '' },
      { name: '¿Quieres ser nuesto aliado?', link: '' },
      { name: 'Prensa', link: '' },
    ],
  },
  {
    title: 'Acerca de nosotros',
    links: [
      { name: '¿Qué es PSM?', link: '' },
      { name: 'Equipo', link: '' },
      { name: 'Comunidad', link: '' },
      { name: 'Nuestra identidad visual', link: '' },
      { name: 'Nuestra misión', link: '' },
    ],
  },
  {
    title: 'Extras',
    links: [
      { name: 'Ponencias', link: '' },
      { name: 'Talleres', link: '' },
      { name: 'Tienda', link: '' },
      { name: 'Cursos', link: '' },
    ],
  },
];

function Footer() {
  return (
    <StyledFooter>
      <div className="container__footer">
        <div className="info__footer">
          <div>
            <span>
              Proyectos San Marcos es un equipo multidisciplinario de la
              Universidad Nacional Mayor de San Marcos que adopta, difunde y
              aplica las buenas practicas en gestión de proyectos.
            </span>
            <div>
              <Icon type="facebookSquare" fill="white" size="20" />
              <Icon type="linkedin" fill="white" size="20" />
              <Icon type="instagram" fill="white" size="20" />
              <Icon type="youtube" fill="white" size="20" />
              <Icon type="email" fill="white" size="20" />
            </div>
          </div>
          {footerData.map((section) => (
            <div className="info-section__footer">
              <h3>{section.title}</h3>
              {section.links.map((el) => (
                <a href={el.link}>{el.name}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="disclaimer__footer">
          <span>Todos los derechos reservados © 2020 Proyectos San Marcos</span>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
