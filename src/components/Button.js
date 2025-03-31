import React from 'react';
import styled, { css } from 'styled-components';

const ButtonBase = css`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
`;

const PrimaryButton = styled.button`
  ${ButtonBase}
  background-color: ${props => props.theme.colors.accentPrimary};
  color: white;

  &:hover {
    background-color: rgba(76, 175, 80, 0.8);
  }
`;

const SecondaryButton = styled.button`
  ${ButtonBase}
  background-color: ${props => props.theme.colors.accentSecondary};
  color: white;

  &:hover {
    background-color: rgba(33, 150, 243, 0.8);
  }
`;

const DangerButton = styled.button`
  ${ButtonBase}
  background-color: ${props => props.theme.colors.error};
  color: white;

  &:hover {
    background-color: rgba(255, 82, 82, 0.8);
  }
`;

const Button = ({ variant = 'primary', children, ...props }) => {
  switch (variant) {
    case 'secondary':
      return <SecondaryButton {...props}>{children}</SecondaryButton>;
    case 'danger':
      return <DangerButton {...props}>{children}</DangerButton>;
    default:
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
  }
};

export default Button;
