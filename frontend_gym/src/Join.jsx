import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Join = () => {
    const history = useNavigate();

    const [user, setUser] = useState({
        first:"", last:"", email:"", gender:"", city:"", age:""
    });

    let name, value;

    const handleInputs =(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user, [name]:value})
    };

    const postData = async (e)=>{
        e.preventDefault();
        const {first, last, email, gender, city, age}= user;

        const res = await fetch("/join", {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                first, last, email, gender, city, age
            })
        });

        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Registration failed");
            console.log("Registration failed");
        }else{
            window.alert("Registration successful");
            console.log("Registration successful");

            history('/');
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9 mx-auto">
                        <div >
                            <h2 className="text-center text-primary" >Join The Best Gym of City</h2>
                            <div method="POST" className="border border-primary" >
                                <div className="form-floating mb-2" >
                                    <input type="text" name="first" className="form-control" id="floatingFirstName" placeholder="First Name" 
                                        value={user.first}
                                        onChange={handleInputs}
                                    />
                                    <label htmlFor="floatingFirstName">First Name</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="text" name="last" className="form-control" id="floatingLastName" placeholder="Last Name" 
                                        value={user.last}
                                        onChange={handleInputs}
                                    />
                                    <label htmlFor="floatingLastName">Last Name</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" name="email" className="form-control" id="floatingEmailAddress" placeholder="name@example.com" 
                                        value={user.email}
                                        onChange={handleInputs}
                                    />
                                    <label htmlFor="floatingEmailAddress">Email address</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="text" name="gender" className="form-control" id="floatingGender" placeholder="Gender" 
                                        value={user.gender}
                                        onChange={handleInputs}
                                    />
                                    <label htmlFor="floatingGender">Gender</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="text" name="city" className="form-control" id="floatingCity" placeholder="City" 
                                        value={user.city}
                                        onChange={handleInputs}
                                    />
                                    <label htmlFor="floatingCity">City</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="number" name="age" className="form-control" id="floatingAge" placeholder="Age" 
                                        value={user.age}
                                        onChange={handleInputs}
                                    />
                                    <label htmlFor="floatingAge">Age</label>
                                </div>
                                <div className="d-grid gap-2">
                                    <button name="join" className="btn btn-primary" type="button"
                                    onClick={postData}
                                    >Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Join;