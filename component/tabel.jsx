import React from "react";
import { Table } from "react-bootstrap"

function Tabel() {

    const data2 = [
        { id: 1, nama_lengkap: "Andre Nicholas", nama_belakang: "Nicholas", username: "Andi"},
        { id: 2, nama_lengkap: "Moreno Hadi Wijaya", nama_belakang: "Wijaya", username: "Ren"},
        { id: 3, nama_lengkap: "Ayas Ashadullah Bilqis", nama_belakang: "Bilqis", username: "Vanitas"},
    ]; 
    return (
        <>
        <div className="tabel">
        <h5>
            TABEL
        </h5>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>full name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {data2.map((item) =>(
                    <tr>
                        <td>{item.nama_lengkap}</td>
                        <td>{item.nama_belakang}</td>
                        <td>{item.username}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    </>
    )
}

export default Tabel