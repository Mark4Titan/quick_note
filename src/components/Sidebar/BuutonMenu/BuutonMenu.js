import { TouchableOpacity } from "react-native-web";
import Icons from "../../ico/Icons";
import { ButtonMenuDop, SpanMenuDop } from "./BuutonMenu.styled";

const BuutonMenu = ({ dopMenu, setDopMenu }) => {
  const Menu = ["search", "clock", "summary"];

  const DopMenu = (clickVariant) => {
    let currentIndex;
    Menu.forEach((entry, index) => {
      if (entry === dopMenu.menu) {
        currentIndex = index;
      }
    });

    if (clickVariant === 1) {
      setDopMenu({
        menu: Menu[currentIndex + clickVariant] || Menu[0],
        menuMovement: clickVariant,
      });
    } else if (clickVariant === -1) {
      setDopMenu({
        menu: Menu[currentIndex + clickVariant] || Menu[Menu.length - 1],
        menuMovement: clickVariant,
      });
    }
  };

  return (
    <SpanMenuDop>
      <TouchableOpacity onPress={() => DopMenu(1)}>
        <ButtonMenuDop
          bord={`border-top-left-radius: 5px;  
        border-top-right-radius: 5px`}
        >
          <Icons Name="menu-up" C="StyDatabas" colorVar="currentcolor" />
        </ButtonMenuDop>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => DopMenu(-1)}>
        <ButtonMenuDop
          bord={`border-bottom-left-radius: 5px;  
          border-bottom-right-radius: 5px`}
        >
          <Icons Name="menu-down" C="StyDatabas" colorVar="currentcolor" />
        </ButtonMenuDop>
      </TouchableOpacity>
    </SpanMenuDop>
  );
};
export default BuutonMenu;
