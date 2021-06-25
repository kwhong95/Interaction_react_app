import styled, { css } from "styled-components";

export const Wrap = styled.div`
  overflow: hidden;
`;

export const Title = styled.h2`
  margin: 100px 0 80px;
  font-size: 70px;
  text-align: center;
`;

export const Button = styled.button`
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  margin-top: 50px;
  border: 1px solid #ddd;
  background: #ddd;
  font-size: 24px;
  transition: 5s;
  
  :hover {
    background: #222;
    color: #fff;
  }
`;

export const Section1 = styled.section``;

export const TransformEx = styled.article``;

export const List = styled.ul`
  
  :after {
    clear: both;
    display: block;
    content: '';
  }
`;

export const Item = styled.li`
  float: left;
  width: 25%;
  padding: 0 10px;
  box-sizing: border-box;
`;


export const Text = styled.strong`
  display: block;
  margin-top: 30px;
  text-align: center;
`;

export const RotateModel = styled.figure`
  transform: rotate(20deg);
  
  ${props => 
    props.active &&
    css `
      transform: rotate(0deg);
    `}
`;

export const ScaleModel = styled.figure`
  transform: scale(.7);

  ${props =>
      props.active &&
      css `
      transform: scale(1);
    `}
`;

export const SkewModel = styled.figure`
  transform: skew(30deg);

  ${props =>
      props.active &&
      css `
      transform: skew(0deg);
    `}
`;

export const TranslateModel = styled.figure`
  transform: translate(100px, -100px);

  ${props =>
      props.active &&
      css `
      transform: translate(0px, 0px);
    `}
`;

export const Section2 = styled.section``;

export const RotateModel2 = styled.figure`
  transform: rotate(20deg);
  transition:transform .5s;
  
  ${props =>
    props.active2 &&
    css `
      transform: rotate(0deg);
    `}
`;

export const ScaleModel2 = styled.figure`
  transform: scale(.7);
  transition:transform .5s;

  ${props =>
    props.active2 &&
    css `
      transform: scale(1);
    `}
`;

export const SkewModel2 = styled.figure`
  transform: skew(30deg);
  transition:transform .5s;

  ${props =>
    props.active2 &&
    css `
      transform: skew(0deg);
    `}
`;

export const TranslateModel2 = styled.figure`
  transform: translate(100px, -100px);
  transition:transform .5s;

  ${props =>
    props.active2 &&
    css `
      transform: translate(0px, 0px);
    `}
`;
