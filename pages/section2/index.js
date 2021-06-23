import React from 'react';
import {Figure, Item, List, SC_Infinity, Section, Title, Wrap} from "./elements";

const Section2 = () => {
  return (
      <Wrap>
          <Section>
              <Title>INFINITE SCROLL</Title>
              <SC_Infinity>
                  <List>
                      <Item>
                          <Figure>
                              <img src='./images/1.jpg' alt='img'/>
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <img src='./images/2.jpg' alt='img' />
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <img src='./images/3.jpg' alt='img' />
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <img src='./images/1.jpg' alt='img' />
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <img src='./images/2.jpg' alt='img' />
                          </Figure>
                      </Item>
                      <Item>
                          <Figure>
                              <img src='./images/3.jpg' alt='img' />
                          </Figure>
                      </Item>
                  </List>
              </SC_Infinity>
          </Section>
      </Wrap>
  );
}

export default Section2;