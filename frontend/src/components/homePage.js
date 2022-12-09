import React, { useEffect, useState } from "react";
import { getAll } from "../helpers/showAllPosts";
import MealsFilterTab from "./mealsFilterTab";
import IngredientsFilterTab from "./ingredientsFilterTab";
import MainTab from "./mainTab";
import { Container, Col, Row, Image, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Navbar from "./NavBar";

function HomePage(props) {
  const [items, setItems] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchFromDatabase() {
      const items = await getAll()
      setItems(items)
      setIsLoaded(true)
    }
    fetchFromDatabase();
  }, [])

  if (!isLoaded)
    return <div>Loading...</div>;

    const styles = {
     backgroundImage : ' backgroundImage: `url("https://via.placeholder.com/500")` '
    }
  

  return (
    <div className="homePage" >
      <Navbar/>
      <div>
        <Tabs defaultActiveKey="main" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="main" title="Cooking Helper">
            <MainTab />
          </Tab>
          <Tab eventKey="dania" title="Dania">
            <MealsFilterTab
              items={items}
            />
          </Tab>
          <Tab eventKey="składniki" title="Składniki">
            <IngredientsFilterTab
              items={items}
            />
          </Tab>
          <Tab eventKey="zdjęcia" title="Zdjęcia" >
            <Container>
              <Row>
                {items.map(item => (
                  <Col xs="4"><Image src={item.photo}></Image>
                    <Link to={`/meals/${item.id}`}>edit</Link>
                  </Col>
                ))}
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default HomePage;

