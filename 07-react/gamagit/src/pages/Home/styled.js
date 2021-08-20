import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  color: #306;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, .4);
  margin-bottom: .5rem;
`

export const Description = styled.p`
  font-size: 1.5rem;
`

export const Input = styled.input`
  border: 1px dashed #306;
  border-radius: 8px 0 0 8px;
  height: 2.5rem;
  width: 15%;
  padding: 0 .5rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  } // sintaxe do Sass, e é o mesmo que input:focus e input:active
`

export const Button = styled.button`
  border: none;
  border-radius: 0 8px 8px 0;
  background-color: #3065;
  height: 2.6rem;
  width: 4%;
  padding: 0 .5rem;
  margin-top: 1.5px;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 600;
  color: #fff;
  transition: background-color .3s;
  cursor: pointer;

  &:hover {
    background-color: #306;
  } // Sass = button:hover
`

export const ErrorMsg = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  color: tomato;
  margin-top: 1.5rem;
`
