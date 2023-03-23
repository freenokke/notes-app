import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 30;
  background-color: rgba(104, 104, 104, 0.286);
`;

export const Body = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  transform: translateY(-50%);
  width: 500px;
  min-height: 300px;
  padding: 40px 10px;
  z-index: 40;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0 0, 0, 0.25);
  transform: translate(-50%, -50%);
`;
