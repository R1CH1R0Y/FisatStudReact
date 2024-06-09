import React, { useState } from 'react'
import NavBar from './NavBar'

const RemoveStud = () => {
    const [stud,changeData]=useState(
        {
            "_id":""
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
            <NavBar/>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Remove Student</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Id :</label>
                                <input type="text" className="form-control" name='_id' value={stud._id} onChange={eventHandler}/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-danger" onClick={readValue}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default RemoveStud