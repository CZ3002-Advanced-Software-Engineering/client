import styled from 'styled-components'

export const LoginSection = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 0 20px;
    background: white;
    display: flex;
    margin-top: 50px;
`

export const LoginContainer = styled.div`
    padding: 60px;
    margin: auto;
    width: 100%;
    max-width: 520px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: radial-gradient(
        ellipse at left bottom,
        rgba(22, 24, 47, 1) 0%,
        rgba(38, 20, 72, 0.9) 59%,
        rgba(17, 27, 75, 0.9) 100%
    );
    box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);

    &label {
        color: white;
        margin: 14px 0;
        display: block;
        font-size: 22px;
        line-height: 1;
    }

    &input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 19px;
        padding: 10px;
        background: rgba(255, 255, 255, 0.1);
        color: blue;
        letter-spacing: 1px;
    }
`