import React from 'react';
import login from './login.scss';
function Login(props) {
    return (
        <div>
            <div className="login-container">
                <div className='container'>
                    <div className='row'>
                        <div className='content-left col-7'>
                            <div className='brand'>
                                <h1>HoiDanIT</h1>
                                <p>Chào mừng bạn đến với HoiDanIT</p>
                            </div>
                        </div>
                        <div className='content-right col-5 d-flex flex-column gap-3 py-3'>
                            <input type="text" placeholder='Username' className='form-control'/>
                            <input type="password" placeholder='Password' className='form-control'/>
                            <button className='btn btn-primary'>Login</button>
                            <span className='text-center'>Forgot Password?</span>
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