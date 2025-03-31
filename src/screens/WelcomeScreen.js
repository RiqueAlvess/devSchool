import React from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';
import Button from '../components/Button';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WelcomeContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background-color: ${props => props.theme.colors.bgSecondary};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const WelcomeTitle = styled.h2`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.accentSecondary};
  font-family: ${props => props.theme.fonts.heading};
`;

const WarningBox = styled.div`
  margin: 30px 0;
  padding: 20px;
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 4px solid ${props => props.theme.colors.warning};
  border-radius: 4px;
`;

const WarningTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${props => props.theme.colors.warning};
  margin-bottom: 10px;
`;

const WarningIcon = styled(FaExclamationTriangle)`
  font-size: 1.2rem;
`;

const WarningList = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
`;

const WarningItem = styled.li`
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const WelcomeScreen = ({ onStartLearning }) => {
  return (
    <WelcomeContainer>
      <WelcomeContent>
        <WelcomeTitle>Bem-vindo à Plataforma de Aprendizagem Python</WelcomeTitle>
        <p>Esta plataforma foi desenvolvida para ajudar iniciantes a aprender Python através de vídeos e exercícios práticos.</p>
        
        <WarningBox>
          <WarningTitle>
            <WarningIcon />
            Atenção
          </WarningTitle>
          <p>Para garantir um aprendizado efetivo, as seguintes regras se aplicam:</p>
          <WarningList>
            <WarningItem>Se você sair da página durante um vídeo ou prova, o sistema irá detectar e pausar o vídeo</WarningItem>
            <WarningItem>Após 3 minutos fora da página, o módulo será reiniciado</WarningItem>
            <WarningItem>Você precisa acertar pelo menos 70% das questões para avançar</WarningItem>
            <WarningItem>Se reprovar em uma prova, precisará reiniciar o módulo</WarningItem>
          </WarningList>
        </WarningBox>
        
        <ButtonContainer>
          <Button onClick={onStartLearning}>Começar Aprendizado</Button>
        </ButtonContainer>
      </WelcomeContent>
    </WelcomeContainer>
  );
};

export default WelcomeScreen;
