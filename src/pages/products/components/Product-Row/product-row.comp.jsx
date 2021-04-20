import React from 'react';
import ProductTable from '../product-table/product-table.comp';
import './product-row.style.css';
import {TableCell, TableContainer,Table, TableHead, TableBody, TableRow} from '@material-ui/core';


const ProductRow = () => {
    return (    
    <div>
        <div className="red">
            Football $49.99
        </div>
        <div className="red">
            Baseball $9.99
        </div>
        <div className="red">
            <b className="b">Basketball</b> $29.99
        </div>
        <div className="category"><b>Electronics</b></div>
        <div className="red">
            iPod Touch $99.99
        </div>
        <div className="red">
            <b className="b">iPhone 5</b> $399.99
        </div>
        <div className="red">
            Nexus 7 $199.99
        </div>
    </div>
    );
}

const ProductRowElectronics = () => {
    return(
        <div>
        
        </div>
    );
}

export default ProductRow;