import styled, { css } from 'styled-components';

export const Wrap = styled.div``

export const Section = styled.section`
  padding:100px 0 0 0;
`;

export const Content = styled.article`
  position: relative; 
  width:70%; 
  margin:0 auto;
`;

export const Title = styled.h2`
  position:relative; 
  z-index:20; 
  left:40px; 
  font-size:40px; 
  line-height:1.2; 
  opacity:1;
`;

export const Text = styled.p`
  position:relative; 
  z-index:20; 
  left:80px; 
  font-size:20px; 
  opacity:1;
`;

export const ImgWrap = styled.figure`
  margin-top: 20px;
  position: relative; 
  transform:translateY(50px);  
  transition:4s .2s cubic-bezier(0.3, 1.01, 0.51, 1.04);
  
  :after {
    position:absolute;
    left:0;
    top:0;
    z-index:10;
    width:100%;
    height:100%;
    content:"";
    background-color: #fff;
    transition:2s .3s cubic-bezier(0.3, 1.01, 0.51, 1.04);
  }
  
  Image { width:100%; }
  
  ${props => 
    props.active && 
    css`
      transform:translateY(-10px);
      
      :after {
        width:0px;
      }
    `
  }
`;