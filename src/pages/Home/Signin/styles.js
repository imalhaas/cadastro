import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-image: url(https://img.freepik.com/fotos-gratis/vendas-de-compras-da-cyber-monday_23-2148688502.jpg?t=st=1723824605~exp=1723828205~hmac=5929c11353b67ae824842323deda187cb70c4dd116eb784451a76883ae9a64f3&w=1380);  
  background-size: cover;  /* Para cobrir toda a área */
  background-position: center;  /* Centraliza a imagem */
  background-repeat: no-repeat;  /* Impede que a imagem se repita */
`;

export const Button = styled.button`
  background-color: yellow;  /* Define o fundo do botão como amarelo */
  color: black;  /* Define a cor do texto como preto */
  padding: 10px 20px;  /* Define o espaçamento interno */
  border: none;  /* Remove as bordas padrão */
  border-radius: 5px;  /* Adiciona bordas arredondadas */
  cursor: pointer;  /* Muda o cursor ao passar sobre o botão */

  &:hover {
    background-color: goldenrod;  /* Torna o botão mais escuro ao passar o mouse */
  }
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: white; 
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;