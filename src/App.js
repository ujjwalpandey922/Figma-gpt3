import "./App.css";

import {
  Footer,
  Blog,
  Possibilities,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./component";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibilities />
      <Features />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
