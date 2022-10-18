import React, { useEffect, useState } from "react";
import { getAll } from "../helpers/showAllPosts";
import MealsFilterTab from "./mealsFilterTab";
import IngredientsFilterTab from "./ingredientsFilterTab";
import MainTab from "./mainTab";
import { Container, Col, Row, Image, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom'

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

  return (
    <div className="App">
      <div>
        <Tabs defaultActiveKey="main" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="main" title="Cooking Helper">
            <MainTab/>
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








/*
<Col xs="4"><Image src={item.photo}></Image>
 <Link to={`/meals/${item.id}`}>edit</Link>
 </Col>

--------
const apiUrl = 'http://127.0.0.1:8000/'

export const consumeApi = async() =>{
  return fetch(apiUrl, {})
    .then(res=>res.json())
    .then(data =>{
      return data;
      
    },console.log());
  }

class ShowImg extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }
    this.getApi = this.getApi.bind(this);
    }
  
    componentDidMount(){  
      this.getApi();
      console.log("Mounting")
  
    }

  async getApi() {
    let data = await consumeApi();
    this.setState({items:data, isLoaded:true});
  }

  render() {
      
    const { isLoaded, items } = this.state;
    
    if (!isLoaded)
        return <div>Loading...</div>;

    return (
      
        <div className="App">
            
            <ul>
              
                {items.map(item => (
                    <li key={item.id}>
                                                
      
  
                    </li>
                ))}
            </ul>
                  </div>

    )

  }
}

export default ShowImg;

*/
