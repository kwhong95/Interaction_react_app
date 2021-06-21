import React from 'react'
import {
    Bar,
    Content,
    Progress,
    Section,
    Text,
    Title,
    Wrap
} from "./elements"
import $ from 'jquery';

const Section1 = () => {

    return (
        <Wrap>
          <Section>
            <Title>스크롤 백분율 구하기</Title>
            <Text>전체 페이지의 높이와 스크롤 높이를 계산하여 게이지화 한다.</Text>
            <Content>
              <Progress>
                <Bar />
                <Text>0%</Text>
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

