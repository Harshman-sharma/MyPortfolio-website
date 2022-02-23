import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Message from '../components/Message'

function LoginPage() {

    const [email, setEmail] = useState("")
    const [newpsk, setNewpsk] = useState("")
    
    const navigate = useNavigate();

    const [rdatas, setRdatas] = useState([])

    useEffect(() => {

        async function fetchRdatas() {
            const { data } = await axios.get('/api/register/')
            setRdatas(data)
        }
        fetchRdatas()
    }, [])

    const rdata = rdatas.find((r) => r.email == email && r.newpsk == newpsk)

    const LogIn = () => {
        if (rdata!=null){
            navigate('/')
        }
        else{navigate('/login')}
    }

    return (
        <div>
            <h1> Login Existing User </h1>


            <div className="form-group">

                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    placeholder='Enter your Email Id'
                    onChange={(e) => setEmail(e.target.value)}
                />

            </div><br />


            <div className="form-group">

                <input
                    type="password"
                    className="form-control"
                    name="newpsk"
                    value={newpsk}
                    placeholder='Create A Password'
                    onChange={(e) => setNewpsk(e.target.value)}
                />

            </div><br />

            <button className="btn btn-success" onClick={LogIn}>Let's Go</button>
            <br/><br/>

            <Link to="/register"><p>New Users Register</p></Link>
            <br/><br/>

            <Message variant="success">Default user data saved for testing:<br/><br/>
            Name     : Sample_User<br/>
            Email    : abc@email.com<br/>
            Password : 12345</Message>
        </div>

    )
}

export default LoginPage