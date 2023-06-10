import { theme } from 'shared/theme';
import styled from 'styled-components';
import UserIcon from '../../../shared/data/svg/user.svg';
import EmailIcon from '../../../shared/data/svg/email.svg';
import LockIcon from '../../../shared/data/svg/lock.svg';

export const AuthInputStyled = styled.li`
  color: ${theme.palette.common.white};

  & .authForm__fieldWrapper {
    position: relative;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      opacity: 0.8;
    }
    &.authForm__fieldWrapper--name::before {
      height: 14px;
      width: 12px;
      background: url('${UserIcon}') no-repeat center/cover;
    }
    &.authForm__fieldWrapper--email::before {
      height: 12px;
      width: 15px;
      background: url('${EmailIcon}') no-repeat center/cover;
    }
    &.authForm__fieldWrapper--password::before {
      height: 14px;
      width: 14px;
      background: url('${LockIcon}') no-repeat center/cover;
    }
  }

  & .authForm__input {
    width: 100%;
    padding: 12px 14px 12px 40px;
    border: 1px solid ${theme.palette.common.white};
    border-radius: 6px;
    color: ${theme.palette.common.white};
    background-color: transparent;
    &::placeholder {
      color: ${theme.palette.common.white};
      opacity: 0.8;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.02em;
    }
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    & .authForm__input {
      padding: 16px 18px 16px 50px;

      &::placeholder {
        font-size: 18px;
        line-height: 27px;
      }
    }
  }

  &.authForm__name::before {
    width: 16px;
    height: 18px;
  }

  &.authForm__email::before {
    height: 16px;
    width: 20px;
  }
  &.authForm__password::before {
    height: 18px;
    width: 18px;
  }
`;
