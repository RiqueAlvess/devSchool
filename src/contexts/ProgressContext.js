import React, { createContext, useState, useEffect } from 'react';

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    // Carregar progresso do localStorage, se existir
    const savedProgress = localStorage.getItem('pythonLearningProgress');
    if (savedProgress) {
      return JSON.parse(savedProgress);
    }
    
    // Progresso inicial
    return {
      currentModule: 1,
      moduleStatus: {
        1: { unlocked: true, completed: false, currentVideo: 0, allVideosWatched: false },
        2: { unlocked: false, completed: false, currentVideo: 0, allVideosWatched: false },
        3: { unlocked: false, completed: false, currentVideo: 0, allVideosWatched: false },
        final: { unlocked: false, completed: false }
      },
      quizHistory: {}
    };
  });
  
  // Salvar progresso no localStorage quando ele mudar
  useEffect(() => {
    localStorage.setItem('pythonLearningProgress', JSON.stringify(progress));
  }, [progress]);
  
  // Atualizar progresso do módulo
  const updateModuleProgress = (moduleId, updates) => {
    setProgress(prevProgress => {
      const updatedModuleStatus = {
        ...prevProgress.moduleStatus,
        [moduleId]: {
          ...prevProgress.moduleStatus[moduleId],
          ...updates
        }
      };
      
      return {
        ...prevProgress,
        currentModule: moduleId,
        moduleStatus: updatedModuleStatus
      };
    });
  };
  
  // Salvar resultado do quiz
  const saveQuizResult = (moduleId, variation, score, passed) => {
    setProgress(prevProgress => {
      const quizHistory = {
        ...prevProgress.quizHistory,
        [moduleId]: [
          ...(prevProgress.quizHistory[moduleId] || []),
          { variation, score, passed, date: new Date().toISOString() }
        ]
      };
      
      // Se passou no quiz, marcar o módulo como concluído
      let moduleStatus = { ...prevProgress.moduleStatus };
      if (passed) {
        moduleStatus = {
          ...moduleStatus,
          [moduleId]: {
            ...moduleStatus[moduleId],
            completed: true
          }
        };
        
        // Se o módulo atual foi concluído, desbloquear o próximo módulo ou o exame final
        if (moduleId !== 'final') {
          // Converter para número apenas se não for 'final'
          const currentModuleId = moduleId === 'final' ? moduleId : Number(moduleId);
          const nextModuleId = currentModuleId === 'final' ? 'final' : currentModuleId + 1;
          
          if (moduleStatus[nextModuleId]) {
            moduleStatus[nextModuleId] = {
              ...moduleStatus[nextModuleId],
              unlocked: true
            };
          }
          
          // Se for o módulo 3, também desbloquear o exame final
          if (currentModuleId === 3) {
            moduleStatus.final = {
              ...moduleStatus.final,
              unlocked: true
            };
          }
        }
      }
      
      return {
        ...prevProgress,
        quizHistory,
        moduleStatus
      };
    });
  };
  
  // Resetar progresso
  const resetProgress = () => {
    const initialProgress = {
      currentModule: 1,
      moduleStatus: {
        1: { unlocked: true, completed: false, currentVideo: 0, allVideosWatched: false },
        2: { unlocked: false, completed: false, currentVideo: 0, allVideosWatched: false },
        3: { unlocked: false, completed: false, currentVideo: 0, allVideosWatched: false },
        final: { unlocked: false, completed: false }
      },
      quizHistory: {}
    };
    
    setProgress(initialProgress);
    localStorage.setItem('pythonLearningProgress', JSON.stringify(initialProgress));
  };
  
  // Resetar módulo específico
  const resetModule = (moduleId) => {
    setProgress(prevProgress => {
      const updatedModuleStatus = {
        ...prevProgress.moduleStatus,
        [moduleId]: {
          ...prevProgress.moduleStatus[moduleId],
          completed: false,
          currentVideo: 0,
          allVideosWatched: false
        }
      };
      
      return {
        ...prevProgress,
        moduleStatus: updatedModuleStatus
      };
    });
  };
  
  return (
    <ProgressContext.Provider 
      value={{ 
        progress, 
        updateModuleProgress, 
        saveQuizResult, 
        resetProgress,
        resetModule
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
