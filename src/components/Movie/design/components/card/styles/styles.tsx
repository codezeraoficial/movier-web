import styled from "styled-components";

interface HeaderImageProps {
  src: string;
}

const src = (p: HeaderImageProps) => p.src;

export const Container = styled.div`
  height: 300px;
  width: 100%;
  background-image: url(${src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px 7px 0 0;  

  -webkit-transition: background-image 1000ms linear;
    -ms-transition: background-image 1000ms linear;
    transition: background-image 1000ms linear;

  cursor: pointer;

  svg{
    display: none;
    color: #FFF;
    font-size: 80px;
  }



  &:hover {
    background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${src});

    svg{
      display: block;
    }
  }
`;
