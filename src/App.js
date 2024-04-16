// App_2.js

import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import GamjaWorld from './components/gamja/GamjaWorld';
import Experience from './components/Experience'
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Main from "./components/Main";
import data from "./utils/db";

function App() {
    const [isLogin, setIsLogin] = useState(true);
    const [stocks, setStocks] = useState([]);
    const [category, setCategory] = useState([]);

    const getCategory = (data) => {
        const category = [];
        data.forEach((e) => {
            category.push(e.category);
        });
        return Array.from(new Set(category));
    };

    const addItem = (data) => {
        //TODO: stocked data from create.js
        //TODO: category dropbox fixing
        data.id = stocks.length + 1;
        data.price = "$" + data.price;
        data.removed = false;
        data.stocked = data.stock;
        setStocks([...stocks, data]);
        setCategory(getCategory([...stocks, data]));
    };

    const handleStocked = (isStock) => {
        // TODO: this works partially, make it work perfectly.
        setStocks(isStock ? stocks.filter((e) => e.stocked === isStock) : stocks);
    };

    const handleSelect = (category) => {
        // TODO: this works partially, make it work perfectly.
        setStocks(category !== "All" ? stocks.filter((e) => e.category === category) : stocks);
    };

    const handleSearch = (filteredData) => {
        if (filteredData !== "") {
            // null, undefined, ""
            setStocks(stocks.filter((e) => e.name.indexOf(filteredData) !== -1));
        } else {
            setStocks(data);
        }
    };

    const handleRemove = (id) => {
        setStocks(stocks.filter((stock) => stock.id !== id));
    };

    useEffect(() => {
        console.log("componentDidMount : ", data);
        setStocks(data);
        setCategory(getCategory(data));
    }, []);

    return (
        <Router>
            <div>
                {/*<nav className="navbar navbar-light bg-light">*/}
                {/*    <ul>*/}
                {/*        <li className="nav-item active">*/}
                {/*            <Link to="/">Home</Link>*/}
                {/*        </li>*/}
                {/*        <li className="nav-item active">*/}
                {/*            <Link to="/main">About</Link>*/}
                {/*        </li>*/}

                {/*        <li className="nav-item active">*/}
                {/*            <Link to="/gamja">Gamja's World</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/gamja">
                        <GamjaWorld/>
                    </Route>
                    <Route path="/main">
                        <Main
                            stocks={stocks}
                            category={category}
                            handleSearch={handleSearch}
                            handleSelect={handleSelect}
                            handleStocked={handleStocked}
                            handleRemove={handleRemove}
                        />
                    </Route>
                    <Route path="/experience">
                        <Experience/>
                    </Route>
                    <Route path="/Portfolio">
                        <Portfolio/>
                    </Route>
                    <Route path="/project">
                        <Project/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
