import React, { useState } from 'react'
import NavBar from './NavBar'

const AddStud = () => {
    const [stud, changeData] = useState(
        {
            "_id": "",
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobile": "",
            "email": "",
            "address": ""
        }
    )
    const eventHandler=(event)=>{
        changeData({...stud,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(stud)
    }
    return (
        <div>
            <NavBar />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Add Student</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Id :</label>
                                        <input type="text" className="form-control" name='_id' value={stud._id} onChange={eventHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">First Name :</label>
                                        <input type="text" className="form-control" name='firstname' value={stud.firstname} onChange={eventHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Last Name :</label>
                                        <input type="text" className="form-control" name='lastname' value={stud.lastname} onChange={eventHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">College :</label>
                                        <input type="text" className="form-control" name='college' value={stud.college} onChange={eventHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Date of Birth :</label>
                                        <input type="date" id="" className="form-control" name='dob' value={stud.dob} onChange={eventHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Course :</label>
                                        <select id="" className="form-control" name='course' value={stud.course} onChange={eventHandler}>
                                            <option value=""></option>
                                            <option value="B-Tech Comp Science">B-Tech Comp Science</option>
                                            <option value="MCA">MCA</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Mobile :</label>
                                        <input type="tel" id="" className="form-control" name='mobile' value={stud.mobile} onChange={eventHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">E-mail :</label>
                                        <input type="email" id="" className="form-control" name='email' value={stud.email} onChange={eventHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Address :</label>
                                        <textarea id="" className="form-control" name='address' value={stud.address} onChange={eventHandler}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={readValue}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddStud