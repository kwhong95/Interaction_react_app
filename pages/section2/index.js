import React, { useEffect } from 'react';
import {
    Figure,
    Item,
    List,
    SC_Infinity,
    Section,
    Title,
    Wrap
} from "./elements";
import Image from 'next/image';

import Img1 from './images/1.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
import Img4 from './images/4.jpg';

const Section2 = () => {

    const getList = () => {};

    const listCall = () => {};

    useEffect(() => {
        window.addEventListener('scroll', listCall);
        listCall();
    })

    return (
      <Wrap>
          <Section onScroll={listCall}>
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
          </Section>
      </Wrap>
  );
}

export default Section2;