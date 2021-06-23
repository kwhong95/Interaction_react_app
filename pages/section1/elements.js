import styled, { css } from 'styled-components';

export const Wrap = styled.div``;

export const Section = styled.section`
  background: #ddd;
`;

export const Title = styled.h2`
  padding:100px 0 80px; 
  font-size:70px; 
  text-align: center;
`;

export const Text = styled.p`
  max-width:70%; 
  margin:0 auto; 
  font-size:30px; 
  text-align: center;
`;

export const Content = styled.article`
  font-size: 170px;
`;


export const Progress = styled.div`
  position: fixed;
  left: 50%;
  top: 500px;
  width: 70%;
  height: 100px;
  margin-left: -35%;
  border: 1px solid #222;
  text-align: center;
`;


export const Bar = styled.span`
  display: block;
  ${props => {
      const barWidth = props.barWidth;
      return css`
        width: ${barWidth};
      `
  }};
  height: 100%;
  background: #111;
`;

export const Percent = styled.p`
  font-size: 30%;
`;
