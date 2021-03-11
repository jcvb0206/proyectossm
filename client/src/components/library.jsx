/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Icon from './UI/Icon';
import Button from './UI/Button';
import Heading from './text/Heading';
import Form from './containers/Form';
import Input from './form/Input';
import Label from './form/Label';
import SocialLogin from './form/SocialLogin'

export default function Library() {
  return (
    <div css={css`
    padding: 30px;`}>
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
      <Heading
        type="h1"
        style={css`
          font-size: 40px;
          line-height: 40px;
        `}
      >
        Hola mundo
      </Heading>
      <Heading type="h2">Hola mundo</Heading>
      <Heading type="h3">Hola mundo</Heading>
      <Heading type="h4">Hola mundo</Heading>
      <Form>
        <h2>¡Hola!</h2>
        <span>Ingresa a tu cuenta</span>
        <Label>Usuario / Email</Label>
        <Input/>
        <Label>Contraseña</Label>
        <Input/>
        <Button>Iniciar sesión</Button>
        <span>O ingresa mediante</span>
        <div css={css`display: flex; gap: 12px;`}>
          <SocialLogin type="facebook"/>
          <SocialLogin type="google"/>
          <SocialLogin type="twitter"/>
        </div>
      </Form>
    </div>
  );
}
