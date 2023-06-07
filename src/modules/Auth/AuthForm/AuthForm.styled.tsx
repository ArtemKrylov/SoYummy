import { theme } from 'shared/theme';
import styled from 'styled-components';
import Sprite from '../../../shared/data/sprite.svg';

export const AuthInputStyled = styled.li`
  position: relative;
  border: 1px solid ${theme.palette.common.white};
  border-radius: 6px;

  color: ${theme.palette.common.white};

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 15px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
  }
  &.authForm__name::before {
    background: url('${Sprite}#icon-user') center center contain no-repeat;
    /* fill: white;
    stroke: white; */
  }
  &.authForm__email::before {
    background-image: url('../../../shared/data/sprite.svg#icon-email');
  }
  &.authForm__password::before {
    background-image: url('../../../shared/data/sprite.svg#icon-lock');
  }

  & .authForm__input {
    padding: 12px 14px;
    border: none;

    background-color: transparent;
    &::placeholder {
      padding-left: 40px;

      color: ${theme.palette.common.white};
      opacity: 0.8;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.02em;
    }
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    & .authForm__input {
      padding: 16px 18px;

      &::placeholder {
        padding-left: 50px;

        font-size: 18px;
        line-height: 27px;
      }
    }
  }
`;
