import "./Orders.scss";
import * as React from 'react';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
function Orders() {
    const { data, loading } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 4,
        maxColumns: 6,
      });
    return (
        <div className="orders">
            <div className="info">
                <h1>Customers</h1>
                <button>Add Customer</button>
            </div>
            <div className="table">
            <div style={{ height: 450, width: '100%' }}>
      <DataGrid {...data} loading={loading} slots={{ toolbar: GridToolbar }} />
    </div>
            </div>
        </div>
    );
}

export default Orders;