import React from 'react';
import Table from 'react-bootstrap/Table';

const February = () => {
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
                    <td>February</td>
                    <td>0.25mA</td>
                    <td>0.375mA</td>
                    <td>0.5mA</td>
                    <td>40%</td>
                </tr>
            </tbody>
        </Table>
    )
};

export default February;