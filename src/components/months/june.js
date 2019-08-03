import React from 'react';
import Table from 'react-bootstrap/Table';

const June = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Current</th>
                    <th>AutoStim</th>
                    <th>Magnet</th>
                    <th>HR Detection</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td>June</td>
                    <td>1.5mA</td>
                    <td>1.5mA</td>
                    <td>1.75mA</td>
                    <td>70%</td>
                </tr>
               
            </tbody>
        </Table>
    )
};

export default June;