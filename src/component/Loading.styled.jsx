import styled from "styled-components";

export const TurnAnimation = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: #202e1f;
section{
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 100vh;
 animation: animateBg 2.5s linear infinite;
 .loader{
     position: relative;
     width: 120px;
     height: 120px;
     span{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotate(calc(18deg * var(--i)));
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #00ff0a;
            box-shadow: 0 0 10px #00ff0a,
                       0 0 20px #00ff0a,
                       0 0 40px #00ff0a,
                       0 0 60px #00ff0a,
                       0 0 80px #00ff0a,
                       0 0 100px #00ff0a;
           animation: animate 0.5s linear infinite;
           animation-delay: calc(0.075s * var(--i));
        }
    }
}
}
@keyframes animate
{
    0%,5%
    {
        transform: scale(0);
    }
    80%,100%
    {
        transform: scale(1);
    }
}
@keyframes animateBg
{
    0%
    {
        filter: hue-rotate(0deg);
    }
    100%
    {
        filter: hue-rotate(360deg);
    }
}
`;