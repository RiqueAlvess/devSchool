import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './screens/WelcomeScreen';
import ModuleSelection from './screens/ModuleSelection';
import VideoPlayer from './screens/VideoPlayer';
import QuizScreen from './screens/QuizScreen';
import QuizResult from './screens/QuizResult';
import Certificate from './screens/Certificate';
import { AppContainer, MainContent } from './styles/AppStyles';
import { ProgressProvider } from './contexts/ProgressContext';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentModule, setCurrentModule] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [quizVariation, setQuizVariation] = useState(0);
  const [quizResult, setQuizResult] = useState({ passed: false, score: 0 });

  const handleStartLearning = () => {
    setCurrentScreen('modules');
  };

  const handleModuleSelect = (moduleId) => {
    setCurrentModule(moduleId);
    setCurrentVideo(0);
    
    // Verificar se o módulo selecionado é o exame final
    if (moduleId === 'final') {
      // Selecionar aleatoriamente uma variação do quiz final (0, 1 ou 2)
      const randomVariation = Math.floor(Math.random() * 3);
      setQuizVariation(randomVariation);
      setCurrentScreen('quiz'); // Ir direto para o quiz sem passar pelo VideoPlayer
    } else {
      setCurrentScreen('video');
    }
  };

  const handleVideoComplete = (isLastVideo) => {
    if (isLastVideo) {
      // Selecionar aleatoriamente uma variação do quiz (0, 1 ou 2)
      const randomVariation = Math.floor(Math.random() * 3);
      setQuizVariation(randomVariation);
      setCurrentScreen('quiz');
    } else {
      setCurrentVideo(prev => prev + 1);
    }
  };

  const handleQuizComplete = (passed, score) => {
    setQuizResult({ passed, score });
    setCurrentScreen('quiz-result');
  };

  const handleNextModule = () => {
    if (currentModule === 'final') {
      setCurrentScreen('certificate');
    } else {
      setCurrentScreen('modules');
    }
  };

  const handleRetryModule = () => {
    setCurrentVideo(0);
    
    // Verificar se o módulo é o exame final
    if (currentModule === 'final') {
      // Selecionar uma nova variação aleatória
      const randomVariation = Math.floor(Math.random() * 3);
      setQuizVariation(randomVariation);
      setCurrentScreen('quiz'); // Ir direto para o quiz
    } else {
      setCurrentScreen('video');
    }
  };

  const handleRestart = () => {
    setCurrentModule(null);
    setCurrentVideo(0);
    setCurrentScreen('welcome');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProgressProvider>
        <AppContainer>
          <Header onRestart={handleRestart} />
          <MainContent>
            {currentScreen === 'welcome' && <WelcomeScreen onStartLearning={handleStartLearning} />}
            {currentScreen === 'modules' && <ModuleSelection onModuleSelect={handleModuleSelect} />}
            {currentScreen === 'video' && (
              <VideoPlayer 
                moduleId={currentModule} 
                videoIndex={currentVideo} 
                onVideoComplete={handleVideoComplete} 
              />
            )}
            {currentScreen === 'quiz' && (
              <QuizScreen 
                moduleId={currentModule} 
                variationIndex={quizVariation} 
                onQuizComplete={handleQuizComplete} 
              />
            )}
            {currentScreen === 'quiz-result' && (
              <QuizResult 
                result={quizResult} 
                onNextModule={handleNextModule} 
                onRetryModule={handleRetryModule} 
              />
            )}
            {currentScreen === 'certificate' && <Certificate onRestart={handleRestart} />}
          </MainContent>
          <Footer />
        </AppContainer>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
