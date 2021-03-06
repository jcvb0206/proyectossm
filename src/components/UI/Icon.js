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
import { HiOutlineMail, HiOutlineMailOpen } from 'react-icons/hi';
import { RiHome3Line } from 'react-icons/ri';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const iconSet = {
  home: RiHome3Line,
  profile: FaUserCircle,
  back: IoChevronBackOutline,
  forward: IoChevronForwardOutline,
  email: HiOutlineMail,
  emailOpen: HiOutlineMailOpen,
  facebookSquare: FaFacebookSquare,
  facebook: FaFacebook,
  messenger: FaFacebookMessenger,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

export default function Icon({ type, fill, size, onClick }) {
  const IconToRender = iconSet[type];
  return (
    <IconToRender
      onClick={onClick}
      css={css`
        fill: ${fill};
        font-size: ${size}px;
      `}
    ></IconToRender>
  );
}
