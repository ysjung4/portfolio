import React, { Component } from "react";
import Header from "./stock/Header";
import Search from "./stock/Search";
import Content from "./stock/Content";
import Footer from "./stock/Footer";
import Add from "./stock/Add";

 import Nav from "./stock/Nav";

 function Main( { stocks, category, handleSearch, handleSelect, handleStocked, handleRemove, additem }) {

     return (
         <div>
             <div className="container-fluid header mb-3">
                 <Header/>
             </div>
             {/* <Login /> */}

             <div className="container">
             <Nav/>
               <Search
                 category={category}
                 handleSearch={handleSearch}
                 handleStocked={handleStocked}
                 handleSelect={handleSelect}
               />

               <Add additem={additem} />
               <Content stocks={stocks} handleRemove={handleRemove} />
             </div>
             {/*<div className="container-fluid footer mb-3">*/}
             {/*  <Footer />*/}
             {/*</div>*/}
         </div>
     )
 }


export default Main;
