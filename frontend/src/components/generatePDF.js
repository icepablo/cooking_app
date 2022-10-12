import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    fontFamily: "Roboto",
    //fontWeight: 700,
    
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const Br = () => "\n";
  
export const MyDocument = (props) => (  
  <Document> 
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>
        LISTA DAŃ
          {props.data.map((item) => (
          <div key={item.id}>
            <h2>
              danie: {item.name} <Br/> ilość porcji: {item.value}  <Br/>
            </h2>
            skladniki:<Br/>
              <View>
              <Text>{item.amount.map((val) => val.ingredient_name + " " + val.amount * item.value+ "g\n")}</Text> 
               </View>
          </div>
        ))}
        </Text>
      </View>
    </Page>
  </Document>
);  

export const ShoppingList = (props) => (  
  <Document>  
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>
        LISTA ZAKUPÓW: <Br/>
        {groupIngredients(props)}
        </Text>
      </View>
    </Page>
  </Document>
);

const generatePdfDocument = async (fileName, pdfDocumentComponent) => {
  const blob = await pdf(pdfDocumentComponent).toBlob();
  saveAs(blob, fileName);
};

export const DownloadButton = (props) => (
  <button
      type="button"
      onClick={() => {
          generatePdfDocument('Lista_składników.pdf', <MyDocument data={props.data}/>);
      }}
  >
      Pobierz liste składników
  </button>
);

export const DownloadButton2 = (props) => (
  <button
      type="button"
      onClick={() => {
          generatePdfDocument('Lista_zakupów.pdf', <ShoppingList data={props.data}/>);
      }}
  >
      Pobierz liste zakupów
  </button>
);

function groupIngredients  (props) {
  var ingredientsArray = []
  var amountArray = []
  props.data.map((item) => item.amount.map((val) =>  ingredientsArray.indexOf(val.ingredient_name) > -1 ?
  amountArray[ingredientsArray.indexOf(val.ingredient_name)] = amountArray[ingredientsArray.indexOf(val.ingredient_name)] + (val.amount * item.value)
  : (ingredientsArray.push(val.ingredient_name),amountArray.push(val.amount * item.value))
  
))

const groupArray = []
ingredientsArray.forEach((element, index) => {
  groupArray.push([ingredientsArray[index]+ ' ' +amountArray[index]+ 'g' + '\n'])
  
})

return <div>{groupArray}</div>
}

export default MyDocument;

