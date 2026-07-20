import React from 'react';
import register from './register.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from 'react';
// import axios from 'axios';
import { registerUser } from "../../service/userService.js"


function Register(props) {
const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');
const [rePassword, setRePassword] = useState('');
const navigate = useNavigate();

let data = { email, username, phone, password, rePassword };
const handleRegister = async () => {

        let check = isValid();
        if(check){
            let response = await registerUser(email, username, phone, password);
            let serviceData = response.data;
            if(+serviceData.EC === 0){
                toast.success(serviceData.EM)
                navigate('/login')
            }else{
                toast.error(serviceData.EM)
            }
            console.log(">>> Check result: ", response)
        }               
}

const isValidDefault =  {
    isValidEmail: true,
    isValidUsername: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidRePassword: true
}
const [ObjectValid, setObjectValid] = useState(isValidDefault);
const isValid = ()  => {
        setObjectValid(isValidDefault);

        if(!email){
            toast.error('Please enter your email');
            return false;
        }

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
            setObjectValid({...ObjectValid, isValidEmail: false});
            toast.error('Please enter a valid email address');
            return false;
        }

        if(!username){
            setObjectValid({...ObjectValid, isValidUsername: false});
            toast.error('Please enter your username');
            return false;
        }


        if(!phone){
            setObjectValid({...ObjectValid, isValidPhone: false});
            toast.error('Please enter your phone number');
            return false;
        }

        
        if(!password){
            setObjectValid({...ObjectValid, isValidPassword: false});
            toast.error('Please enter your password');
            return false;
        }


        if(password !== rePassword){
            setObjectValid({...ObjectValid, isValidRePassword: false});
            toast.error('Password and Re-enter Password do not match');
            return false;
        }
        return true;
}

 
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
                            <input type="email" placeholder='Email' className={ObjectValid.isValidEmail ? 'form-control' : 'form-control is-invalid'}
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type="text" placeholder='Username' className={ObjectValid.isValidUsername ? 'form-control' : 'form-control is-invalid'}
                                value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                            <input type="text" placeholder='Phone' className={ObjectValid.isValidPhone ? 'form-control' : 'form-control is-invalid'}
                                value={phone} onChange={(e) => setPhone(e.target.value)}
                            />
                            <input type="password" placeholder='Password' className={ObjectValid.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <input type="password" placeholder='Re-enter Password' className={ObjectValid.isValidRePassword ? 'form-control' : 'form-control is-invalid'}
                                value={rePassword} onChange={(e) => setRePassword(e.target.value)}
                            />
                            <button className='btn btn-primary' onClick={()=> handleRegister()}>Register</button>
                            <span className='text-center'><a className='forgot-password' href="/login">Have an account? Login</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;