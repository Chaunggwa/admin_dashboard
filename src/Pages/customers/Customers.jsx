import "./Customers.scss";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];
function Customers() {
    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
      });
    return (
        <div className="customers">
            <div className="info">
                <h1>Customers</h1>
                <button>Add Customer</button>
            </div>
            <div className="table">
            <div style={{ height: 500, width: '100%', color: "white" }}>
      <DataGrid className="customerTable" {...data} />
    </div>
            </div>
        </div>
    );
}

export default Customers;