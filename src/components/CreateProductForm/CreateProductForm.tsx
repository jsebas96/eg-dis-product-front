import React, { FC } from "react";
import { Button, Container, Form } from "react-bootstrap";

const CreateProductForm: FC<{}> = () => {
  return (
    <Container>
      <h1 className="text-center mb-4">Nuevo Producto</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="Ingresar nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Fecha de Elaboración</Form.Label>
          <Form.Control type="date" placeholder="Ingresar Fecha" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Categoría</Form.Label>
          <Form.Select aria-label="Select Category">
            <option>Seleccione Categoría</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Ingresar Precio $" min={1} />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-8" controlId="formBasicStock">
          <Form.Label>Existencia</Form.Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Form.Control type="number" placeholder="Existencia" />
            <span className="mx-3 my-2" style={{fontWeight: "bold"}}>Kilogramos</span>
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProductForm;
