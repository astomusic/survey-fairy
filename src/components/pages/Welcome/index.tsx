import React, { useState } from 'react';
import styled from 'styled-components';

import header from 'images/header-s.png';

import { media } from 'root/styles/style';

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
  ${media.mobile`
    height: 50vh;
    margin-top: 30vh;
    overflow: scroll;
    border-top: 4px solid #000;
    border-bottom: 4px solid #000;
  `}
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.mobile`
    flex-direction: column;
    margin-bottom: 20px;
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  margin-right: 25px;
  align-items: center;

  ${media.mobile`
    flex-direction: column;
    margin: 0 auto 10px;
  `}
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  margin: 10px;
  ${media.mobile`
    margin: 0;
  `}
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
    title: `💖 연초를 보내고 있는 인사담당자님께`,
    date: '2020.02.04',
    notionLink: 'https://www.notion.so/100100/2020-02-04-4ca51c5eb2804d78999afed83f72f496',
    pdfLink: 'https://bit.ly/Wanted-HRSurvey-1',
  },
  {
    id: 2,
    title: '🙏 사랑과 걱정을 담아 두 번째 설문 결과를 보냅니다',
    date: '2020.03.03',
    notionLink: 'https://www.notion.so/100100/2020-03-03-70d0325bdf6f466faa2cb5e81823cab5',
    pdfLink: 'https://bit.ly/Wanted-HRSurvey-2',
  },
  {
    id: 3,
    title: '💪 설문 결과 알리미: 코로나19, 유연근무제, 리모트 인식 등',
    date: '2020.03.10',
    notionLink: 'https://www.notion.so/100100/19-2020-03-10-c35c6e723c4241368da3c02efc5e3d95',
    pdfLink: 'https://bit.ly/Wanted-HRSurvey-3',
  },
  {
    id: 4,
    title: '🤭 눈물나는 망한&성공한 채용 경험을 공유합니다(T⌓T)',
    date: '2020.04.10',
    notionLink: 'https://www.notion.so/100100/T-T-2020-04-10-bf3bb34d62ea4dadbbe6e3548d99aa95',
    pdfLink: 'https://bit.ly/Wanted-HRSurvey-4',
  },
  {
    id: 5,
    title: `🤯 인담자 54%, '성격파탄 일잘러'보다 '근면성실 일못러'가 낫다!`,
    date: '2020.02.04',
    notionLink: 'https://www.notion.so/100100/54-2020-05-19-0a0a1b34bba54b9d91174ab6c790a66b',
    pdfLink: 'https://bit.ly/Wanted-HRSurvey-5',
  },
  {
    id: 6,
    title: '🌴 인담자 37%, 뛰어난 인재여도 조직문화 안 맞으면 채용 안 한다',
    date: '2020.06.11',
    notionLink: 'https://www.notion.so/100100/37-2020-06-11-b88dfb4b342748b3933f9079320abf25',
    pdfLink: 'https://bit.ly/Wanted-HRSurvey-6',
  },
  {
    id: 7,
    title: `🚌  '워크샵' 이미 다녀온 기업은 7%, 하반기로 논의 중인 기업은?`,
    date: '2020.07.22',
    notionLink: 'https://www.notion.so/100100/7-2020-07-22-04b61125cef141de8b0773702f372531',
    pdfLink: 'https://bit.ly/Wanted-HRSurvey-7',
  },
  {
    id: 8,
    title: `✍ 인담자가 생각하는 뉴노멀 시대 HR에게 가장 필요한 역량은 '빠르고 정확한 기획력'`,
    date: '2020.09.11',
    notionLink: 'https://www.notion.so/100100/HR-2020-09-11-c88244244d5f45c887df956517be0313',
    pdfLink: 'https://bit.ly/Wanted-HRSurvey-9',
  },
  {
    id: 9,
    title: `🖥  인사담당자 19%, 리모트워크를 '복지 제도의 하나'라고 생각하는 이유는?`,
    date: '2020.10.20',
    notionLink: 'https://www.notion.so/100100/19-2020-10-20-42f7097fd3fe4303ade756c3bc6c28bc',
    pdfLink: 'https://bit.ly/Wanted-HRSurvey-10',
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
            <LinkBtn onClick={handleLink(item.pdfLink)}>{'PDF'}</LinkBtn>
          </LinkBtnWrapper>
        </LinkWrapper>
      ))}
    </Wrapper>
  );
};

export default Welcome;
