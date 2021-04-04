/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
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
import {
  RiMailLine,
  RiMailOpenLine,
  RiHome3Line,
  RiArrowDownSLine,
  RiArrowUpLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiShoppingCart2Line,
  RiHeartLine,
  RiHeartFill,
} from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

const iconSet = {
  home: RiHome3Line,
  profile: FaUserCircle,
  down: RiArrowDownSLine,
  up: RiArrowUpLine,
  back: RiArrowLeftSLine,
  forward: RiArrowRightSLine,
  email: RiMailLine,
  emailOpen: RiMailOpenLine,
  google: FcGoogle,
  facebookSquare: FaFacebookSquare,
  facebook: FaFacebook,
  messenger: FaFacebookMessenger,
  instagram: FaInstagram,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  cart: RiShoppingCart2Line,
  heartLine: RiHeartLine,
  heartFill: RiHeartFill,
};

export default function Icon({ type, fill, stroke, size, style, onClick }) {
  const theme = useTheme();
  const IconToRender = iconSet[type];
  return (
    <IconToRender
      onClick={onClick}
      css={css`
        ${style}
        fill: ${fill || theme.color.blue};
        stroke: ${stroke || 'none'};
        font-size: ${size || 24}px;
        min-width: fit-content;
      `}
    ></IconToRender>
  );
}
