import styled from "@emotion/native";
import moment from "moment";
import { useState } from "react";

const ClockBox = () => {
  const [Clock, setClock] = useState({
    HH: moment().format("HH"),
    mm: moment().format("mm"),
    ss: moment().format("ss"),
  });

  setInterval(() => {
    let HH = moment().format("HH");
    let mm = moment().format("mm");
    let ss = moment().format("ss");
    setClock({ HH, mm, ss });
  }, 1000);

  return (
    <DivClock>
      <DivTic>
        <TextTicHH>{Clock.HH}</TextTicHH>
        <TextTicmm>{Clock.mm}</TextTicmm>
        <TextTicss>{Clock.ss}</TextTicss>
      </DivTic>
    </DivClock>
  );
};
export default ClockBox;

const DivClock = styled.View`
  position: relative;
  display: grid;
  justify-content: center;
  grid-template: 1fr/1fr;

  width: 100%;
  height: 100%;
  background-color: #d6d6d6;
  align-items: center;
`;
const DivTic = styled.View`
  position: absolute;
  left: 0px;
  top: 10px;
  display: grid;
  font-size: 40px;
  justify-content: center;
  color: #fafaf8;

  background-color: #d6d6d6;
  align-items: center;
`;
const TextTicHH = styled.Text`
  position: absolute;
  left: -110px;
  font-size: 61px;
`;

const TextTicmm = styled.Text`
  position: absolute;
  left: 0px;
  font-size: 61px;
`;

const TextTicss = styled.Text`
  position: absolute;
  left: 70px;
  // top: -27px;
  font-size: 30px;
`;
