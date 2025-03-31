import React, { useState, useEffect, useContext, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle, FaClock } from 'react-icons/fa';
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

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: ${props => props.timeLeft <= 10 ? props.theme.colors.error : props.theme.colors.textPrimary};
  font-weight: ${props => props.timeLeft <= 10 ? 'bold' : 'normal'};
  transition: color 0.3s;
`;

const TimerIcon = styled(FaClock)`
  font-size: 1.2rem;
`;

const TimerText = styled.span`
  font-size: 1.1rem;
`;

const TimerProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${props => props.theme.colors.bgTertiary};
  border-radius: 2px;
  margin-top: 5px;
  overflow: hidden;
`;

const TimerProgress = styled.div`
  height: 100%;
  background-color: ${props => 
    props.timeLeft <= 10 
      ? props.theme.colors.error 
      : props.timeLeft <= 20 
        ? props.theme.colors.warning 
        : props.theme.colors.accentPrimary};
  width: ${props => (props.timeLeft / 45) * 100}%;
  transition: width 1s linear, background-color 0.3s;
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

const ErrorMessage = styled.div`
  background-color: ${props => props.theme.colors.error};
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
`;

const QuizScreen = ({ moduleId, variationIndex, onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45); // 45 segundos por pergunta
  const timerIntervalRef = useRef(null);
  const { saveQuizResult, resetModule } = useContext(ProgressContext);
  const [error, setError] = useState(null);
  const [quizData, setQuizData] = useState({
    module: null,
    quizVariation: null,
    totalQuestions: 0
  });
  
  // Usando useCallback para envolver handleNextQuestion - agora definido incondicionalmente
  const handleNextQuestion = useCallback(() => {
    // Não executar a lógica se houver erro ou dados incompletos
    if (error || !quizData.quizVariation) return;
    
    // Limpar o temporizador antes de avançar
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    
    // Salvar resposta (ou null se não houver seleção)
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    
    if (currentQuestion < quizData.totalQuestions - 1) {
      // Avançar para a próxima pergunta
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setSelectedOption(null);
    } else {
      // Finalizar quiz
      // Calcular pontuação
      let correctCount = 0;
      
      newAnswers.forEach((answer, index) => {
        // Se a resposta for null (não respondeu) ou incorreta, não incrementa o contador
        if (answer !== null && answer === quizData.quizVariation[index].correctAnswer) {
          correctCount++;
        }
      });
      
      const scorePercentage = Math.round((correctCount / quizData.totalQuestions) * 100);
      const passed = scorePercentage >= 70;
      
      // Salvar o resultado do quiz no contexto
      saveQuizResult(moduleId, variationIndex, scorePercentage, passed);
      
      // Notificar o App.js sobre a conclusão do quiz
      onQuizComplete(passed, scorePercentage);
    }
  }, [answers, currentQuestion, selectedOption, quizData, error, moduleId, variationIndex, onQuizComplete, saveQuizResult]);

  // Efeito para carregar os dados do quiz - agora definido incondicionalmente
  useEffect(() => {
    try {
      // Verificar se o módulo existe no moduleData
      if (!moduleData[moduleId]) {
        throw new Error(`Módulo com ID ${moduleId} não encontrado em moduleData`);
      }
      
      const module = moduleData[moduleId];
      
      // Verificar se o módulo tem a propriedade quizzes
      if (!module.quizzes) {
        throw new Error(`Módulo ${moduleId} não tem a propriedade quizzes`);
      }
      
      // Verificar se a variação do quiz existe
      if (!module.quizzes[variationIndex]) {
        throw new Error(`Variação ${variationIndex} não encontrada no módulo ${moduleId}`);
      }
      
      const quizVariation = module.quizzes[variationIndex];
      const totalQuestions = quizVariation.length;
      
      // Verificar se temos perguntas
      if (!quizVariation || quizVariation.length === 0) {
        throw new Error('Não há perguntas disponíveis para este quiz');
      }
      
      // Configurar os dados do quiz
      setQuizData({
        module,
        quizVariation,
        totalQuestions
      });
      
      setError(null);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  }, [moduleId, variationIndex]);
  
  // Iniciar o timer quando a página carrega ou quando a pergunta muda - agora definido incondicionalmente
  useEffect(() => {
    // Não iniciar o timer se houver erro ou dados incompletos
    if (error || !quizData.quizVariation) return;
    
    setTimeLeft(45);
    
    // Limpar qualquer temporizador anterior
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    
    // Iniciar novo temporizador
    timerIntervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Tempo esgotado, passar para a próxima pergunta
          clearInterval(timerIntervalRef.current);
          handleNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Limpar temporizador quando o componente é desmontado ou a pergunta muda
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [currentQuestion, handleNextQuestion, error, quizData]);
  
  // Detectar quando o usuário sai da página ou guia - agora definido incondicionalmente
  useEffect(() => {
    // Não monitorar visibilidade se houver erro ou dados incompletos
    if (error || !quizData.quizVariation) return;
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setShowAlert(true);
        
        // Pausar o temporizador se o usuário sair da página
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
        }
      } else if (document.visibilityState === 'visible' && !showAlert) {
        // Retomar o temporizador se o usuário voltar e o alerta não estiver visível
        if (!timerIntervalRef.current) {
          timerIntervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
              if (prev <= 1) {
                // Tempo esgotado, passar para a próxima pergunta
                clearInterval(timerIntervalRef.current);
                handleNextQuestion();
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [showAlert, handleNextQuestion, error, quizData]);
  
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };
  
  const handleRestartModule = () => {
    resetModule(moduleId);
    window.location.reload();
  };
  
  // Se houver erro, mostrar mensagem
  if (error) {
    return (
      <QuizContainer>
        <ErrorMessage>
          <h3>Erro ao carregar o quiz</h3>
          <p>{error}</p>
          <Button variant="secondary" onClick={() => window.location.reload()}>
            Tentar novamente
          </Button>
        </ErrorMessage>
      </QuizContainer>
    );
  }
  
  // Se os dados ainda não foram carregados, mostrar mensagem de carregamento
  if (!quizData.quizVariation) {
    return (
      <QuizContainer>
        <QuizContent>
          <QuizTitle>Carregando quiz...</QuizTitle>
        </QuizContent>
      </QuizContainer>
    );
  }
  
  const question = quizData.quizVariation[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / quizData.totalQuestions) * 100;
  
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
          <QuestionCounter>Questão {currentQuestion + 1} de {quizData.totalQuestions}</QuestionCounter>
          <ProgressBar>
            <Progress percentage={progressPercentage} />
          </ProgressBar>
        </QuizProgressContainer>
        
        <TimerContainer timeLeft={timeLeft}>
          <TimerIcon />
          <TimerText>Tempo restante: {timeLeft} segundos</TimerText>
          <TimerProgressBar>
            <TimerProgress timeLeft={timeLeft} />
          </TimerProgressBar>
        </TimerContainer>
        
        <QuestionContainer>
          <QuestionText>{question.question}</QuestionText>
          <OptionsContainer>
            {renderOptions()}
          </OptionsContainer>
        </QuestionContainer>
        
        <QuizNavigation>
          <Button onClick={handleNextQuestion}>
            {currentQuestion < quizData.totalQuestions - 1 ? 'Próxima Pergunta' : 'Finalizar Prova'}
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
