import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FaPython, FaAward } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import Button from '../components/Button';

const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
`;

const CertificateWrapper = styled.div`
  background-color: #FFFFFF;
  color: #333333;
  width: 800px;
  max-width: 100%;
  height: 600px;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='none' stroke='%234CAF50' stroke-width='0.5' stroke-dasharray='5,5' /%3E%3C/svg%3E");
    opacity: 0.05;
    z-index: 0;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    height: auto;
    min-height: 500px;
    padding: 30px;
  }
`;

const CertificateHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
`;

const CertificateLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const LogoIcon = styled(FaPython)`
  font-size: 3rem;
  color: #4CAF50;
`;

const LogoText = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  font-size: 2rem;
  color: #333;
`;

const CertificateTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const CertificateBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const CertificateText = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #555;
`;

const CertificateName = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 15px 0;
  color: #2196F3;
  font-family: 'JetBrains Mono', monospace;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const CertificateCourse = styled.h3`
  font-size: 1.8rem;
  margin: 15px 0;
  color: #333;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const CertificateDate = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #555;
`;

const CertificateFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const CertificateSignature = styled.div`
  text-align: center;
`;

const SignatureLine = styled.div`
  width: 200px;
  height: 2px;
  background-color: #333;
  margin-bottom: 10px;
`;

const SignatureText = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 3px 0;
`;

const CertificateSeal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Seal = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4CAF50, #2196F3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SealIcon = styled(FaAward)`
  font-size: 2rem;
  color: white;
`;

const CertificateActions = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const Certificate = ({ onRestart }) => {
  const certificateRef = useRef(null);
  const [userName, setUserName] = useState("Aluno");
  
  const handleDownload = () => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'certificado-python-3s-dev.png';
        link.href = imgData;
        link.click();
      });
    }
  };
  
  const formatDate = () => {
    const date = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  };
  
  const handleChangeName = () => {
    const name = prompt("Digite seu nome para o certificado:", userName);
    if (name && name.trim()) {
      setUserName(name.trim());
    }
  };
  
  return (
    <CertificateContainer>
      <CertificateWrapper ref={certificateRef}>
        <CertificateHeader>
          <CertificateLogo>
            <LogoIcon />
            <LogoText>3S Dev</LogoText>
          </CertificateLogo>
          <CertificateTitle>Certificado de Conclusão</CertificateTitle>
        </CertificateHeader>
        
        <CertificateBody>
          <CertificateText>Este certificado é concedido a</CertificateText>
          <CertificateName>{userName}</CertificateName>
          <CertificateText>por concluir com sucesso o curso de</CertificateText>
          <CertificateCourse>Fundamentos de Python para Iniciantes</CertificateCourse>
          <CertificateDate>Data: {formatDate()}</CertificateDate>
        </CertificateBody>
        
        <CertificateFooter>
          <CertificateSignature>
            <SignatureLine />
            <SignatureText>Diretor de Tecnologia</SignatureText>
            <SignatureText>3S Dev</SignatureText>
          </CertificateSignature>
          
          <CertificateSeal>
            <Seal>
              <SealIcon />
            </Seal>
          </CertificateSeal>
        </CertificateFooter>
      </CertificateWrapper>
      
      <CertificateActions>
        <Button onClick={handleChangeName}>Alterar Nome</Button>
        <Button onClick={handleDownload}>Baixar Certificado</Button>
        <Button variant="secondary" onClick={onRestart}>Reiniciar Curso</Button>
      </CertificateActions>
    </CertificateContainer>
  );
};

export default Certificate;
