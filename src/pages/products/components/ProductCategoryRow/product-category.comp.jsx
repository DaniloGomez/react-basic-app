import React from 'react';
import ProductTable from '../product-table/product-table.comp';
import './product-category.style.css';
import {TableCell, TableContainer,Table, TableHead, TableBody, TableRow} from '@material-ui/core';
import ProductRow from '../Product-Row/product-row.comp';

const ProductCategory = () => {
    return (
    <div>
        <div className="category">
            <b>Sporting Goods</b>
        </div>
        <ProductRow/>
    </div>


    );
}

export default ProductCategory;