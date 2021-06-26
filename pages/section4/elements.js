import styled, { css } from "styled-components";

export const Wrap = styled.div`
  overflow: hidden;
  min-height: 100%;
`;

export const Title = styled.h2`
  margin:100px 0 80px; 
  font-size:70px; 
  text-align: center;
`;

export const Figure = styled.figure`
  animation-name: move_model;
  // 한번 재생 시 걸리는 시간
  animation-duration: 6s;
  // 지연 시간 (몇초 후 시작?)
  animation-delay: 0s;
  // 애니메이션 재생 방향 설정 alternate: 순방향, reverse: 역방향
  animation-direction: alternate;
  // 애니메이션 재생 횟수 infinite: 무한 재생
  animation-iteration-count: infinite;
  // 애니메이션 재생 여부 running: 재생(기본값), paused: 정지
  animation-play-state: paused;
  // 애니메이션 가속도 설정 linear, ease, ease-in, ease-out, custom etc..
  animation-timing-function: linear;
  /* forwards:애니메이션이 끝날 때 요소의 마지막 키 프레임의 스타일 값을 유지, 
     backwards:첫 번째 키 프레임에 의해 설정된 스타일 값을 얻음, 
     both:애니메이션이 시작되기 전에 첫 번째 키 프레임에서 설정 한 스타일 값을 가져 오도록하고 애니메이션이 끝날 때 마지막 키 프레임의 스타일 값을 유지 */
  animation-fill-mode: forwards;
  
  @keyframes move_model {
    0%{
        transform:translate(-200px,0px);
    }
    50% {
        transform:translate(200px,0px);
    }
    100%{
        transform:translate(600px, 200px);
    }
}

  
  ${props =>
    props.active &&
    css `
      animation-play-state: running;
    `}
`;