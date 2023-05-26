import styled from "@emotion/native";

export const DivContainer = styled.View`
  position: relative;

  margin-right: ${(P) => (P.widthIn ? 10 : 20)}px;

  // animation: ${(P) => (P.dop === 1 ? "slideSorUp" : "slideSorDo")} 0.4s
  //   ease-in-out;

  // @keyframes slideSorUp {
  //   from {
  //     transform: translateY(50%);
  //     opacity: 0;
  //   }
  //   to {
  //     transform: translateY(0);
  //     opacity: 1;
  //   }
  // }

  // @keyframes slideSorDo {
  //   from {
  //     transform: translateY(-50%);
  //     opacity: 0;
  //   }
  //   to {
  //     transform: translateY(0);
  //     opacity: 1;
  //   }
  // }
`;
