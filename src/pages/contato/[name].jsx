import { useRouter } from 'next/router';
import React from 'react';
import GlobalStyle from '../../styles/global';

export default function Contato(props) {
  const router = useRouter();
  
  return (
    <>
    <GlobalStyle />
    <h1>
      Olá meu nome é {router.query.name}
    </h1>
    <button onClick={() => router.push("/")}>Voltar para Home</button>
    </>
  );
}
