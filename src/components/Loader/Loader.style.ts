import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
`