import styled from "@emotion/native";

export const SidMain = styled.View`
  border: solid 1px #d6d6d6;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: grid;
  justify-content: center;
  grid-template: 1fr/1fr;
  width: 100%;
  height: 100%;
  background-color: #d6d6d6;
  align-items: center;
`;
export const UlSidebar = styled.View`
  margin: 0 10px 0 10px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
  grid-template: 1fr/ 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
`;
export const LiSidebar = styled.View`
  // animation: slideIco 0.4s ease-in-out;

  // @keyframes slideIco {
  //   from {
  //     transform: translateX(120%);
  //     opacity: 0;
  //   }
  //   to {
  //     transform: translateX(0);
  //     opacity: 1;
  //   }
  // }
`;
export const DivPanelTol = styled.View`
  display: grid;
  grid-gap: 10px;
  grid-template: 1fr/ 1fr 1fr;
`;
export const DivPanel = styled.View`
  display: grid;
  grid-gap: 10px;
  grid-template: 1fr/ 1fr;
  justify-items: end;
`;
export const DivPan = styled.View`
  display: grid;
  grid-gap: 10px;
  grid-template: 1fr/ 1fr;
  justify-items: start;
`;
export const DivMenuDop = styled.View`
  display: grid;
  grid-gap: 10px;
  grid-template: 1fr / ${(P) => !P.widthIn && "24px"} 190px;
  justify-items: start;
`;
