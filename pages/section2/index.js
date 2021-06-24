import React, { useEffect, useState, useRef } from 'react';
import {
    Footer,
    Section,
    Text,
    Title,
    Wrap,
    Item,
    Figure,
} from "./elements";

import Image from 'next/image';

import Img1 from './images/1.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
import Img4 from './images/4.jpg';

import InfiniteSection from "./infiniteSection";

const Section2 = () => {
    /* 스크롤 시 값이 변해야하는 변수  */
    const sectionRef = useRef({});
    const footerRef = useRef({});
    const listRef = useRef({});
    const [winTop, setWinTop] = useState(0);
    const [onTop, setOnTop] = useState();

    let target = listRef.current.innerHTML;
    let breakList = 10;
    let listCount = 0;

    const getList = () => {
        let list;

        listCount ++;

        if(listCount > breakList) {
            list = null;
        } else {
            list = '<Item><Figure><Image src={Img1} alt="img" /></Figure></Item>';
            list += '<Item><Figure><Image src={Img2} alt="img"/></Figure></Item>';
            list += '<Item><Figure><Image src={Img3} alt="img"/></Figure></Item>';
            list += '<Item><Figure><Image src={Img4} alt="img"/></Figure></Item>';
        }

        return list;
    };

    const listCall = () => { // 무한 스크롤을 할지 결정하는 함수
        let sectionHeight = sectionRef.current.scrollHeight;
        let screenHeight = window.innerHeight;
        let footerHeight = footerRef.current.scrollHeight;

        setWinTop(window.scrollY);
        setOnTop(sectionHeight - screenHeight - footerHeight);

        if(winTop >= onTop) {
            const data = getList();

            if(data !== null) {
                console.log(target);
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
              <InfiniteSection listRef={listRef} />
              <Footer ref={footerRef}>
                  <Text>Footer</Text>
              </Footer>
          </Section>
      </Wrap>
  );
}

export default Section2;