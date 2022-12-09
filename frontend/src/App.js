import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./components/homePage";
import SingleMeal from "./components/singleMeal";
import MealsSummary from "./components/mealsSummary"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
//import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons' githuba
//import image from "./bckgr2.jpg"; 
import image from "./3.jpg"; 

//backgroundImage: `url(${image})`
library.add(fas)

function App() {
  return (
    <div style={{  height: '140vh',
  backgroundRepeat:"no-repeat",backgroundSize:"cover",background:"black"
    }}>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/meals/:itemId" element={<SingleMeal />} />
        <Route exact path="/meals/summary" element={<MealsSummary />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
