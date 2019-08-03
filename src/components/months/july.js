import React from 'react';
import Table from 'react-bootstrap/Table';

const July = () => {
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
                    <td>July</td>
                    <td>1.65mA</td>
                    <td>1.75mA</td>
                    <td>1.875mA</td>
                    <td>70%</td>
                </tr>
               
            </tbody>
        </Table>
    )
};

export default July