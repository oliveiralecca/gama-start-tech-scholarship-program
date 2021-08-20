import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  color: #306;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, .4);
  margin-bottom: 3rem;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`

export const ListItem = styled.li`
  margin: .5rem auto;
  text-align: center;
  background-color: #306;
  color: #fff;
  padding: .7rem;
  width: 40%;
`

export const LinkBack = styled(Link)`
  display: block;
  width: 10%;
  padding: .7rem;
  margin: 2rem auto;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background-color: #3065;
  transition: background-color .3s;

  &:hover {
    background-color: #306;
  } 
`
