import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from './NavBar'

const ViewStudTable = () => {
    const [stud, changeData] = useState([])
    const fetchData = () => {
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar/>
            <div className="card text-center mb-3">
                <div className="card-body">
                    <h5 className="card-title">Student List</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">College</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">DOB</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">E-mail</th>
                                            <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            stud.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <td>{value._id}</td>
                                                        <td>{value.firstname}</td>
                                                        <td>{value.lastname}</td>
                                                        <td>{value.college}</td>
                                                        <td>{value.course}</td>
                                                        <td>{value.dob}</td>
                                                        <td>{value.mobile}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.address}</td>
                                                    </tr>
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudTable