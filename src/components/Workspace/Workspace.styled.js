import styled from "@emotion/native";

export const DivWork = styled.View`
  width: 100%;
  height: 100%;
  display: grid;
  background-color: #fafaf8;
  border: solid 1px #d6d6d6;
  border-bottom-right-radius: 5px;
  margin-top: 10px;
`;
export const DivContent = styled.View`
  padding: 20px;
  display: grid;
  grid-template: 30px 35px 1fr/1fr;
  grid-gap: 10px;
`;
export const H2Wrap = styled.View`
  display: grid;
  grid-template: 1fr/50px 50px 1fr;
  align-items: center;
  justify-content: center;
  color: #00000066;
  font-size: 17px;
  letter-spacing: 1px;
  font-family: inherit;
  grid-gap: 5px;
  justify-items: center;
  justify-items: end;
`;
export const H2Data = styled.Text`
  grid-column: 3/4;
  display: grid;
  justify-items: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: start;
  color: #00000066;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 1px;
`;
export const InputTitle = styled.TextInput`
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: start;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: inherit;
  //  outline: none;
  border-radius: 5px;
  padding: 10px;

  ${(P) => (P.value.length > 0 ? "border: none" : "border: solid 1px #d6d6d6")};
  background-color: transparent;
  `;

export const TContent = styled.TextInput`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: start;
  font-size: 17px;
  letter-spacing: 1px;
  font-family: inherit;
  resize: none;
  background-color: transparent;
  max-width: 100%;
  max-height: 100%;
  //  outline: none;
  border-radius: 5px;
  padding: 10px;
  ${(P) => (P.value.length > 0 ? "border: none" : "border: solid 1px #d6d6d6")};
  `;
