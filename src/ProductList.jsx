import React, { useState } from "react";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import "./App";
// Then, use it in a component.
export default function ProductList() {
  const tableData = [
    {
      productImg: "https://picsum.photos/200",
      productName: "Abstract 3D",
      productDesc: "Lorem inspum dolor sit amet, consectetur adipiscing elit.",
      stock: "32",
      price: "45.99",
      totalsales: "20",
    },
    {
      productImg: "https://picsum.photos/300",
      productName: "Sarphens illustration",
      productDesc: "Lorem inspum dolor sit amet, consectetur adipiscing elit.",
      stock: "32",
      price: "45.99",
      totalsales: "20",
    },
    {
      productImg: "https://picsum.photos/400",
      productName: "product3",
      productDesc: "Lorem inspum dolor sit amet, consectetur adipiscing elit.",
      stock: "41",
      price: "47.52",
      totalsales: "25",
    },
    {
      productImg: "https://picsum.photos/100",
      productName: "product4",
      productDesc: "Lorem inspum dolor sit amet, consectetur adipiscing elit.",
      stock: "42",
      price: "48.58",
      totalsales: "28",
    },
  ];

  const [filter, setFilter] = useState(tableData);

  const requestSearch = (searchedVal) => {
    const filteredRows = filter.filter((row) => {
      return row.productName
        .toString()
        .toLowerCase()
        .includes(searchedVal.toString().toLowerCase());
    });
    if (searchedVal.length < 1) {
      setFilter(tableData);
    } else {
      setFilter(filteredRows);
    }
  };
  return (
    <>
      <div className="card1">
        <table className="table1">
          <thead>
            <tr>
              <th className="th1">
                <h2>Product Sell </h2>
              </th>
              <th className="th2">
                <div className="header-right">
                  <input
                    type="search"
                    placeholder="Seacrh"
                    onChange={(e) => requestSearch(e.target.value)}
                  />
                  <span className="searchicon">
                
                    <BsSearch />
                  </span>
                </div>
              </th>
              <th className="th3">
                <div>
                  <span>
                    Last 30 days <BsChevronDown className="DownArrow_p" />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <thead className="thead2">
            <tr>
              <th className="th1">Product Name</th>
              <th className="th2">Stock</th>
              <th className="th3">Price</th>
              <th className="th4">Total sales</th>
            </tr>
          </thead>
          <tbody>
            {filter.map((items, index) => {
              return (
                <tr key={index}>
                  <td className="td1">
                    <div className="prodctlist1">
                      <div>
                        <img
                          className="prodct_img"
                          src={items.productImg}
                          alt=""
                        />
                      </div>
                      <div className="product_name">
                        <b>{items.productName}</b>
                        <br></br>
                        <p>{items.productDesc}</p>
                      </div>
                    </div>
                  </td>
                  <td>{items.stock} in stock</td>
                  <td className="td2">
                    <b>$ {items.price}</b>
                  </td>
                  <td className="td3">{items.totalsales}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
