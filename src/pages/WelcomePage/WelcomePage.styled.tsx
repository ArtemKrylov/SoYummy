import styled from 'styled-components';
import { Box } from '@mui/material';
import { theme } from 'shared/theme';
import bgImgMobile from '../../shared/data/img/welcomeBgMobile@1x.jpg';
import bgImgMobile2x from '../../shared/data/img/welcomeBgMobile@2x.jpg';
import bgImgTablet from '../../shared/data/img/welcomeBgTablet@1x.jpg';
import bgImgTablet2x from '../../shared/data/img/welcomeBgTablet@2x.jpg';
import bgImgDesktop from '../../shared/data/img/welcomeBgDesktop@1x.jpg';
import bgImgDesktop2x from '../../shared/data/img/welcomeBgDesktop@2x.jpg';

interface IWelcomePageStyled {}

export const WelcomePageStyled = styled(Box)<IWelcomePageStyled>`
  background: url(${bgImgMobile});
  @media (min-resolution: 192dpi) {
    background: url(${bgImgMobile2x});
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    background: url(${bgImgTablet});
    @media (min-resolution: 192dpi) {
      background: url(${bgImgTablet2x});
    }
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    background: url(${bgImgDesktop});
    @media (min-resolution: 192dpi) {
      background: url(${bgImgDesktop2x});
    }
  }
`;
