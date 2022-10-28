import React, { FC, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "./components/Pagination/Pagination";
import CardDetails from "./components/Cards/CardDetails";
import Cards from "./components/Cards/Cards";
import CreateProductForm from "./components/CreateProductForm/CreateProductForm";
import { base_url } from "./config/globals";
import { Product } from "./types/product/product.types";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/product" element={<CreateProductForm />} />
      </Routes>
    </Router>
  );
}

const Home: FC<{}> = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [fetchData, updateFetchData] = useState<any>([]);
  const results: Product[] = fetchData.results;
  const info: {
    count: number;
    next: string | undefined;
    previous: string | undefined;
  } = fetchData.info;
  const api = `${base_url}/product/?page=${pageNumber}`;

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
            <Cards page="/" results={results} />
          </Row>
        </Col>
      </Container>
      {info && info.count > 1 && (
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      )}
    </div>
  );
};

export default App;
