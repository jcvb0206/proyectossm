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
  home: [RiHome3Line, 'rgb(27, 61, 94)', ''],
  profile: [FaUserCircle, 'rgb(27, 61, 94)', ''],
  back: [IoChevronBackOutline, '', 'rgb(27, 61, 94)'],
  forward: [IoChevronForwardOutline, '', 'rgb(27, 61, 94)'],
  email: [HiOutlineMail, '', 'rgb(27, 61, 94)'],
  emailOpen: [HiOutlineMailOpen, '', 'rgb(27, 61, 94)'],
  facebookSquare: [FaFacebookSquare, 'rgb(27, 61, 94)', ''],
  facebook: [FaFacebook, 'rgb(27, 61, 94)', ''],
  messenger: [FaFacebookMessenger, 'rgb(27, 61, 94)', ''],
  instagram: [FaInstagram, 'rgb(27, 61, 94)', ''],
  linkedin: [FaLinkedin, 'rgb(27, 61, 94)', ''],
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
      `}
    ></IconToRender>
  );
}
