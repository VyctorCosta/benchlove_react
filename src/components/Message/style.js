import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-width: 29.6rem;
  justify-content: space-around;
  cursor: pointer;
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4;
  min-width: 17.2rem;

  span {
  font-family: 'Righteous', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: #606060;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    color: #c3c3c3;
  }
`;

export const NumMessages = styled.div`
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.8rem;
    height: 2.2rem;
    background: #8781a1;
    border-radius: 30px;
    color: #fff;
  }

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;

  color: #9A9A9A;
`;