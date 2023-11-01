import React from 'react';
import "../App.css";
const SignupFormSuccess = () => {
    return(
        <div className="container">
            <div className="app-wrapper">
                <h1 className="form-sucess"> Account Created </h1>
                <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name" ></i>
                </label>
            </div>
        </div>
    )
}
export default SignupFormSuccess;