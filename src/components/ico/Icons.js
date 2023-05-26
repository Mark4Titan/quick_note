import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styled from "@emotion/native";

const Icons = ({ ico, C, Name="ambulance", Size=40, Color="black", ...props }) => {
  const Component = transforms[C];
  return (
    <Component {...props}>
      <Icon name={Name} size={Size} color={Color} />
    </Component>
  );
};

export default Icons;

//

const StyBefore = `  
  
  &::before{
    // // top: -25px;    
    // position: absolute;
    // border-radius: 5px;
    // background-color: #fafaf8;
    // font-size: 12px;
    // border-color: #d6d6d6;
    // content: " ";
    // ////  box-shadow: 0px 3px 8px 0px #4f4f4f5e;
    // align-items: center;
    // justify-items: center;
    // justify-content: center;
    // opacity: 0;
    // display: grid;
    // white-space: nowrap;
    // transition: all 0.1s ease-out;
    // color: black;
   
  }
  &:hover::before{
    // opacity: 1;
    // width: auto;
    // padding: 5px;
    // height: auto;
    // content: attr(data-text);
   
  }
  
`;

export const StyBut = styled.View`
  position: relative;
  width: 48px;
  height: 26px;
  border: solid 1px #d6d6d6;
  background-color: #ffffff8c;
  border-radius: 5px;
  ////  box-shadow: 0px 3px 5px 1px #4f4f4f5e;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & :last-child {
    width: 60px;
    height: 60px;
    ${(P) => P.winEdit !== undefined && P.winEdit && "color: darkgreen;"}
  }
  &:hover {
    ${(P) =>
      P.isOpenItem !== undefined && !P.isOpenItem
        ? "background-color: #d6d6d6"
        : "background-color: #ffffffeb"};
  }
  &:active {
    ${(P) =>
      P.isOpenItem !== undefined && !P.isOpenItem
        ? "background-color: #d6d6d6"
        : "background-color: #ffffff8c"};
  }
  // color: darkgray;
  ${(P) =>
    P.isOpenItem !== undefined &&
    !P.isOpenItem &&
    "background-color: #d6d6d6; color: darkgray"};
  ${StyBefore}
`;

export const StyIco = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 5px;
  left: 5px;
  & :last-child {
    width: 20px;
    height: 20px;
  }
  ${StyBefore}
`;

export const ButDatabas = styled.View`
  position: relative;
  width: 48px;
  height: 26px;
  border: solid 1px #d6d6d6;
  background-color: #f3f3f3;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & :last-child {
    width: 20px;
    height: 20px;
  }
  & :last-child {
    ${(P) =>
      P.activConect === undefined
        ? ""
        : P.activConect
        ? P.varColor
          ? "color:  darkgreen"
          : "color: currentcolor"
        : "color: brown"}
  }
  &:hover {
    background-color: #fff;
    ////  box-shadow: 0px 3px 5px 0px #4f4f4f5e;
  }
  &:active {
    background-color: #f3f3f3;
    //  box-shadow: none;
  }

  ${StyBefore}
`;
export const StyDatabas = styled.View`
  display: grid;
  position: relative;
  cursor: pointer;
  justify-content: center;

  & :last-child {
    width: 20px;
    height: 20px;
    color: ${(P) => (P.colorVar !== undefined ? P.colorVar : "darkgreen")};
  }
  &:hover :last-child {
    color: ${(P) => P.colorVar !== undefined && "darkgreen"};
  }

  ${StyBefore}
  &:hover::before {
    // top: -29px;
    left: -22px;
  }
`;

const transforms = {
  StyBut: StyBut,
  StyIco: StyIco,
  StyDatabas: StyDatabas,
  ButDatabas: ButDatabas,
};
