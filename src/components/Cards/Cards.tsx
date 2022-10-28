import React, { FC } from "react";
import { Image, TabContent } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface IProps {
  results: any[];
  page: string;
}

const Cards: FC<IProps> = ({ results, page }: IProps) => {
  let display;

  if (results) {
    display = results.map((result) => {
      const { id, name, createdDate, category, price, stock } = result;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center`}
          >
            {/* <Image src={image} alt="" className={`${styles.img} img-fluid`} /> */}
            <TabContent style={{ padding: "10px" }}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-4 fw-bold mb-4">{createdDate}</div>
              <div className="fs-4 fw-bold mb-4">{category}</div>
              <div className="fs-4 fw-bold mb-4">{price}</div>
              <div className="fs-4 fw-bold mb-4">{stock}</div>
            </TabContent>
          </div>
        </Link>
      );
    });
  } else {
    display = "No hay productos en stock";
  }

  return <>{display}</>;
};

export default Cards;
