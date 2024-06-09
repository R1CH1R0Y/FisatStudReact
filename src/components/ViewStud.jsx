import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewStud = () => {
    const [stud, changeData] = useState([])
    const fetchData=()=>{
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Student List</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    {
                                        stud.map(
                                            (value, index) => {
                                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div class="card text-center mb-3">
                                                        <div class="card-body">
                                                            <p class="card-text">FIRST NAME : {value.firstname}</p>
                                                            <p class="card-text">LAST NAME : {value.lastname}</p>
                                                            <p class="card-text">ID : {value._id}</p>
                                                            <p class="card-text">COURSE : {value.course}</p>
                                                            <p class="card-text">MOBILE : {value.mobile}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStud