import styled from "@emotion/native";

export const DivMain = styled.View`
  display: grid;
  grid-template: 1fr / 1fr minmax(300px, 1440px) 1fr;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 40px;

  `;
  export const DivContent = styled.View`
  grid-column: 2/3;
  display: grid;
  grid-template: 60px minmax(100px, 1fr) / 1fr;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;
export const DivWork = styled.View`
  display: grid;
  grid-template: minmax(400px, 1fr) / ${(P) =>
      P.burger ? (!P.widthIn ? "0.5fr 1fr" : "1fr") : "1fr"};
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;
