import React, { useState, useEffect } from "react";
import { DownloadButton, DownloadButton2 } from './generatePDF'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import Navbar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MealsSummary(props) {

  const [summary, setSummary] = useState(JSON.parse(localStorage.getItem("itemsArray")))
  const [showPdf, setShowPdf] = useState(true)

  const handleDelete = (id) => {
    var data = JSON.parse(localStorage.getItem("itemsArray"));
    const index = data.findIndex((x) => x.id === id);
    delete data[index];
    data = data.filter(Boolean);
    setSummary(data)
    localStorage.setItem("itemsArray", JSON.stringify(data));
    if (data.length === 0) {
      handleDeleteAll()
    }
  }

  const handleDeleteAll = () => {
    localStorage.clear();
    setSummary(null)
    showHidePdf()
  }

  const showHidePdf = () => {
    setShowPdf(!showPdf)
  }

  const handleChangeValue = (id, operation) => {
    var data = JSON.parse(localStorage.getItem("itemsArray"));
    const index = data.findIndex((x) => x.id === id);
    var value = parseInt(data[index].value);
    (operation === 'add') ? data[index].value = value + 1 : data[index].value = value - 1;
    data = data.filter(Boolean);
    setSummary(data)
    localStorage.setItem("itemsArray", JSON.stringify(data));
  }

  const styles = {
    display: 'inline',
    width: '30%',
    height: 250,
    float: 'left',
    padding: 5,
    border: '0.5px solid black',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 50,
    clear: "left"
  }

  const Br = () => "\n";

  if (summary === null) return <div>Brak przepisów</div>;
  return (
    <div>
      <Navbar />
      {summary.map((item) => (
        <div style={styles} key={item.id}>
          <h2>
            <Link to={`/meals/${item.id}`}>{item.name}</Link>
          </h2>
          skladniki na porcje: {item.amount.map((val) => <div> <FontAwesomeIcon icon=" fa-carrot" /> {val.ingredient_name + ' ' + val.amount + "g" + "\n"} </div>)}
          <h6>
            <button onClick={() => handleDelete(item.id)}>
              <FontAwesomeIcon icon={"fa-delete-left"} />
              delete item
            </button>
            <button onClick={() => handleChangeValue(item.id, 'substract')}>-</button>
            ilość porcji: {item.value}
            <button onClick={() => handleChangeValue(item.id, 'add')}>+</button>
          </h6>
        </div>
      ))}
      {showPdf ?
        <div>
          <button onClick={() => handleDeleteAll()}>
            <FontAwesomeIcon icon={"fa-trash-can"} />
            delete all</button>
        </div>
        : <div>Brak przepisów</div>}
      <DownloadButton data={summary} />
      <DownloadButton2 data={summary} />
    </div>
  );
}

export default MealsSummary;

