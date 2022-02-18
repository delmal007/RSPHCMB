import React from "react";
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar2 from "./components/Navbar2";
import Blog  from "./pages/Blog";
import Home from "./pages/Home"

const App = () => {
  return (

     <div>
      <Blog/>
          {/* <Navbar2/> */}
      </div>
    // <Router>
    //   <Navbar2/>
    //   <Routes>
    //     <Route path="/" component={Home} exact>
    //       <Home/>
    //     </Route>
    //     <Route path="/blog" component={Blog} exact>
    //       <Blog/>
    //     </Route>
    //   </Routes>
    // </Router>
  
  );
}

export default App;
