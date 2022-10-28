import React, { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.scss";

interface IProps {
  info: any;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: FC<IProps> = ({
  info,
  pageNumber,
  setPageNumber,
}: IProps) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .next,
          .prev {
            display: none;
          }
          .pagination {
            font-size: 14px;
          }
        }
      `}</style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel={"Next"}
        previousLabel={"Prev"}
        nextClassName={`btn next ${styles.next}`}
        previousClassName={`btn prev ${styles.prev}`}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName={styles.active}
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        pageCount={info?.count}
      />
    </>
  );
};

export default Pagination;
