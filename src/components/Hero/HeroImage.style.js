import styled from 'styled-components';

export const Div = styled.div`
 background: linear-gradient(
      to bottom, rgba(0,0,0,0) 41%
      ,rgba(0,0,0,0.65) 75%,
      rgba(0,0,0,1) 100%
      ) , url(${(props) => props.desktopImage
  });
  background-size: 100%,cover;
  background-position: center;
  object-fit: fill;
  height: 600px;
  margin-top: 5rem;
  position: relative;
  animation: animateHeroImage 0.65s ease-in;

  @keyframes animateHeroImage{
    from{opacity: 0;}
    to{opacity: 1;}
  }
  
  @media (max-width: 785px){
  background: linear-gradient(
      to bottom, rgba(0,0,0,0) 41%
      ,rgba(0,0,0,0.65) 75%,
      rgba(0,0,0,1) 100%
      ) , url(${(props) => {
    let url = props.desktopImage.replace("w1280", "w780")
    return url;
  }});
  background-size: 100%,cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: fill;
  }

  @media (max-width: 485px){
  background: linear-gradient(
      to bottom, rgba(0,0,0,0) 41%
      ,rgba(0,0,0,0.65) 75%,
      rgba(0,0,0,1) 100%
      ) , url(${(props) => props.mobileImage});
  background-size: 100%,cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: fill;
  }
`
// Sizes: w300, w780, w1280,