/** @jsxImportSource @emotion/react */
// import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaUserCircle,
  FaYoutube,
} from 'react-icons/fa';
import { HiOutlineMail, HiOutlineMailOpen } from 'react-icons/hi';
import { RiHome3Line } from 'react-icons/ri';
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoCartOutline,
} from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

let baseColor = 'rgb(27, 61, 94)';

const iconSet = {
  home: [RiHome3Line, baseColor, ''],
  profile: [FaUserCircle, baseColor, ''],
  back: [IoChevronBackOutline, '', baseColor],
  forward: [IoChevronForwardOutline, '', baseColor],
  email: [HiOutlineMail, '', baseColor],
  emailOpen: [HiOutlineMailOpen, '', baseColor],
  google: [FcGoogle, '', ''],
  facebookSquare: [FaFacebookSquare, '#3b5998', ''],
  facebook: [FaFacebook, baseColor, ''],
  messenger: [FaFacebookMessenger, baseColor, ''],
  instagram: [FaInstagram, 'baseColor', ''],
  twitter: [FaTwitter, '#00acee', ''],
  linkedin: [FaLinkedin, '#0e76a8', ''],
  youtube: [FaYoutube, baseColor, ''],
  cart: [IoCartOutline, '', '#1D1D1D'],
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
