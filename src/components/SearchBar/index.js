import React from 'react'
import { Input } from 'semantic-ui-react'
import PropTypes from 'prop-types';


const SearchBar = ({searchRepo, search}) => {
  
  const handleChange = (event) => {
    //console.log('ça change, nouvelle valeur :', event.target.value);
    // on demande à ce que la nouvelle valeur de la recherche soit
    // ce qui a été saisi dans le champ
    //On réagit à la modification du champ de formulaire
    // en appellant la méthode qui permet de modifier la propriété du state
    searchRepo(event.target.value);
  }

  return (  
    <Input 
    value={search}
    onChange={handleChange}
    fluid icon='search' placeholder='Search...' />
  )
}

MessageAlert.propTypes = {
  searchRepo: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default SearchBar;
