import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Message from '../components/Message';
import GlobalStyle from '../styles/GlobalStyle';

import { Botoes, Header, Main } from './styles';
import { arrayMessages as array } from '../utils/messages';

export default function Home() {
  const [classButtons, setClassButtons] = useState(['ativo', '5', '89']);
  const [arrayMessages, setArrayMessages] = useState(array);

  const changeClassButtons = (index) => {
    const newArray = [];
    for (let i in classButtons) {
      if (Number(i) === index) {
        newArray[i] = 'ativo';
      } else {
        newArray[i] = '';
      }
    }
    setClassButtons(newArray);
  };

  const changeArrayMessages = (parameter) => {
    const newMessage = {
      imgSrc: "/img/photo_3.png",
      nameUser: "Vyctor",
      message: "Ola ola...",
      qntMessages: "5",
      time: "1:45"
    };
    if (parameter) {
      setArrayMessages([...arrayMessages, newMessage])
    } else {
      arrayMessages.pop()
      const newArray = [...arrayMessages];
      setArrayMessages(newArray);
      // setArrayMessages(arrayMessages.filter((value, index) => index !== arrayMessages.length - 1))
    }
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Bench Love</title>
      </Head>

      <>
        <GlobalStyle />

        <Header>
          <h1>Bench Love</h1>
          <Botoes>
            <button
              onClick={() => changeClassButtons(0)}
              className={classButtons[0]}
            >
              Chats
            </button>
            <button
              onClick={() => changeClassButtons(1)}
              className={classButtons[1]}
            >
              Status
            </button>
            <button
              onClick={() => changeClassButtons(2)}
              className={classButtons[2]}
            >
              Ligações
            </button>
          </Botoes>
        </Header>

        <Main>
          <h2>Recentes</h2>

          {arrayMessages.map((message, index) => {
            return <Message key={index} {...message} />;
          })}

          <button className="left" onClick={() => changeArrayMessages(false)}>
            <svg
              width="35"
              height="4"
              viewBox="0 0 35 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="35" height="4" rx="2" fill="#D9D9D9" />
            </svg>
          </button>

          <button onClick={() => changeArrayMessages(true)}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3333 14.6667H17.3333V6.66667C17.3333 6.31305 17.1928 5.97391 16.9428 5.72386C16.6927 5.47381 16.3536 5.33334 16 5.33334C15.6464 5.33334 15.3072 5.47381 15.0572 5.72386C14.8071 5.97391 14.6666 6.31305 14.6666 6.66667V14.6667H6.66665C6.31302 14.6667 5.97389 14.8071 5.72384 15.0572C5.47379 15.3072 5.33331 15.6464 5.33331 16C5.33331 16.3536 5.47379 16.6928 5.72384 16.9428C5.97389 17.1929 6.31302 17.3333 6.66665 17.3333H14.6666V25.3333C14.6666 25.687 14.8071 26.0261 15.0572 26.2761C15.3072 26.5262 15.6464 26.6667 16 26.6667C16.3536 26.6667 16.6927 26.5262 16.9428 26.2761C17.1928 26.0261 17.3333 25.687 17.3333 25.3333V17.3333H25.3333C25.6869 17.3333 26.0261 17.1929 26.2761 16.9428C26.5262 16.6928 26.6666 16.3536 26.6666 16C26.6666 15.6464 26.5262 15.3072 26.2761 15.0572C26.0261 14.8071 25.6869 14.6667 25.3333 14.6667Z"
                fill="white"
              />
            </svg>
          </button>
        </Main>
      </>
    </>
  );
}
