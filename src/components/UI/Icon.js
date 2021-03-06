/** @jsxImportSource @emotion/react */
// import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaUserCircle,
} from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlineMailOpen,
  HiOutlineShoppingCart,
} from 'react-icons/hi';
import { RiHome3Line } from 'react-icons/ri';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

let baseColor = 'rgb(27, 61, 94)';

const iconSet = {
  home: [RiHome3Line, baseColor, ''],
  profile: [FaUserCircle, baseColor, ''],
  back: [IoChevronBackOutline, '', baseColor],
  forward: [IoChevronForwardOutline, '', baseColor],
  email: [HiOutlineMail, '', baseColor],
  emailOpen: [HiOutlineMailOpen, '', baseColor],
  facebookSquare: [FaFacebookSquare, baseColor, ''],
  facebook: [FaFacebook, baseColor, ''],
  messenger: [FaFacebookMessenger, baseColor, ''],
  instagram: [FaInstagram, baseColor, ''],
  linkedin: [FaLinkedin, baseColor, ''],
  cart: [HiOutlineShoppingCart, '', baseColor],
};

export default function Icon({ type, fill, stroke, size, onClick }) {
  const [IconToRender, iconFill, iconStroke] = iconSet[type];
  return (
    <IconToRender
      onClick={onClick}
      css={css`
        fill: ${fill || iconFill};
        stroke: ${stroke || iconStroke};
        font-size: ${size}px;
        cursor: pointer;
      `}
    ></IconToRender>
  );
}
