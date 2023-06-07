import { theme } from 'shared/theme';
import styled from 'styled-components';
import AuthBgMobile1x from '../../../shared/data/img/auth/authBgMobile@1x.png';
import AuthBgMobile2x from '../../../shared/data/img/auth/enchanced/authBgMobile@1x-min.png';
import AuthBgTablet1x from '../../../shared/data/img/auth/enchanced/authBgTablet@1x-min.png';
import AuthBgTablet2x from '../../../shared/data/img/auth/enchanced/authBgTablet@2x-min.png';
import AuthBgDesktop1x from '../../../shared/data/img/auth/enchanced/authBgDesktop@1x-min.png';
import AuthBgDesktop2x from '../../../shared/data/img/auth/enchanced/authBgDesktop@2x-min.png';
import darkAuthBgMobile from '../../../shared/data/img/auth/enchanced/darkBottomBgMobile-min.jpg';
import darkAuthBgTablet from '../../../shared/data/img/auth/enchanced/darkBottomBgMobile-min.jpg';
import darkAuthBgDesktop from '../../../shared/data/img/auth/enchanced/darkBottomBgDesktop-min.jpg';

interface IContainerStyled {}
export const AuthContainerStyled = styled.div<IContainerStyled>`
  background-color: ${theme.palette.common.white};
  min-height: 100vh;
  background-image: url(${AuthBgMobile1x}), url(${darkAuthBgMobile});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top 10vh center, bottom center;
  background-size: auto 31%, 100vw 60vh;
  @media (min-resolution: 192dpi) {
    background-image: url(${AuthBgMobile2x}), url(${darkAuthBgMobile});
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    background-image: url(${AuthBgTablet1x}), url(${darkAuthBgTablet});
    background-position: top 9vh center, bottom center;
    background-size: auto 35%, 100vw 59%;
    @media (min-resolution: 192dpi) {
      background-image: url(${AuthBgTablet2x}), url(${darkAuthBgTablet});
    }
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    background-image: url(${AuthBgDesktop1x}), url(${darkAuthBgDesktop});
    background-position: top 15vh left 8vw, bottom center;
    background-size: auto 61%, 100vw 42%;
    @media (min-resolution: 192dpi) {
      background-image: url(${AuthBgDesktop2x}), url(${darkAuthBgDesktop});
    }
  }
`;
