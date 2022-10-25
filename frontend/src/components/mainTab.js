import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/*
<FontAwesomeIcon icon={solid('user-secret')} className='size:lg'/>
      <FontAwesomeIcon icon={solid("cart-arrow-down")} />
      <FontAwesomeIcon icon={solid("book")} shake style={{ fontSize: 25 }}/>
*/

function MainTab(props) {
  const Br = () => "\n";
  return (
    <div style={{ whiteSpace: "pre-line" }}>funkcjonalności: <Br /> -wyszukiwanie dań po nazwie <Br />
      - wyszukiwanie dań po składnikach<Br />
      - przeliczanie ilości potrzebnych składników na ilość porcji<Br />
      - zapisywanie w pdf dań z potrzebną liczbą składników<Br />
      - zapisywanie w pdf zgupowanych składników w formie listy zakupów
      
      <div>
    <FontAwesomeIcon icon=" fa-check-square"  />
    Your <FontAwesomeIcon icon=" fa-coffee" /> is hot!

    Compliments of the <FontAwesomeIcon icon="fa-carrot" />!
  </div>
      

      
    </div>
  )
}

export default MainTab;

