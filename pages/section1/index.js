import React, { useEffect, useRef, useState } from 'react'
import {
    Wrap,
    Section,
    Content,
    Text,
    Title,
    Bar,
    Progress,
    Percent,
} from './elements';


const Section1 = () => {
    const sectionRef = useRef(null);
    const [percent, setPercent] = useState(0 + '%');
    const [barWidth, setBarWidth] = useState(0 + '%');

    const getPercent = () => {
        let sectionHeight = sectionRef.current.scrollHeight;
        let realScrollHeight = sectionHeight - window.innerHeight;
        let screenHeight = window.scrollY;
        let scrollPercent = (screenHeight / realScrollHeight) * 100;
        let textPercent = Math.floor(scrollPercent);

        console.log(`Section 전체 높이: ${sectionHeight}`);
        console.log(`Screen 높이: ${screenHeight}`);
        console.log(`실제 스크롤할 높이: ${realScrollHeight}`);
        console.log(`스크롤 위치: ${scrollPercent}`);
        console.log(`게이지 퍼센트: ${textPercent}`);

        setBarWidth(scrollPercent + '%');
        setPercent(textPercent + '%');
    }

    useEffect(() => {
        window.addEventListener('scroll', getPercent);
        getPercent()
    })

    return (
        <Wrap>
          <Section ref={sectionRef} onScroll={getPercent}>
            <Title>스크롤 백분율 구하기</Title>
            <Text>전체 페이지의 높이와 스크롤 높이를 계산하여 게이지화 한다.</Text>
            <Content>
              <Progress>
                <Bar barWidth={barWidth}/>
                <Percent  >
                    {percent}
                </Percent>
              </Progress>
                가<br/>
                나<br/>
                다<br/>
                라<br/>
                마<br/>
                바<br/>
                사<br/>
                아<br/>
                자<br/>
                차<br/>
                카<br/>
                타<br/>
                파<br/>
                하
            </Content>
          </Section>
        </Wrap>
    )
}

export default Section1

