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
      <main css={css`padding: 30px 0`}>
      <Icon type="home" size="30" />
      <Icon type="profile" size="30" />
      <Icon type="back" size="30" />
      <Icon type="forward" size="30" />
      <Icon type="email" size="30" />
      <Icon type="emailOpen" size="30" />
      <Icon type="facebookSquare" size="30" />
      <Icon type="facebook" size="30" />
      <Icon type="messenger" size="30" />
      <Icon type="instagram" size="30" />
      <Icon type="linkedin" size="30" />
      <Button size="small">Hola mundo</Button>
      <Button size="small" type="ghost">
        Hola mundo
      </Button>
      <Button>Hola mundo</Button>
      <Button type="ghost">Hola mundo</Button>
      <Button size="big">Hola mundo</Button>
      <Button size="big" type="ghost">
        Hola mundo
      </Button>
      <Heading type="h1">Hola mundo</Heading>
      <Heading type="h2">Hola mundo</Heading>
      <Heading type="h3">Hola mundo</Heading>
      <Heading type="h4">Hola mundo</Heading>
      <Heading type="h5">Hola mundo</Heading>
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
      <InputFile/>
      </main>
      <Footer/>
    </>
  );
}
