import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {

    const history = useNavigate();

    const [user, setUser] = useState({
        name:"", email:"", comment:""
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
        const {name, email, comment}= user;

        const res = await fetch("/contact", {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name, email, comment
            })
        });

        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("error in sending");
            console.log("error in sending");
        }else{
            window.alert("Sent successful");
            console.log("Sent successful");

            history('/');
        }
    }
    
    return (
        <>
            <section className="mb-4">

            
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
           
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">

               
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="" method="POST">

                     
                            <div className="row">

                             
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control"
                                            value={user.name}
                                            onChange={handleInputs}
                                        />
                                        <label htmlFor="name" className ="">Your name</label>
                                    </div>
                                   
                                </div>
                            
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control"
                                            value={user.email}
                                            onChange={handleInputs}
                                        />
                                        <label htmlFor="email" className ="">Your email</label>
                                    </div>
                                 
                                </div>
                            

                            </div>
                          
                       
                            <div className="row">

                                
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="comment" rows="2" className="form-control md-textarea"
                                        value={user.comment}
                                        onChange={handleInputs}></textarea>
                                        <label htmlFor="message">Your message</label>
                                    </div>
                               
                                </div>
                            </div>
                            <div className="text-center text-md-left">
                                <button name="join" className="btn btn-primary" type="submit"
                                onClick={postData} >Send</button>
                            </div>

                        </form>

                        
                        <div className="status"></div>
                    </div>
                    
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Sikar, Rajasthan</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>neeraj@gemail.com</p>
                            </li>
                        </ul>
                    </div>
                   

                </div>

            </section>
            
        </>
    );
};

export default Contact;