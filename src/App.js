import "./App.scss";
import { Provider } from 'react-redux';
import { store } from './features/store';
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imbdID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
