import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/login.module.css';
import { GoogleLogin } from "react-google-login";

export const Login = ({ isToken, setIsToken }) => {

    const [loginData, setLoginData] = React.useState({ email: '', password: '' })
    const navigate = useNavigate();


    const onChangeHandler = (event) => {
        let { name, value } = event.target

        setLoginData({ ...loginData, [name]: value });
        // console.log(loginData);
    }

    const responseGoogle = response => {
        console.log(response);
    };


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        console.log(loginData)

        const response = await fetch('https://easemytrip-backend.herokuapp.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)

        })
        // .then(response => {
        //     console.log(response);
        //     response.json()
        // })
        // .then(response => console.log(response))

        const res = await response.json();

        localStorage.setItem('userData', JSON.stringify(res));
        setLoginData({ email: '', password: '', });
        navigate('/')

        console.log(res)
    }

    const localStorageCheck = () => {
        const userData = JSON.parse(localStorage.getItem('userData'));


        if (userData) {
            setIsToken(userData)
            navigate('/check');
        }
    }

    // const googleLogin = async () => {

    //     // const res = await fetch('https://easemytrip-backend.herokuapp.com/auth/google');

    //     // const data = await res.json();
    //     // console.log(data);

    //     const res = window.open("https://easemytrip-backend.herokuapp.com/auth/google", "_self")
    //     // const data = res.json()
    //     console.log(res)
    // }

    React.useEffect(() => { localStorageCheck() });

    return (
        <div className={styles.div}>
            <div className={styles.loginDiv}>
                <h3 className={styles.loginText}>Login</h3>
                <form action="" className={styles.form} onSubmit={onSubmitHandler} >
                    <div>
                        <label className={styles.labelLogin} htmlFor="">Please enter your email address: </label>
                        <br />
                        <input className={styles.inputLogin} type="email" value={loginData.email} placeholder="Enter email address.." name="email" onChange={onChangeHandler} />
                    </div>

                    <div>
                        <label className={styles.labelLogin} htmlFor="">Please enter your Password: </label>
                        <br />
                        <input className={styles.inputLogin} type="password" value={loginData.password} placeholder="Enter Password.." name="password" onChange={onChangeHandler} />
                    </div>

                    <input type="submit" value="Continue" className={loginData.email != '' && loginData.password != '' ? styles.submitButtonColor : styles.submitButton} />
                </form>

                {/* <GoogleLogin
                    clientId="131389240871-nmsg9mvnbn8q2av2456n94ltrme3389g.apps.googleusercontent.com"
                    buttonText="Signup with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                /> */}

                {/* <button onClick={googleLogin}>Signup with Google</button> */}

                <h3 className={styles.loginText2}>New here? <span className={styles.spanLogin} onClick={() => navigate('../register')}>Register</span></h3>
            </div>
        </div >
    )
}
