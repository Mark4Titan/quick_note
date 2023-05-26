import { DivContainer } from "./Container.styled";

const Container = ({ widthIn, dopMenu, children }) => {
  return (
    <DivContainer widthIn={widthIn} dop={dopMenu.menuMovement}>
      {children}
    </DivContainer>
  );
};
export default Container;
