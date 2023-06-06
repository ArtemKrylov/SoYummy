import { Container } from '@mui/material';
import { theme } from 'shared/theme';
import styled from 'styled-components';
import AuthBgMobile1x from '../../../shared/data/img/auth/authBgMobile@1x.png';
import AuthBgMobile2x from '../../../shared/data/img/auth/enchanced/authBgMobile@1x-min.png';
import AuthBgTablet1x from '../../../shared/data/img/auth/enchanced/authBgTablet@1x-min.png';
import AuthBgTablet2x from '../../../shared/data/img/auth/enchanced/authBgTablet@2x-min.png';
import AuthBgDesktop1x from '../../../shared/data/img/auth/enchanced/authBgDesktop@1x-min.png';
import AuthBgDesktop2x from '../../../shared/data/img/auth/enchanced/authBgDesktop@2x-min.png';

interface IContainerStyled {}
export const AuthContainerStyled = styled(Container)<IContainerStyled>`
  background-color: ${theme.palette.common.white};
  min-height: 100vh;
  background-image: url(${AuthBgMobile1x});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top 87px center;
  background-size: 285px 250px;
  @media (min-resolution: 192dpi) {
    background-image: url(${AuthBgMobile2x});
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    background-image: url(${AuthBgTablet1x});
    background-position: top 96px center;
    background-size: 409px 359px;
    @media (min-resolution: 192dpi) {
      background-image: url(${AuthBgTablet2x});
    }
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    background-image: url(${AuthBgDesktop1x});
    background-position: top 115px left 113px;
    background-size: 532px 468px;
    @media (min-resolution: 192dpi) {
      background-image: url(${AuthBgDesktop2x});
    }
  }
`;
