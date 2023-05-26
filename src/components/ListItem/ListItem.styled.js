import styled from "@emotion/native";

export const DivList = styled.View`
  width: 100%;
  height: 100%;
  border: solid 1px #d6d6d6;
  border-bottom-left-radius: 5px;
  overflow: auto;
  margin-top: 10px;
  background-color: ${(P) => (P.SColor ? "#fafaf8" : "#d6d6d696")};

  // ::-webkit-scrollbar {
  //   width: 10px;
  // }
  // ::-webkit-scrollbar-track {
  //   background: #f1f1f1;
  //   border-radius: 10px;
  // }
  // ::-webkit-scrollbar-thumb {
  //   border-radius: 10px;
  //   background: #888;
  // }
  // ::-webkit-scrollbar-thumb:hover {
  //   background: #555;
  // }
`;
export const UlListContent = styled.View`
  display: grid;
  grid-template-rows: repeat(auto-fit, 82px);

  grid-gap: 5px;
  padding: 5px;
`;
export const LiItems = styled.View`
  cursor: pointer;
  border: solid 1px ${(P) => (P.SColor ? "#d6d6d696" : "#fafaf8")};
  ${(P) => P.SColor && "background-color: #fafaf8"};
  height: 50px;
  padding: 15px;
  display: grid;
  grid-template: auto / 1fr;
  grid-gap: 5px;
  align-items: center;
  &:hover {
    //  box-shadow: 0px 3px 5px 1px #4f4f4f5e;
    background-color: #ffffff;
    // background-color: #fafaf8;
  }
  &:active {
    //  box-shadow: 0px 3px 5px 1px #ded9d9;
  }

  // animation: slideOpen 0.4s ease-in-out;

  // @keyframes slideOpen {
  //   from {
  //     transform: translateY(120%);
  //     opacity: 0;
  //   }
  //   to {
  //     transform: translateY(0);
  //     opacity: 1;
  //   }
  // }
`;
export const DivBasis = styled.View`
  display: grid;
  grid-template: 1fr/1fr minmax(auto, 0.29fr);
  grid-gap: 5px;
  align-items: center;
`;
export const BoxIco = styled.View`
  display: grid;
  grid-template: auto auto/ 1fr 0.3fr;
  grid-gap: 5px;
  justify-items: start;
  align-items: center;
`;
export const DivTitle = styled.Text`
  color: dimgrey;
  grid-column: 1/2;
  display: grid;
`;
