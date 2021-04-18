import React from 'react';
import ProductCategory from './category/product-category.comp';
import './product-table.style.css';
import {TableCell, TableBody} from '@material-ui/core'

const ProductTable = () => {
    return (
        <div className="product-table-container">
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                </thead>
            <TableBody>
                {Products.map(celda=>(
                    <tr>
                            <TableCell>{celda.name}</TableCell>
                            <TableCell>{celda.price}</TableCell>
                    </tr>
                    ))}
            </TableBody>
            </table>
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