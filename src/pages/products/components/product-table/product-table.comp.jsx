import React from 'react';
import './product-table.style.css';
import {TableCell, TableBody} from '@material-ui/core'
import '../ProductCategoryRow/product-category.comp';
import ProductCategory from '../ProductCategoryRow/product-category.comp';
import ProductRow from '../Product-Row/product-row.comp';

const ProductTable = () => {
    return (
        <div className="product-table-container">
        <table>
            <th><b>Name</b></th>
            <th><b>Price</b></th>
            
        </table>
        <ProductCategory/>
        </div>

        
        
    );
}


const Products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default ProductTable;