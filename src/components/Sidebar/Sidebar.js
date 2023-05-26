import { useEffect, useState } from "react";
import Icons from "../ico/Icons";
import SearchBox from "./SearchBox/SearchBox";
import {
  UlSidebar,
  SidMain,
  DivPanel,
  DivPanelTol,
  DivPan,
  LiSidebar,
  DivMenuDop,
} from "./Sidebar.styled";
import Container from "./Container";
import BuutonMenu from "./BuutonMenu/BuutonMenu";
import SummaryBox from "./SummaryBox/SummaryBox";
import ClockBox from "./Clock/Clock";

const Sidebar = ({
  isOpenItem,
  burger,
  setBurger,
  widthIn,
  setStateSearch,
  stateSearch,
  addNote,
  showModal,
  setEditItem,
  editItem,
}) => {
  const [dopMenu, setDopMenu] = useState({ menu: "search", menuMovement: 1 });

  useEffect(() => {
    widthIn && setDopMenu({ menu: "search", menuMovement: 1 });
  }, [widthIn]);

  const isEdit = () => {
    isOpenItem && setEditItem((privState) => !privState);
  };
  const isDel = () => {
    isOpenItem && showModal();
  };

  return (
    <SidMain>
      <DivPanelTol>
        <DivPan>
          <UlSidebar>
            <LiSidebar onClick={() => setBurger(!burger)}>
              {burger ? (
                <Icons Name="application-outline" C="StyBut" />
              ) : (
                <Icons Name="application-export" C="StyBut" />
              )}
            </LiSidebar>

            {(!widthIn || !burger) && (
              <>
                <LiSidebar onClick={() => addNote()}>
                  <Icons Name="beaker-plus-outline" C="StyBut" />
                </LiSidebar>
                <LiSidebar onClick={() => isDel()}>
                  <Icons Name="beaker-minus-outline" C="StyBut" isOpenItem={isOpenItem} />
                </LiSidebar>

                <LiSidebar onClick={() => isEdit()}>
                  <Icons
                    Name="application-edit-outline"
                    C="StyBut"
                    isOpenItem={isOpenItem}
                    winEdit={editItem && isOpenItem}
                  />
                </LiSidebar>
              </>
            )}
          </UlSidebar>
        </DivPan>
        {(!widthIn || burger) && (
          <DivPanel>
            <DivMenuDop widthIn={widthIn}>
              {!widthIn && (
                <BuutonMenu dopMenu={dopMenu} setDopMenu={setDopMenu} />
              )}

              {dopMenu.menu === "search" && (
                <Container widthIn={widthIn} dopMenu={dopMenu}>
                  <SearchBox
                    setStateSearch={setStateSearch}
                    stateSearch={stateSearch}
                  />
                </Container>
              )}
              {dopMenu.menu === "summary" && (
                <Container widthIn={widthIn} dopMenu={dopMenu}>
                  <SummaryBox />
                </Container>
              )}
              {dopMenu.menu === "clock" && (
                <Container widthIn={widthIn} dopMenu={dopMenu}>
                  <ClockBox />
                </Container>
              )}
            </DivMenuDop>
          </DivPanel>
        )}
      </DivPanelTol>
    </SidMain>
  );
};
export default Sidebar;
