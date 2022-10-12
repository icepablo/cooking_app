import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./components/homePage";
import SingleMeal from "./components/singleMeal";
import MealsSummary from "./components/mealsSummary"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/meals/:itemId" element={<SingleMeal />} />
        <Route exact path="/meals/summary" element={<MealsSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
