import React, { useState, useEffect } from "react";
import { DownloadButton, DownloadButton2 } from './generatePDF'

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

  if (summary === null) return <div>Brak przepisów</div>;
  return (
    <div>
      {summary.map((item) => (
        <div key={item.id}>
          <h2>
            danie: {item.name} ilość porcji: {item.value}
          </h2>
          skladniki: {item.amount.map((val) => val.ingredient_name + val.amount + "g" + "\n")}
          <button onClick={() => handleDelete(item.id)}>
            delete item
          </button>
        </div>
      ))}
      {showPdf ?
        <div>
          <button onClick={() => handleDeleteAll()}>delete all</button>
        </div>
        : <div>Brak przepisów</div>}
      <DownloadButton data={summary} />
      <DownloadButton2 data={summary} />
    </div>
  );
}

export default MealsSummary;



/*

              */