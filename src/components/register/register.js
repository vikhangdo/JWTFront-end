import React from 'react';
import register from './register.scss';
import { useNavigate } from "react-router-dom";
function Register(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="register-container">
                <div className='container'>
                    <div className='row m-3 m-sm-0'>
                        <div className='content-left col-sm-7 d-none d-sm-block d-sm-flex flex-column align-items-center justify-content-center'>
                            <div className='brand'>
                                <h1>HoiDanIT</h1>
                            </div>
                                <p>Chào mừng bạn đến với HoiDanIT</p>
                        </div>
                        <div className='content-right col-sm-5 d-flex flex-column gap-3 py-3'>
                            <div className='brand d-sm-none text-center font-weight-bold'>
                                <h1>HoiDanIT</h1>
                            </div>
                            <input type="email" placeholder='Email' className='form-control'/>
                            <input type="text" placeholder='Username' className='form-control'/>
                            <input type="text" placeholder='Phone' className='form-control'/>
                            <input type="password" placeholder='Password' className='form-control'/>
                            <input type="password" placeholder='Re-enter Password' className='form-control'/>
                            <button className='btn btn-primary'>Register</button>
                            <span className='text-center'><a className='forgot-password' href="/login">Have an account? Login</a></span>
                            {/* <hr /> */}
                            {/* <div className='text-center'>
                                <button className='btn btn-success' onClick={() => navigate('/register')}>Create new account</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;