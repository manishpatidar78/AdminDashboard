import React from "react";
import {BsChevronDown} from "react-icons/bs";

import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";
import ProductList from "./ProductList";
import PieChart_round from "./PieChart_round";

function Home() {
  const data = [
    {
      name: "Jan",
      uv: 2800,
      pv: 1398,
      amt: 2210,
    },

    {
      name: "Feb",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Mar",
      uv: 4000,
      pv: 2400,
      amt: 2200,
    },
    {
      name: "Apr",
      uv: 3100,
      pv: 2200,
      amt: 2000,
    },
    {
      name: "May",
      uv: 3600,
      pv: 2300,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 1800,
      pv: 7800,
      amt: 2010,
    },
    {
      name: "Jul",
      uv: 3600,
      pv: 2300,
      amt: 2181,
    },
    {
      name: "Aug",
      uv: 3900,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3860,
      pv: 4100,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3190,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 2940,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3220,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data1 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#000", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <div className="cercle1">
              <img className="doller_img" src="./Images/dollar.svg" alt="" />
            </div>
            <div className="card_details">
              <p className="p1">Earning</p>
              <h3 className="Price">                
                $198k
              </h3>             
              <span className="ArrowUp"> <b>&#8593; </b>37.8%</span>
                <span className="span1"> this month</span>            
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="cercle2">
              <img className="doller_img" src="./Images/receipt.svg" alt="" />
            </div>
            <div className="card_details">
              <p className="p1">Order</p>
              <h3 className="Price">$2.4k
              </h3>
              <span className="ArrowDown"> <b>&#8595; </b>2% </span>
                <span className="span1"> this month</span>            
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="cercle3">
              <img className="doller_img" src="./Images/balance.svg" alt="" />
            </div>
            <div className="card_details">
              <p className="p1">Balance</p>
              <h3 className="Price">$2.4k
              </h3>
              <span className="ArrowDown"> <b>&#8595; </b>2% </span>
                <span className="span1"> this month</span>            
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="cercle4">
              <img className="doller_img" src="./Images/totalsales.svg" alt="" />
            </div>
            <div className="card_details">
              <p className="p1">Total Sales </p>
              <h3 className="Price">$89k
              </h3>
              <span className="ArrowUp"> <b>&#8593; </b>37.8%</span>
                <span className="span1"> this month</span>            
            </div>
          </div>
        </div>
      </div>
      <div className="divs">
        <div className="main_div1"> 
      <div className="div1">
        <div className="overview">
      <div>
        <h2>Overview </h2>
        <h5>Monthly earning </h5>
      </div>
      <div>
          <span>Quartely </span><BsChevronDown /> 
      </div>
      </div>
     
      
     
      <div className="charts">
        {/* <ResponsiveContainer width="100%" height="100%">     */}
          <BarChart width={500} height={400} data={data}>
            <Bar dataKey="uv" fill="#7e6cce" radius={[10, 10, 10, 10]} />
            <XAxis dataKey="name" />
          </BarChart>
        {/* </ResponsiveContainer>  */}
        </div>  
        </div>
        </div>
         

       <div className="main_div2">
      
      <div className="customers">
        <h2>Customers </h2>
        <h5>Coustmers that buy Products  </h5>
      </div>
        <div className="charts"> 
        {/* <ResponsiveContainer width="100%" height="100%"> */}
         <PieChart_round />
        {/* </ResponsiveContainer> */}
        </div>    
        </div>  
        </div> 
      <div className="ProductDiv">
        <ProductList />
        </div>
    </main>
  );
}

export default Home;
