import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.colors.bgTertiary};
  margin-top: 30px;
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <p>&copy; {currentYear} 3S Dev - Plataforma de Aprendizagem Python</p>
    </FooterContainer>
  );
};

export default Footer;
