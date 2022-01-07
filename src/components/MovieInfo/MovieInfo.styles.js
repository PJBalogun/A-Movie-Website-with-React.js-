import styled from "styled-components";

export const Div = styled.div`
    background: ${({ desktopImage }) => {
    return desktopImage ? `url(${desktopImage})` : '#000'
  }
  };
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation animateMovieInfo 1s;

  @keyframes{
    from{
      opacity: 0
    }
    to{
      opacity: 1;
    }
  }

  @media (max-width: 780px){
  background: ${({ mobileImage }) => {
    return mobileImage ? `url(${mobileImage})` : '#000'
  }
  };
  background-size: cover;
  background-position: top;
  object-fit: fill;
  }

   @media (max-width: 500px){
  background: ${({ mobileImage }) =>
    mobileImage ? `url(${mobileImage})` : '#000'
  };
  background-size: cover;
  background-position: top;
  object-fit: fill;
  } 
`
// Sizes: w300, w780, w1280,

