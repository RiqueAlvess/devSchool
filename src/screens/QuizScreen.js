import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';
import Button from '../components/Button';
import { ProgressContext } from '../contexts/ProgressContext';
import moduleData from '../data/moduleData';

const QuizContainer = styled.div`
  margin: 20px 0;
`;

const QuizContent = styled.div`
  background-color: ${props => props.theme.colors.bgSecondary};
  padding: 30px;
  border-radius: 8px;
  position: relative;
`;

const QuizTitle = styled.h2`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.accentSecondary};
  font-family: ${props => props.theme.fonts.heading};
`;

const QuizProgressContainer = styled.div`
  margin-bottom: 25px;
`;

const QuestionCounter = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textSecondary};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${props => props.theme.colors.bgTertiary};
  border-radius: 4px;
  margin-top: 8px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.accentPrimary};
  width: ${props => props.percentage}%;
  transition: width 0.3s;
`;

const QuestionContainer = styled.div`
  margin-bottom: 30px;
`;

const QuestionText = styled.h3`
  margin-bottom: 20px;
  line-height: 1.5;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Option = styled.div`
  background-color: ${props => 
    props.selected 
      ? 'rgba(33, 150, 243, 0.2)' 
      : props.theme.colors.bgTertiary};
  padding: 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  border: ${props => 
    props.selected 
      ? `1px solid ${props.theme.colors.accentSecondary}` 
      : 'none'};
  
  &:hover {
    background-color: ${props => 
      props.selected 
        ? 'rgba(33, 150, 243, 0.2)' 
        : 'rgba(33, 150, 243, 0.1)'};
  }
`;

const OptionLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.bgSecondary};
  margin-right: 15px;
  font-weight: bold;
  flex-shrink: 0;
`;

const QuizNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const AlertOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${props => props.visible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 8px;
`;

const AlertBox = styled.div`
  background-color: ${props => props.theme.colors.bgSecondary};
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  max-width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;

const AlertIcon = styled(FaExclamationTriangle)`
  font-size: 3rem;
  color: ${props => props.theme.colors.warning};
  margin-bottom: 15px;
`;

const AlertTitle = styled.h3`
  margin-bottom: 15px;
  font-family: ${props => props.theme.fonts.heading};
`;

const AlertText = styled.p`
  margin-bottom: 20px;
`;

const QuizScreen = ({ moduleId, variationIndex, onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const { resetModule } = useContext(ProgressContext);
  
  const module = moduleData[moduleId];
  const quizVariation = module.quizzes[variationIndex];
  const totalQuestions = quizVariation.length;
  
  // Detectar quando o usuário sai da página ou guia
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setShowAlert(true);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };
  
  const handleRestartModule = () => {
    resetModule(moduleId);
    window.location.reload();
  };
  
  const handleNextQuestion = () => {
    if (selectedOption === null) return;
    
    // Salvar resposta
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    
    if (currentQuestion < totalQuestions - 1) {
      // Avançar para a próxima pergunta
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Finalizar quiz
      finishQuiz(newAnswers);
    }
  };
  
  const finishQuiz = (finalAnswers) => {
    // Calcular pontuação
    let correctCount = 0;
    
    finalAnswers.forEach((answer, index) => {
      if (answer === quizVariation[index].correctAnswer) {
        correctCount++;
      }
    });
    
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
    const passed = scorePercentage >= 70;
    
    onQuizComplete(passed, scorePercentage);
  };
  
  const question = quizVariation[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;
  
  const renderOptions = () => {
    const letters = ['A', 'B', 'C', 'D'];
    
    return question.options.map((option, index) => (
      <Option 
        key={index} 
        selected={selectedOption === index}
        onClick={() => handleOptionSelect(index)}
      >
        <OptionLetter>{letters[index]}</OptionLetter>
        {option}
      </Option>
    ));
  };
  
  return (
    <QuizContainer>
      <QuizContent>
        <QuizTitle>Prova: Módulo {moduleId === 'final' ? 'Final' : moduleId}</QuizTitle>
        
        <QuizProgressContainer>
          <QuestionCounter>Questão {currentQuestion + 1} de {totalQuestions}</QuestionCounter>
          <ProgressBar>
            <Progress percentage={progressPercentage} />
          </ProgressBar>
        </QuizProgressContainer>
        
        <QuestionContainer>
          <QuestionText>{question.question}</QuestionText>
          <OptionsContainer>
            {renderOptions()}
          </OptionsContainer>
        </QuestionContainer>
        
        <QuizNavigation>
          <Button 
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
          >
            {currentQuestion < totalQuestions - 1 ? 'Próxima Pergunta' : 'Finalizar Prova'}
          </Button>
        </QuizNavigation>
        
        <AlertOverlay visible={showAlert}>
          <AlertBox>
            <AlertIcon />
            <AlertTitle>Atenção! Você saiu da página durante a prova.</AlertTitle>
            <AlertText>Conforme as regras, você precisará reiniciar este módulo.</AlertText>
            <Button variant="danger" onClick={handleRestartModule}>
              Reiniciar Módulo
            </Button>
          </AlertBox>
        </AlertOverlay>
      </QuizContent>
    </QuizContainer>
  );
};

export default QuizScreen;
