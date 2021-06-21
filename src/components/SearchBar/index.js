import React from 'react'
import { Input } from 'semantic-ui-react'
import PropTypes from 'prop-types';


const SearchBar = ({searchRepo, searchInput, setSearchInput, fetchRepos}) => {
   // 2- le searchInput est modifié on le reprend dans notre fonction qui gère le submit
   const handleSubmit = (event) => {
    
    event.preventDefault();
    // 3- on lui passe searchInput qui découle de la value de notre target et au submit il vient modifier directement le searchRepo (fonction dans APP/index.js)
    //( SearchRepo est utilisé pour modifier le state Search à son tour utilisé pour trouver les repos correspondants via getRepo)
    searchRepo(searchInput);
    fetchRepos();
  }

  return (
    <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)} // 1- Lorsque l'on change on modifie le searchInput
          fluid icon='search' placeholder='Search...' />
    </form>
  )
};


SearchBar.propTypes = {
  searchRepo: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  fetchRepos: PropTypes.func.isRequired,
};

export default SearchBar;
