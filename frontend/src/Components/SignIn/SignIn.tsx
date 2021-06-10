import { useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styled from 'styled-components';
import { Divider, makeStyles } from '@material-ui/core';
import { SignInInput } from './SignInInput';
import { SignInFooter } from './SignInFooter';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    top: 0;
    z-index: 9999;
`;

const Signin = styled.div`
    width: 425px;
    margin: auto;
    padding-top: 4rem;
    height: 44.4rem;
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
`;

const IconText = styled.p`
    font-size: .9rem;
    font-weight: 400;
    margin-left: 5px;
    letter-spacing: 2px;
`;

const Head = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
`;

const Text = styled.p`
    margin: auto;
    text-align: center;
    padding: 20px 40px;
    line-height: 1.5rem;
`;

const LinkedInLogo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const useStyles = makeStyles(theme=>({
    logo: {
        color: '#0077b5'
    },
    bigLogo: {
        color: '#0077b5',
        fontSize: '3rem'
    },
    span: {
        color: '#0077b5',
        fontWeight: 600,
        marginLeft: '5px',
        cursor: 'pointer'
    },
    email:{
        textAlign: 'center'
    }
}));

export interface formData {
    email: string;
    password: string;
}

const initData: formData = {
    email: "",
    password: ""
}

export default function SignIn () {

    const classes = useStyles();
    
    const [data, setData] = useState<formData>(initData);
    
    const [show, setShow] = useState<boolean>(false);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=> {
        const {name, value} = e.target;
        const payload = {
            ...data,
            [name]: value
        };
        setData(payload);
    };

    const handleContinue: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setShow(true);
    }

    const handleChangeEmail: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setShow(false);
        setData(initData);
    }
    
    return (
        <Container>
            <Signin>
                <Logo>
                    <LinkedInIcon className={classes.logo} />
                    <IconText>LEARNING</IconText>
                </Logo>
                {
                    show &&
                    <>
                        <LinkedInLogo>
                            <h1>Linked</h1>
                            <LinkedInIcon className={classes.bigLogo} />
                        </LinkedInLogo>
                        <p className={classes.email}>
                            {data.email} 
                            <span className={classes.span} onClick={handleChangeEmail} >
                                Change
                            </span>
                        </p>
                    </>
                }
                <Head>
                    Sign In
                </Head>
                <Text>Sign in using the email address you use for Linkedin.com or your organisation email</Text>
                <SignInInput 
                    handleContinue={handleContinue}
                    show={show}
                    handleChange={handleChange}
                    data={data} />
            </Signin>
            <hr/>
            <SignInFooter />
        </Container>
    )
}
