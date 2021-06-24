import React, { useEffect, useState, useRef } from 'react';
import {
    Footer,
    Section,
    Text,
    Title,
    Wrap,
} from "./elements";
import { ListItem } from "./ListItem";
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

    let listCount = 0;
    let breakList = 10;

    const listCall = () => { // 무한 스크롤을 할지 결정하는 함수
        let sectionHeight = sectionRef.current.scrollHeight;
        let screenHeight = window.innerHeight;
        let footerHeight = footerRef.current.scrollHeight;

        setWinTop(window.scrollY);
        setOnTop(sectionHeight - screenHeight - footerHeight);

        let list;
        listCount ++;

        if( listCount > breakList) {
            list = null;
        }

        if(winTop >= onTop) {
            if(list !== null) {
                console.log('Image List Call');
                ListItem.push(
                    { image: Img1, alt: 'addImg' },
                    { image: Img2, alt: 'addImg' },
                    { image: Img3, alt: 'addImg' },
                    { image: Img4, alt: 'addImg' },
                )
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
              <InfiniteSection listRef={listRef} ListItem={ListItem} />
              <Footer ref={footerRef}>
                  <Text>Footer</Text>
              </Footer>
          </Section>
      </Wrap>
  );
}

export default Section2;
