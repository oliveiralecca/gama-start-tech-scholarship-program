import React from 'react';
import * as style from './styled';
import { useHistory } from 'react-router-dom';

const Repositories = () => {
  const history = useHistory()
  const [repository, setRepository] = React.useState([])

  React.useEffect(() => {
    let allRepositories = window.localStorage.getItem('allRepositories')
    if(allRepositories !== null) {
      allRepositories = JSON.parse(allRepositories) // retornando de string para array
      setRepository(allRepositories)
      window.localStorage.clear()
    } else {
      history.push('/')
    }    
  }, [])

  return (
    <style.Container>
      <style.Title>GitHub Repositories</style.Title>      
      <style.List>
        {repository.map(item => 
          <style.ListItem key={item}>{item}</style.ListItem>          
        )}                      
      </style.List>
      <style.LinkBack to="/">VOLTAR</style.LinkBack>
    </style.Container>
  )
}

export default Repositories

