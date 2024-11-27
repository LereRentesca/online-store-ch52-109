import "./styles/catalog.css";
import Product from "../components/product";
import { useEffect, useState } from 'react';
import dataService from '../services/dataService';

function Catalog(){
    const [catalog, setCatalog] = useState([]);
    const [categories, setCategories] = useState([]);

    function loadData() {
        let productList = dataService.getProducts();
        setCatalog(productList);

        let categoriesList = dataService.getCategories();
        setCategories(categoriesList);
    }

    useEffect(function() {
        // when page loads
        loadData();
    }, []);

    // if catalog is empty
    if(!catalog.length) return "Loading...";

    return(
        <div className='content page'>
            <div>
                <h1>This is where the catalog it's going to be.</h1>
            </div>

            <div className="filters">
                {categories.map(cat => <button className='btn btn-sm btn-outline-success'>{cat}</button>)}
            </div>

            <div>            
                {catalog.map(prod => <Product data={prod}></Product> )}
            </div>
        </div>
    );
}

export default Catalog;