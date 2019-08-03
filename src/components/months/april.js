import React from 'react';
import Table from 'react-bootstrap/Table';

const April = () => {
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
                    <td>April</td>
                    <td>1.0mA</td>
                    <td>1.0mA</td>
                    <td>1.25mA</td>
                    <td>60%</td>
                </tr>
                
            </tbody>
        </Table>
    )
};

export default April;