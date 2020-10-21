import React, { useState } from 'react';
import styled from 'styled-components';

import header from 'images/header-s.png';

interface DataProps {
  id: number;
  title: string;
  date: string;
  notionLink: string;
  pdfLink: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 40px;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  margin-right: 25px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  margin: 10px;
`;

const DateString = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #ccc;
`;

const LinkBtnWrapper = styled.div`
  display: flex;
`;

const LinkBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  width: 80px;
  height: 40px;
  color: #fff;
  background-color: #000;
  border-radius: 20px;
  margin: 0 5px;
  user-select: none;
  cursor: pointer;
  &:hover {
    /* color: #f80c1b; */
    background-color: #f80c1b;
  }
`;

const DATASET: DataProps[] = [
  {
    id: 1,
    title: '연초를 보내고 있는 인사담당자님께',
    date: '2020.02.04',
    notionLink: 'https://www.notion.so/100100/2020-02-04-4ca51c5eb2804d78999afed83f72f496',
    pdfLink: 'www.daum.net',
  },
  {
    id: 2,
    title: '사랑과 걱정을 담아 두 번째 설문 결과를 보냅니다',
    date: '2020.03.03',
    notionLink: 'https://www.notion.so/100100/2020-03-03-70d0325bdf6f466faa2cb5e81823cab5',
    pdfLink: 'www.daum.net',
  },
  {
    id: 3,
    title: '설문 결과 알리미: 코로나19, 유연근무제, 리모트 인식 등',
    date: '2020.03.10',
    notionLink: 'www.naver.com',
    pdfLink: 'www.daum.net',
  },
  {
    id: 4,
    title: '눈물나는 망한&성공한 채용 경험을 공유합니다(T⌓T)',
    date: '2020.04.10',
    notionLink: 'https://www.notion.so/100100/T-T-2020-04-10-bf3bb34d62ea4dadbbe6e3548d99aa95',
    pdfLink: 'www.daum.net',
  },
  {
    id: 5,
    title: `😀 인담자 54%, '성격파탄 일잘러'보다 '근면성실 일못러'가 낫다!`,
    date: '2020.02.04',
    notionLink: 'www.naver.com',
    pdfLink: 'www.daum.net',
  },
  {
    id: 6,
    title: '인담자 37%, 뛰어난 인재여도 조직문화 안 맞으면 채용 안 한다',
    date: '2020.06.11',
    notionLink: 'www.naver.com',
    pdfLink: 'www.daum.net',
  },
  {
    id: 7,
    title: 'title',
    date: '2020.02.04',
    notionLink: 'www.naver.com',
    pdfLink: 'www.daum.net',
  },
  {
    id: 8,
    title: 'title',
    date: '2020.02.04',
    notionLink: 'www.naver.com',
    pdfLink: 'www.daum.net',
  },
  {
    id: 9,
    title: 'title',
    date: '2020.02.04',
    notionLink: 'www.naver.com',
    pdfLink: 'www.daum.net',
  },
];

const Welcome = () => {
  const handleLink = (target: string) => () => {
    window.open(target);
  };
  return (
    <Wrapper>
      {DATASET.map((item) => (
        <LinkWrapper key={item.id}>
          <TextWrapper>
            <Title key={item.id}>{item.title}</Title>
            <DateString>{`(${item.date})`}</DateString>
          </TextWrapper>
          <LinkBtnWrapper>
            <LinkBtn onClick={handleLink(item.notionLink)}>{'노션'}</LinkBtn>
            <LinkBtn>{'PDF'}</LinkBtn>
          </LinkBtnWrapper>
        </LinkWrapper>
      ))}
    </Wrapper>
  );
};

export default Welcome;
