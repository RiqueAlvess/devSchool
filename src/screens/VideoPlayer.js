import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { FaExclamationCircle } from 'react-icons/fa';
import Button from '../components/Button';
import { ProgressContext } from '../contexts/ProgressContext';
import moduleData from '../data/moduleData';

const VideoPlayerContainer = styled.div`
  margin: 20px 0;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  margin-bottom: 20px;
`;

const StyledYouTube = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const VideoInfo = styled.div`
  background-color: ${props => props.theme.colors.bgSecondary};
  padding: 25px;
  border-radius: 8px;
`;

const VideoTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: 10px;
  color: ${props => props.theme.colors.accentSecondary};
`;

const VideoDescription = styled.p`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.textSecondary};
`;

const VideoNavigation = styled.div`
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
  animation: pulse 2s infinite;
`;

const AlertIcon = styled(FaExclamationCircle)`
  font-size: 3rem;
  color: ${props => props.theme.colors.warning};
  margin-bottom: 15px;
`;

const AlertTitle = styled.h3`
  margin-bottom: 15px;
  font-family: ${props => props.theme.fonts.heading};
`;

const AlertText = styled.p`
  margin-bottom: 10px;
`;

const CountdownText = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.error};
  margin-top: 15px;
`;

const VideoPlayer = ({ moduleId, videoIndex, onVideoComplete }) => {
  const [player, setPlayer] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [countdown, setCountdown] = useState(180); // 3 minutos em segundos
  const [videoEnded, setVideoEnded] = useState(false);
  const countdownIntervalRef = useRef(null);
  
  const { updateModuleProgress, resetModule } = useContext(ProgressContext);
  
  const module = moduleData[moduleId];
  const video = module.videos[videoIndex];
  const isLastVideo = videoIndex === module.videos.length - 1;
  
  // Função para parar a contagem regressiva
  const stopCountdown = () => {
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
  };
  
  // Detectar quando o usuário sai da página ou guia
  useEffect(() => {
    // Definir a função startCountdown dentro do useEffect para evitar erros ESLint
    const startCountdown = () => {
      setCountdown(180); // Resetar para 3 minutos
      
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      
      countdownIntervalRef.current = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            // Tempo esgotado, reset do módulo
            stopCountdown();
            resetModule(moduleId);
            // Recarregar a página para começar o módulo novamente
            window.location.reload();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Usuário saiu da página
        if (player && player.pauseVideo) {
          player.pauseVideo();
          setShowAlert(true);
          startCountdown();
        }
      } else {
        // Usuário voltou para a página
        if (player && player.playVideo && showAlert) {
          setShowAlert(false);
          stopCountdown();
          if (!videoEnded) {
            player.playVideo();
          }
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      stopCountdown();
    };
  }, [player, showAlert, videoEnded, moduleId, resetModule, stopCountdown]);
  
  const handleReady = (event) => {
    setPlayer(event.target);
  };
  
  const handleStateChange = (event) => {
    // Estado 0 = vídeo terminou
    if (event.data === 0) {
      setVideoEnded(true);
      // Salvar progresso
      updateModuleProgress(moduleId, { currentVideo: videoIndex });
    }
  };
  
  const handleNextVideo = () => {
    onVideoComplete(false);
  };
  
  const handleStartQuiz = () => {
    onVideoComplete(true);
  };
  
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0
    }
  };
  
  return (
    <VideoPlayerContainer>
      <VideoContainer>
        <StyledYouTube
          videoId={video.id}
          opts={opts}
          onReady={handleReady}
          onStateChange={handleStateChange}
        />
        <AlertOverlay visible={showAlert}>
          <AlertBox>
            <AlertIcon />
            <AlertTitle>Atenção! Você saiu da página.</AlertTitle>
            <AlertText>O vídeo foi pausado. Volte para a página para continuar.</AlertText>
            <CountdownText>Reiniciando em: {countdown} segundos</CountdownText>
          </AlertBox>
        </AlertOverlay>
      </VideoContainer>
      
      <VideoInfo>
        <VideoTitle>{video.title}</VideoTitle>
        <VideoDescription>{video.description}</VideoDescription>
        
        <VideoNavigation>
          {videoEnded && !isLastVideo && (
            <Button onClick={handleNextVideo}>Próximo Vídeo</Button>
          )}
          {videoEnded && isLastVideo && (
            <Button onClick={handleStartQuiz}>Iniciar Prova</Button>
          )}
        </VideoNavigation>
      </VideoInfo>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
