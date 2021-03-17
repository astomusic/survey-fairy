import React from 'react';
import styled from 'styled-components';

import { media } from 'root/styles/style';

interface DataProps {
  id: number;
  title: string;
  date: string;
  webPage?: string;
  notionLink?: string;
  pdfLink?: string;
  bar?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 40px;
  overflow: auto;
  ${media.mobile`
    overflow: scroll;
    height: 50vh;
    margin-top: 30vh;
    border-top: 4px solid #000;
    border-bottom: 4px solid #000;
  `}
`;

const LinkWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.mobile`
    display: grid;
    justify-content: center;
    justify-items: center;
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
  display: grid;
  height: 40px;
  width: 180px;
  grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
  grid-column-gap: 10px;
  grid-template-rows: 1fr;
  justify-content: flex-start;
  overflow: hidden;
`;

const LinkBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  height: 40px;
  color: #fff;
  background-color: #000;
  border-radius: 20px;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #f80c1b;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 10px;
`;

const DATASET: DataProps[] = [
  {
    id: 1,
    title: `💖 연초를 보내고 있는 인사담당자님께`,
    date: '2020.02.04',
    notionLink: 'https://www.notion.so/100100/2020-02-04-4ca51c5eb2804d78999afed83f72f496',
    pdfLink: 'https://bit.ly/Wanted-HRSurvey-1',
    bar: '2020',
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
    pdfLink: 'http://bit.ly/Wanted-HRSurvey3',
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
    date: '2020.05.19',
    notionLink: 'https://www.notion.so/100100/54-2020-05-19-0a0a1b34bba54b9d91174ab6c790a66b',
    pdfLink: 'http://bit.ly/Wanted-HRSurvey5',
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
  {
    id: 10,
    title: `💰 개발 직군 신입 연봉 최저 수준은 3,000~3,300. 비개발 직군은?`,
    date: '2020.11.12',
    notionLink:
      'https://www.notion.so/100100/3-000-3-300-20-11-12-bbceb6c5438e478e9b35deb9600cdfef',
    pdfLink: 'https://bit.ly/3ePjbJ6',
  },
  {
    id: 11,
    title: `🚀 2020년 설문을 마무리하며, 인담자들의 내년 계획은?`,
    date: '2020.12.10',
    notionLink: 'https://www.notion.so/100100/2020-20-12-10-3e3bdf836d88492a98b8aa81bef1f991',
    pdfLink: 'https://bit.ly/wanted-HRSurvey12',
  },
  {
    id: 12,
    title: `💡 설문팀 채용 동향: 수시채용 계속 73% 신입채용 예정 35%`,
    date: '2021.01.14',
    webPage: `https://mailchi.mp/ac744475b392/hrsurvey-202101`,
    bar: '2021',
  },
  {
    id: 13,
    title: `🔥 인담자가 뽑은 해야할 것 같은 자기계발 2위 데이터・AI・코딩, 1위는?`,
    date: '2021.02.10',
    webPage: `https://us20.campaign-archive.com/?u=8a12f4929371a07ab5a39c23c&id=f853ddfb7c`,
  },
  {
    id: 14,
    title: ` 🔧 다른 회사에선 어떤 HR 솔루션과 툴을 활용하는지 설문 결과로 확인하세요`,
    date: '2021.03.11',
    webPage: `https://us20.campaign-archive.com/?u=8a12f4929371a07ab5a39c23c&id=35a069f0bc`,
  },
];

const Welcome = () => {
  const handleLink = (target: string) => () => {
    window.open(target);
  };
  return (
    <Wrapper>
      {DATASET.map((item) => (
        <React.Fragment key={item.id}>
          {item.bar && <Bar>{item.bar}</Bar>}
          <LinkWrapper key={item.id}>
            <TextWrapper>
              <Title key={item.id}>{item.title}</Title>
              <DateString>{`(${item.date})`}</DateString>
            </TextWrapper>
            <LinkBtnWrapper>
              {item.notionLink && <LinkBtn onClick={handleLink(item.notionLink)}>{'노션'}</LinkBtn>}
              {item.pdfLink && <LinkBtn onClick={handleLink(item.pdfLink)}>{'PDF'}</LinkBtn>}
              {item.webPage && <LinkBtn onClick={handleLink(item.webPage)}>{'WEB'}</LinkBtn>}
            </LinkBtnWrapper>
          </LinkWrapper>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default Welcome;
