import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Button from '../components/Button';

const ResultContainer = styled.div`
  text-align: center;
  padding: 40px 0;
`;

const ResultBox = styled.div`
  background-color: ${props => props.theme.colors.bgSecondary};
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const PassIcon = styled(FaCheckCircle)`
  font-size: 5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.success};
`;

const FailIcon = styled(FaTimesCircle)`
  font-size: 5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.error};
`;

const ResultTitle = styled.h2`
  margin-bottom: 15px;
  font-family: ${props => props.theme.fonts.heading};
`;

const ScoreText = styled.p`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const ResultMessage = styled.p`
  margin: 20px 0;
  color: ${props => props.theme.colors.textSecondary};
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;

const QuizResult = ({ result, onNextModule, onRetryModule }) => {
  const { passed, score } = result;
  
  return (
    <ResultContainer>
      <ResultBox>
        {passed ? (
          <>
            <PassIcon />
            <ResultTitle>Parabéns! Você passou na prova.</ResultTitle>
            <ScoreText>Sua pontuação: {score}%</ScoreText>
            <ResultMessage>Você pode avançar para o próximo módulo.</ResultMessage>
            <ButtonContainer>
              <Button onClick={onNextModule}>Próximo Módulo</Button>
            </ButtonContainer>
          </>
        ) : (
          <>
            <FailIcon />
            <ResultTitle>Infelizmente você não passou na prova.</ResultTitle>
            <ScoreText>Sua pontuação: {score}%</ScoreText>
            <ResultMessage>Você precisa acertar pelo menos 70% das questões.</ResultMessage>
            <ButtonContainer>
              <Button onClick={onRetryModule}>Tentar Novamente</Button>
            </ButtonContainer>
          </>
        )}
      </ResultBox>
    </ResultContainer>
  );
};

export default QuizResult;
