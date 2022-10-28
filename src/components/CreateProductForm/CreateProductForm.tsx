import { base_url } from "config/globals";
import moment from "moment";
import React, { FC, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const CreateProductForm: FC<{}> = () => {
  const [name, setName] = useState<string>("");
  const [createdDate, setCreatedDate] = useState<string>(
    moment(Date()).format("YYYY-MM-DD")
  );
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(1);
  const [stock, setStock] = useState<number>(1);

  const api = `${base_url}/product/`;

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleCreatedDateChange = (e: any) => {
    setCreatedDate(e.target.value);
  };

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e: any) => {
    setPrice(e.target.value);
  };

  const handleStockChange = (e: any) => {
    setStock(e.target.value);
  };

  const createProduct = () => {
    const data = {
      name: name,
      createdDate: createdDate,
      category: category,
      price: price,
      stock: stock,
    };
    (async function () {
      const status = await fetch(api, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.status)
      console.log(status);
    })();
  };

  return (
    <Container>
      <h1 className="text-center mb-4">Nuevo Producto</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            value={name}
            type="text"
            placeholder="Ingresar nombre"
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Fecha de Elaboración</Form.Label>
          <Form.Control
            value={createdDate}
            type="date"
            placeholder="Ingresar Fecha"
            onChange={handleCreatedDateChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            aria-label="Select Category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option>Seleccione Categoría</option>
            <option value="vegetable">Vegetales</option>
            <option value="fruit">Frutas</option>
            <option value="flower">Flores</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            value={price}
            type="number"
            placeholder="Ingresar Precio $"
            min={1}
            onChange={handlePriceChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-8" controlId="formBasicStock">
          <Form.Label>Existencia</Form.Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Form.Control
              value={stock}
              type="number"
              placeholder="Existencia"
              onChange={handleStockChange}
            />
            <span className="mx-3 my-2" style={{ fontWeight: "bold" }}>
              Unidades
            </span>
          </div>
        </Form.Group>

        <Button variant="primary" type="button" onClick={createProduct}>
          Registrar
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProductForm;
