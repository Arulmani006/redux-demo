import React, { useState } from 'react';
import axios from 'axios';
import './GithubUser.css';
import Button from '@material-ui/core/Button';

const GithubUser = (props) => {
    const[githubUser, setGithubUser] = useState('');
    const usernameChangeHandler = async(event) => {
        event.preventDefault();
        try {
            if(githubUser === ""){
                alert('pleasse enter the github username');
            } else {
            const result = await axios.get(`https://api.github.com/users/${githubUser}/repos`);
            props.onSubmit(result.data);
            setGithubUser('');
            }
          } catch (e) {
           alert(`${githubUser} is a non-existent github account`);
          }
        }

    const githubUserChangeHandler = (event) => {
        setGithubUser(event.target.value) ;
    }

    return (
        <div>
            <form onSubmit={usernameChangeHandler}>
                <div className='p'>
                <label htmlFor="username" >GitHub User</label>
                    <input
                        id="userName"
                        type="text"
                        value={githubUser}
                        onChange={githubUserChangeHandler}          
                    />
            <br/><br/>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )

}

export default GithubUser;

