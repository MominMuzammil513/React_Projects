
// import { BrowserRouter } from "react-router-dom";


// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Hearder/Header";

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <BrowserRouter>
//     <Header />
//   </BrowserRouter>
// )
import React from 'react'
import Header from './components/Hearder/Header'
// import Bootstrap from "./Components/boostrap/Booststrap"; //import my component
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <Header />
    </>
  )
}

export default App
