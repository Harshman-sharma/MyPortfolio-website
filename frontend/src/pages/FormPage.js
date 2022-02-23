import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Message from '../components/Message'


function RegisterPage() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [newpsk, setNewpsk] = useState("")

    const navigate = useNavigate();

    const AddUserInfo = async () => {
        let formField = new FormData()

        formField.append('name', name)
        formField.append('email', email)
        formField.append('newpsk', newpsk)

        await axios({
            method: 'POST',
            url: `http://127.0.0.1:8000/api/register/`,
            data: formField
        }).then((response) => {
            console.log(response.data);   
            navigate('/') 
        })   
    }



    return (
        <div>
            <h1> Register New User </h1>

            <div className='container'>


                <div className="form-group">

                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        placeholder='Enter your name'
                        onChange={(e) => setName(e.target.value)}
                    />

                </div><br />


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

                </div><br/>


                <button className="btn btn-success" onClick={AddUserInfo}>Submit</button>
                <Link to="/login"><p>Existing Users Login</p></Link>
                
                <Message variant="success">The Data you submit will be stored in Django Backend at : http://127.0.0.1:8000/admin/</Message>

            </div>

        </div>
    )
}

export default RegisterPage