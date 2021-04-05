/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Icon from './UI/Icon';
import { Button } from './UI/Button';
import Heading from './text/Heading';
import Form from './containers/Form';
import { Input, InputFile } from './form/Input';
import Label from './form/Label';
import SocialLogin from './form/SocialLogin'
import { Caption } from './text/Content';

export default function Library() {
  return (
    <>
      <Header/>
      <main css={css`padding: 30px 20px; display: flex; flex-direction: column; gap: 25px;`}>
      <div>
        <Heading type="h2">Icons</Heading>
        <div css={css`display: flex; gap: 12px;`}>
          <Icon type="home" size="30"/>
          <Icon type="profile" size="30"/>
          <Icon type="down" size="30"/>
          <Icon type="up" size="30"/>
          <Icon type="back" size="30"/>
          <Icon type="forward" size="30"/>
          <Icon type="email" size="30"/>
          <Icon type="emailOpen" size="30"/>
          <Icon type="google" size="30"/>
          <Icon type="facebookSquare" size="30"/>
          <Icon type="facebook" size="30"/>
          <Icon type="messenger" size="30"/>
          <Icon type="instagram" size="30"/>
          <Icon type="twitter" size="30"/>
          <Icon type="linkedin" size="30"/>
          <Icon type="youtube" size="30"/>
          <Icon type="cart" size="30"/>
          <Icon type="heartLine" size="30"/>
          <Icon type="heartFill" size="30"/>
          <Icon type="search" size="30"/>
          <Icon type="upload" size="30"/>
        </div>
      </div>
      <div css={css`display: flex; flex-direction: column; gap: 12px;`}>
        <Heading type="h2">Buttons</Heading>
        <div css={css`display: flex; align-items: center; gap: 12px;`}>
          <Button size="small">Hola mundo</Button>
          <Button>Hola mundo</Button>
          <Button size="big">Hola mundo</Button>
        </div>
        <div css={css`display: flex; align-items: center; gap: 12px;`}>
          <Button size="small" type="ghost">
            Hola mundo
          </Button>
          <Button type="ghost">Hola mundo</Button>
          <Button size="big" type="ghost">
            Hola mundo
          </Button>
        </div>
      </div>
      <div>
        <Heading type="h1">Titles</Heading>
        <div css={css`display: flex; align-items: center; gap: 12px;`}>
          <Heading type="h1">Title H1</Heading>
          <Heading type="h2">Title H2</Heading>
          <Heading type="h3">Title H3</Heading>
          <Heading type="h4">Title H4</Heading>
          <Heading type="h5">Title H5</Heading>
        </div>
      </div>
      <div>
        <Heading type="h1">Form</Heading>
        <Form>
          <Heading type="h2">¡Hola!</Heading>
          <Caption>Ingresa a tu cuenta</Caption>
          <Label>Usuario / Email</Label>
          <Input/>
          <Label>Contraseña</Label>
          <Input/>
          <Button>Iniciar sesión</Button>
          <Caption>O ingresa mediante</Caption>
          <div css={css`display: flex; gap: 12px;`}>
            <SocialLogin type="facebook"/>
            <SocialLogin type="google"/>
            <SocialLogin type="twitter"/>
          </div>
        </Form>
      </div>
      <InputFile/>
      </main>
      <Footer/>
    </>
  );
}
