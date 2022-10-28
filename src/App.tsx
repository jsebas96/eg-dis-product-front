import React, { FC, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "./components/Pagination/Pagination";
import CardDetails from "./components/Cards/CardDetails";
import Cards from "./components/Cards/Cards";
import CreateProductForm from "./components/CreateProductForm/CreateProductForm";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/product" element={<CreateProductForm />} />
      </Routes>
    </Router>
  );
}

const Home: FC<{}> = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [fetchData, updateFetchData] = useState([]);
  const api = `https://localhost:5000/api/product/?page=${pageNumber}`;
  const info = { test: 0 };
  const results: any[] = [];

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Productos</h1>
      <Container>
        <Col className="col-lg-12">
          <Row>
            <Cards page="/home" results={results} />
          </Row>
        </Col>
      </Container>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
