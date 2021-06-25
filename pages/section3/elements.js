import styled from "styled-components";

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

export const Figure = styled.figure``;

export const Text = styled.strong`
  display: block;
  margin-top: 30px;
  text-align: center;
`;
