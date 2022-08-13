import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  min-height: 15.9rem;

  > h1 {
    font-family: 'Righteous', sans-serif;
    font-style: normal;
    font-size: 2.4rem;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;

export const Botoes = styled.div`
  display: flex;
  gap: 1.2rem;

  button {
    padding: 0.8rem 2.4rem;
    border: none;
    border-radius: 0.4rem;
    background: none;
    color: #fff;
    font-family: 'Righteous', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
  }

  .ativo {
    background: rgba(233, 228, 255, 0.56);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 2.4rem 3.2rem;
  gap: 2.4rem;
  border-top-left-radius: 2.4rem;
  border-top-right-radius: 2.4rem;
  position: relative;
  top: -2.4rem;
  min-height: calc(100vh - 13.5rem);

  h2 {
    font: 500 1.6rem 'Poppins', sans-serif;
  }

  button {
    width: 6.2rem;
    height: 6.2rem;
    background: #695CA4;
    border-radius: 0.8rem;
    border: none;
    position: absolute;
    bottom: 7.2rem;
    right: 3.2rem;
    cursor: pointer;
  }

  .lista-mensagens {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .left {
    right: 16.2rem;
    background: #ac4d3c;
  }
`;