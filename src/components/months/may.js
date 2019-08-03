import React from 'react';
import Table from 'react-bootstrap/Table';

const May = () => {
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
                    <td>May</td>
                    <td>1.25mA</td>
                    <td>1.25mA</td>
                    <td>1.5mA</td>
                    <td>60%</td>
                    
                </tr>
          
            </tbody>
        </Table>
    )
};

export default May;