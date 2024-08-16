import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
   background-image: url(https://img.freepik.com/fotos-gratis/caderno-plano-com-lista-de-tarefas-na-mesa_23-2148938726.jpg?t=st=1723825364~exp=1723828964~hmac=f16f45fbdb910b402a3ba04aa0cfce6984c527023a5ed31fdfbefab58479dc40&w=1380);  
  background-size: cover;  /* Para cobrir toda a área */
  background-position: center;  /* Centraliza a imagem */
  background-repeat: no-repeat;  /* Impede que a imagem se repita */
`;

export const Button = styled.button`
  background-color: green;  /* Define o fundo do botão como verde */
  color: white;  /* Define a cor do texto como branco */
  padding: 10px 20px;  /* Define o espaçamento interno */
  border: none;  /* Remove as bordas padrão */
  border-radius: 5px;  /* Adiciona bordas arredondadas */
  cursor: pointer;  /* Muda o cursor ao passar sobre o botão */

  &:hover {
    background-color: darkgreen;  /* Torna o botão mais escuro ao passar o mouse */
  }
`;

export const Title = styled.h2``;