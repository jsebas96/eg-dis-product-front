import React, { FC, useEffect, useState } from "react";
import { Container, Image, TabContent } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CardDetails: FC<{}> = () => {
  const id = useParams();
  const [fetchData, updateFetchData] = useState<any>([]);
  const { name, image, category, price, stock } = fetchData;

  const api = `https://localhost:5000/api/product/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <>
      <Container className="d-flex justify-content-center">
        <div className="d-flex flex-column gap-3"></div>
        <h1 className="text-center">{name}</h1>
        <Image src={image} alt="" className="img-fluid" />
      </Container>
      <TabContent>
        {" "}
        <div>
          <span className="fw-bold">Category : </span>
          {category}
        </div>
        <div>
          <span className="fw-bold">Price : </span>
          {price}
        </div>
        <div>
          <span className="fw-bold">Stock : </span>
          {stock}
        </div>
      </TabContent>
    </>
  );
};

export default CardDetails;
