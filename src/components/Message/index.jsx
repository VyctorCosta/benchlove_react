import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, NumMessages, ProfileName } from './style';


export default function Message({imgSrc, nameUser, message, qntMessages, time}) {
  const router = useRouter();
  
  return (
    <Container onClick={() => router.push(`/contato/${nameUser}`)}>
      <Image src={imgSrc} alt="Imagem de perfil" width={40} height={40} />

      <ProfileName>
        <span>{nameUser}</span>
        <p>{message}</p>
        <p>novo texto</p>
      </ProfileName>

      <NumMessages>
        <span>10</span>
        <p>2:45</p>
      </NumMessages>
    </Container>
  );
}
