import React from 'react';
import login from './login.scss';
function Login(props) {
    return (
        <div>
            <div className="login-container">
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
                            <input type="text" placeholder='Username' className='form-control'/>
                            <input type="password" placeholder='Password' className='form-control'/>
                            <button className='btn btn-primary'>Login</button>
                            <span className='text-center'><a className='forgot-password' href="">Forgot Password?</a></span>
                            <hr />
                            <div className='text-center'>
                                <button className='btn btn-success'>Create new account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;