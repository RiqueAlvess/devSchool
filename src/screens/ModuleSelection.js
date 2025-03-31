import React, { useContext } from 'react';
import styled from 'styled-components';
import { 
  FaCloud, 
  FaRobot, 
  FaChartLine, 
  FaAward,
  FaLock,
  FaCheck 
} from 'react-icons/fa';
import { ProgressContext } from '../contexts/ProgressContext';

const ModuleSelectionContainer = styled.div`
  padding: 20px 0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Module = styled.div`
  background-color: ${props => props.theme.colors.bgSecondary};
  border-radius: 8px;
  padding: 25px;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
  cursor: ${props => props.locked ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.locked ? 0.7 : 1};
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => 
      props.locked 
        ? 'rgba(0, 0, 0, 0.2)' 
        : 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1))'};
    opacity: ${props => props.locked ? 1 : 0};
    transition: opacity 0.3s;
    z-index: 0;
  }
  
  &:hover:before {
    opacity: ${props => props.locked ? 1 : 1};
  }
  
  &:hover {
    transform: ${props => props.locked ? 'none' : 'translateY(-5px)'};
    box-shadow: ${props => props.locked ? 'none' : '0 8px 15px rgba(0, 0, 0, 0.2)'};
  }
`;

const ModuleIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.accentSecondary};
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
`;

const ModuleTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
`;

const ModuleDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
`;

const ModuleStatus = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: ${props => {
    if (props.completed) return 'rgba(33, 150, 243, 0.2)';
    if (props.unlocked) return 'rgba(76, 175, 80, 0.2)';
    return props.theme.colors.bgTertiary;
  }};
  color: ${props => {
    if (props.completed) return props.theme.colors.accentSecondary;
    if (props.unlocked) return props.theme.colors.accentPrimary;
    return props.theme.colors.textSecondary;
  }};
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StatusIcon = styled.span`
  display: flex;
  align-items: center;
`;

const ModuleSelection = ({ onModuleSelect }) => {
  const { progress } = useContext(ProgressContext);
  
  const modules = [
    {
      id: 1,
      name: "API",
      icon: <FaCloud />,
      description: "Aprenda os fundamentos de APIs com Python"
    },
    {
      id: 2,
      name: "Automação",
      icon: <FaRobot />,
      description: "Aprenda a automatizar tarefas com Python"
    },
    {
      id: 3,
      name: "Análise de Dados",
      icon: <FaChartLine />,
      description: "Aprenda análise de dados com Python"
    },
    {
      id: 'final',
      name: "Exame Final",
      icon: <FaAward />,
      description: "Teste seus conhecimentos e obtenha seu certificado"
    }
  ];
  
  const handleModuleClick = (moduleId) => {
    // Verificar se o moduleId existe no progress.moduleStatus
    if (!progress.moduleStatus[moduleId]) {
      console.error(`Módulo com ID ${moduleId} não encontrado em progress.moduleStatus`);
      return;
    }
    
    const moduleStatus = progress.moduleStatus[moduleId];
    
    if (moduleStatus && moduleStatus.unlocked) {
      console.log(`Selecionando módulo: ${moduleId}`);
      onModuleSelect(moduleId);
    } else {
      console.log(`Módulo ${moduleId} está bloqueado`);
    }
  };
  
  const getModuleStatus = (moduleId) => {
    // Verificar se o moduleId existe no progress.moduleStatus
    if (!progress.moduleStatus[moduleId]) {
      console.error(`Módulo com ID ${moduleId} não encontrado em progress.moduleStatus`);
      return { 
        text: "Desconhecido", 
        icon: null, 
        completed: false, 
        unlocked: false 
      };
    }
    
    const moduleStatus = progress.moduleStatus[moduleId];
    
    if (moduleStatus.completed) {
      return { 
        text: "Concluído", 
        icon: <FaCheck />, 
        completed: true, 
        unlocked: true 
      };
    } else if (moduleStatus.unlocked) {
      return { 
        text: "Disponível", 
        icon: null, 
        completed: false, 
        unlocked: true 
      };
    } else {
      return { 
        text: "Bloqueado", 
        icon: <FaLock />, 
        completed: false, 
        unlocked: false 
      };
    }
  };
  
  return (
    <ModuleSelectionContainer>
      <Title>Selecione um Módulo</Title>
      <ModulesGrid>
        {modules.map(module => {
          const status = getModuleStatus(module.id);
          const locked = !status.unlocked;
          
          return (
            <Module 
              key={module.id} 
              locked={locked}
              onClick={() => handleModuleClick(module.id)}
            >
              <ModuleIcon>{module.icon}</ModuleIcon>
              <ModuleTitle>Módulo {module.id === 'final' ? '' : `${module.id}: `}{module.name}</ModuleTitle>
              <ModuleDescription>{module.description}</ModuleDescription>
              <ModuleStatus 
                completed={status.completed} 
                unlocked={status.unlocked}
              >
                {status.icon && <StatusIcon>{status.icon}</StatusIcon>}
                {status.text}
              </ModuleStatus>
            </Module>
          );
        })}
      </ModulesGrid>
    </ModuleSelectionContainer>
  );
};

export default ModuleSelection;
