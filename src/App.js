
import './App.css';
import { db } from './firebase/config';
import {  getFirestore } from "firebase/firestore";
function App() {
  return (
    <div className="App">
     <button onClick={() => {
        getFirestore(db).collection("prodects").get().then((querySnapshot) => {
          querySnapshot.docs.map((doc) => {
            console.log(doc.data());
          })
        })
      }}> click</button>
    </div>
  );
}

export default App;
