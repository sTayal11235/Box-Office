import styled from 'styled-components'
import FadeIn from 'react-fade-in'

export const SearchGrid = styled.div`
  display : flex;
  justify-content: center;
  flex-wrap : wrap;
  padding: 10px;
  `;

export const SearchCard = styled(FadeIn)`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;

  .img-wrapper {
    width: 100%;
    border-radius: 40px;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }


  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;

export const Star = styled.div`
display: inline-block;
width: 18px;
height: 18px;
background-color: ${
  props => (props.isStarred ?  '#ffc806' : '#DDDD')
};
clip-path: polygon(
  50% 0%,
  61% 35%,
  98% 35%,
  68% 57%,
  79% 91%,
  50% 70%,
  21% 91%,
  32% 57%,
  2% 35%,
  39% 35%
);
`;

export const DataWrapper = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 20%;
div{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 900;
  font-size: 7.5vh;
  text-align: center;
  color: rgb(155, 155, 155);
  text-shadow: 0px 0px 3.5px #000;
}
`