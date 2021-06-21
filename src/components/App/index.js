// == Import npm
import React, { useState } from 'react'
// Import de semantic UI
import 'semantic-ui-css/semantic.min.css'
// Import de axios (requête API)
import axios from 'axios'

//Import des composants :
import SearchBar from 'src/components/SearchBar'
import MessageAlert from 'src/components/MessageAlert'
import ReposResults from 'src/components/ReposResults'
import Header from 'src/components/Header'
import Spinner from 'src/components/Spinner'

// == Import
import './styles.css';


// == Composant
const App = () => {
  
  // -> La barre de recherche linkée à l'input (champs contrôlé)
  const [searchInput, setSearchInput] = useState('');
  // -> Le champ qui sera modifié après le submit pour transmettre la partie dynamique à l'API afin de cibler la recherche
  const [search, setSearch] = useState('');
  const [repos, setRepos] = useState([]);
  const [message, setMessage] = useState('Veuillez saisir votre recherche');
  const [loadingRepos, setLoadingRepos] = useState(false);
  
  // La fonction qui permet de modifier le state de notre recherche une fois qu'on a submit:
  const searchRepo = (searchInput) => {
    setSearch(searchInput);
  };

  const fetchRepos = () => {

    setLoadingRepos(true);    
    // lancer une requête vers l'API
  
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
    // si la promesse d'obtenir une réponse est tenue
    .then(
      (response) => {
        // les données (le contenu de la réponse)
        // sont accessibles dans la propriétés data de l'objet reponse
        console.log(response.data.items);
        // - Stocker la liste des articles dans la variable d'état appropriée
        setRepos(response.data.items);
        setMessage(`Nous avons trouvé ${response.data.items.length} résultats pour votre recherche`);
      },
    )
    // si la promesse d'obtenir une réponse n'est pas tenue
    .catch(
      () => {
        // - afficher une erreur
        console.log('une erreur est survenue, merci de revenir sur notre blog plus tard');
        setMessage('Une erreur s\'est produite veuillez appuyer à nouveau sur "entrer"');
      },
    )
    // dans tous les cas (promesse tenue ou rompue)
    .finally(
      () => {
      // - Indiquer que le chargement est terminé
      setLoadingRepos(false);
      },
    );
  };

    // on va retourner la liste des repos filtrés
    const getRepo = () => {
      
    // On récupère nos données qu'on passe en minuscule
    const loweredSearch = search.toLowerCase();
    const ReposItems = repos;
    //console.log(ReposItems);
    // dans le cas où le champ de recherche est vide, on renvoie la liste complète
    if (search === '') {
      return ReposItems;
    } 
    // Sinon on filtre les résultats en fonction de ce qui a été rentré dans l'input
    return ReposItems.filter(
        (repo) => repo.name.toLowerCase().includes(loweredSearch),
    );
  };
  //console.log(datas.total_count);
  return (
    <div className="app">
      <Header/>
      <SearchBar searchRepo= {searchRepo} searchInput = {searchInput} setSearchInput = {setSearchInput} fetchRepos = {fetchRepos}/>
      {/*getRepo.length nous donne le total des résultats renvoyés par le filtrage*/}
      <MessageAlert message = {message}/>
      {loadingRepos && <Spinner />}
      <ReposResults ReposItems = {getRepo} />
    </div>
  );
};
// == Export
export default App;
