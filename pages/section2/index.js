import React, { useEffect, useState, useRef } from 'react';
import {
    Figure,
    Footer,
    Item,
    List,
    SC_Infinity,
    Section,
    Text,
    Title,
    Wrap
} from "./elements";
import Image from 'next/image';

import Img1 from './images/1.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
import Img4 from './images/4.jpg';

const Section2 = () => {
    /* 스크롤 시 값이 변해야하는 변수  */
    const sectionRef = useRef({});
    const footerRef = useRef({});
    const [winTop, setWinTop] = useState(0);
    const [onTop, setOnTop] = useState();

    const getList = () => {};

    const listCall = () => { // 무한 스크롤을 할지 결정하는 함수
        let sectionHeight = sectionRef.current.scrollHeight;
        let screenHeight = window.innerHeight;
        let footerHeight = footerRef.current.scrollHeight;

        setWinTop(window.scrollY);
        setOnTop(sectionHeight - screenHeight - footerHeight);

        if(winTop >= onTop) {
            const data = getList();

            if(data !== null) {
                // 데이터를 추가하는 로직
            } else {
                return false;
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listCall);
        listCall();
    })

    return (
      <Wrap>
          <Section onScroll={listCall} ref={sectionRef}>
              <Title>INFINITE SCROLL</Title>
              <SC_Infinity>
                  <List>
                      <Item>
                          <Figure>
                              <Image src={Img1} alt='img'/>
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <Image src={Img2} alt='img' />
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <Image src={Img3} alt='img' />
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <Image src={Img4} alt='img' />
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <Image src={Img1} alt='img' />
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <Image src={Img2} alt='img' />
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <Image src={Img3} alt='img' />
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <Image src={Img4} alt='img' />
                          </Figure>
                      </Item>
                  </List>
              </SC_Infinity>
              <Footer ref={footerRef}>
                  <Text>Footer</Text>
              </Footer>
          </Section>
      </Wrap>
  );
}

export default Section2;