import React from 'react';
import axios from 'axios';
import * as style from './styled';
import { useHistory } from 'react-router-dom';

const Home = ({ title }) => {
  const history = useHistory()
  const [user, setUser] = React.useState('')
  const [error, setError] = React.useState(false)

  async function handleSearch() { 
    try {
      let response = await axios.get(`http://api.github.com/users/${user}/repos`)
      const repositories = response.data
      const repositoriesName = []
      repositories.map(item => {
        repositoriesName.push(item.name)
      })
      window.localStorage.setItem('allRepositories', JSON.stringify(repositoriesName))
      setError(false)
      history.push('/repositories')
    } catch(err) {
      setError(true)
    } 
  }

  return (
    <style.Container>
      <style.Title>{title}</style.Title>
      <style.Description><em>Please, insert the user you want to look for.</em></style.Description>
      <div style={{width: '100%', textAlign: 'center'}}>
        <style.Input className="userInput" placeholder="username" value={user} onChange={event => setUser(event.target.value)} />
        <style.Button type="button" onClick={handleSearch}>GO!</style.Button>
      </div>   
      {error && <style.ErrorMsg>Ops! Something is not working. Try again.</style.ErrorMsg>} 
    </style.Container>
  );
}

export default Home
