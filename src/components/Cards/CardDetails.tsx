import { base_url } from "config/globals";
import React, { FC, useEffect, useState } from "react";
import { Container, Image, TabContent } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CardDetails: FC<{}> = () => {
  const { id } = useParams();
  const [fetchData, updateFetchData] = useState<any>([]);
  const { name, createdDate, category, price, stock } = fetchData;

  const api = `${base_url}/product/${id}/`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <>
      <Container className="d-flex justify-content-center">
        <div className="d-flex flex-column gap-3">
          <h1 className="text-center">{name}</h1>
          {/* <Image src={image} alt="" className="img-fluid" /> */}
          <div className="content">
            {" "}
            <div>
              <span className="fw-bold">Fecha de Elaboración : </span>
              {createdDate}
            </div>
            <div>
              <span className="fw-bold">Categoría : </span>
              {category}
            </div>
            <div>
              <span className="fw-bold">Precio : $ </span>
              {price}
            </div>
            <div>
              <span className="fw-bold">Existencia : </span>
              {stock}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CardDetails;
