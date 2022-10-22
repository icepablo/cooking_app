import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function MainTab(props) {
  const Br = () => "\n";
  return (
    <div style={{ whiteSpace: "pre-line" }}>funkcjonalności: <Br /> -wyszukiwanie dań po nazwie <Br />
      - wyszukiwanie dań po składnikach<Br />
      - przeliczanie ilości potrzebnych składników na ilość porcji<Br />
      - zapisywanie w pdf dań z potrzebną liczbą składników<Br />
      - zapisywanie w pdf zgupowanych składników w formie listy zakupów
      
      <FontAwesomeIcon icon={solid('user-secret')} className='size:lg'/>
      <FontAwesomeIcon icon={solid("cart-arrow-down")} />
      <FontAwesomeIcon icon={solid("book")} shake style={{ fontSize: 25 }}/>

      
    </div>
  )
}

export default MainTab;

