import React from 'react'
import styled from 'styled-components'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import loginSidePic from '../assets/loginSidePic.png';

const Login = () => {

    const inputField = (label,placeholder,type,hideIcon) => {
        return(
            <Inputs>
                <p>{label}</p>
                <input type={type} placeholder={placeholder} />
                {hideIcon && <VisibilityOffIcon />}
            </Inputs>
        )
    }

    const checkBox = (label) => {
        return(
            <Check>
                <input type="checkbox" id={label} name="scales" />
                <label for={label}>{label}</label>
            </Check>
        )
    }
   
  return (
    <Container>
        <Left>
            <img src={loginSidePic} alt='loginImg' />
        </Left>
        <Right>
            <LoginWrapper>
                <LoginContent>
                    <LoginLogo><h2>Login</h2></LoginLogo>
                    {inputField("Login ID","Enter Login ID","text")}
                    {inputField("Password","Enter Password","password")}
                    <CheckContainerOne>
                        {checkBox("Remember Me")}  
                        <a href='#'>change password</a> 
                    </CheckContainerOne>
                    <CheckContainerTwo>
                        {checkBox("Agree to")}
                        <a href='#'>Terms & Condition</a>
                    </CheckContainerTwo>
                    <Button>
                        <button type='submit'>Login</button>
                    </Button>
                    <Register>
                        <p>Don't have an account?</p>
                        <a href='#'>Register Here</a>
                    </Register>
                </LoginContent>
            </LoginWrapper>
        </Right>
    </Container>
  )
}

export default Login

const Container = styled.div`
    max-width:100%;
    height:90vh;
    display:flex;
    justify-content:space-between;
    font-family:arial;
`
const Left = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex:0.45;
    height:100%;
    img{
        height:70%;
        width:60%;
    }
`
const Right = styled.div`
    flex:0.55;
    display: flex;
    justify-content:center;
    align-items:center;
`

const LoginWrapper = styled.div`
    border-radius:5px;
    box-shadow:0px 0px 20px #cfd1d4;
    height:90%;
    width:90%;
    display: flex;
    justify-content:center;
    align-items:center;  
`
const LoginContent = styled.div`
    width:80%;
    
`
const LoginLogo = styled.div`
    text-align:center;
    h2{
        font-size:28px;
        font-weight:800;
        margin-bottom:5px;
    }
`

const CheckContainerOne = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:8px;
    color:gray;
    margin-top:5px;
    font-size:14px;
    a{
        color:orange;
        text-decoration:none;
    }
`
const CheckContainerTwo = styled.div`
    display:flex;
    align-items:baseline;
    padding-top:8px;
    color:gray;
    font-size:14px;
    a{
        color:orange;
        margin-left:2px;
    }
`
const Inputs = styled.div`
   
    display:flex;
    flex-direction:column;
    margin-bottom:4px;
    p{
        font-size:15px;
        font-weight:600;
        margin-bottom:10px;
    }
    input {
        font-size:14px;
        padding:8px;
        outline:none;
        color:gray;
        border:1px solid gray;
        border-radius:4px;
    }
`

const Check = styled.div`
    input{
        margin-left:0;
    }
`
const Button = styled.div`
    display:flex;
    justify-content:center;
    margin-top:24px;
    margin-bottom:12px;
    width:100%;

    button{
        width:70%;
        padding:8px;
        color:white;
        background-color:#1575a7;
        border:none;
        border-radius:4px;
        cursor:pointer;
    }
`

const Register = styled.div`
    display:flex;
    align-items:baseline;
    justify-content:center;
    font-size:14px;
    a{
        color:orange;
        margin-left:2px;
        font-weight:700;
    }
`