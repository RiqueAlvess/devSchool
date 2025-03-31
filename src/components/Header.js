import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaPython } from 'react-icons/fa';
import { ProgressContext } from '../contexts/ProgressContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.colors.bgTertiary};
  margin-bottom: 30px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LogoIcon = styled(FaPython)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.accentPrimary};
`;

const LogoText = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
    justify-content: space-between;
  }
`;

const ProgressText = styled.span`
  color: ${props => props.theme.colors.textPrimary};
`;

const ResetButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.textSecondary};
  border: 1px solid ${props => props.theme.colors.textSecondary};
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const Header = ({ onRestart }) => {
  const { progress, resetProgress } = useContext(ProgressContext);

  const handleReset = () => {
    if (window.confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
      resetProgress();
      onRestart();
    }
  };

  const calculateProgressPercentage = () => {
    const totalModules = Object.keys(progress.moduleStatus).length - 1; // Excluindo o exame final
    let completedModules = 0;
    
    for (const moduleId in progress.moduleStatus) {
      if (moduleId !== 'final' && progress.moduleStatus[moduleId].completed) {
        completedModules++;
      }
    }
    
    return Math.round((completedModules / totalModules) * 100);
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon />
        <LogoText>Python Learning Path</LogoText>
      </Logo>
      <UserInfo>
        <ProgressText>Progresso: {calculateProgressPercentage()}%</ProgressText>
        <ResetButton onClick={handleReset}>Resetar Progresso</ResetButton>
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
