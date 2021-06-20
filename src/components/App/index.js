// == Import npm
import React, { useState } from 'react';
// Import de semantic UI
import 'semantic-ui-css/semantic.min.css'

//Import des composants :
import SearchBar from 'src/components/SearchBar'
import MessageAlert from 'src/components/MessageAlert'
import ReposResults from 'src/components/ReposResults'
import Header from 'src/components/Header'

//import des données pour effectuer les tests de mes props
import datasRepo from 'src/data/repos.js'

// == Import
import './styles.css';


// == Composant
const App = () => {
  // Nos states 
  // -> Les DATAS
  const [datas, setdatas] = useState(datasRepo);
  // -> La barre de recherche linkée à l'input (champs contrôlé)
  const [search, setSearch] = useState('');
  // La fonction qui permet de modifier le state de la barra de recherche
  const searchRepo = (search) => {
    setSearch(search);
  };

  // on va retourner la liste des repos filtrés
  const getRepo = () => {
    
    // On récupère nos données qu'on passe en minuscule
    const loweredSearch = search.toLowerCase();
    const dataItems = datas.items;
    // dans le cas où le champ de recherche est vide, on renvoie la liste complète
    if (search === '') {
      return dataItems;
    } 
    // Sinon on filtre les résultats en fonction de ce qui a été rentré dans l'input
    return dataItems.filter(
        (data) => data.name.toLowerCase().includes(loweredSearch),
    );
  };

  //console.log(getRepo().length);
  // On ajoute un écouteur sur la touche entrée qui va nous permettre
  // de lancer la recherche du ou des contenu(s) correpondant(s)
  document.addEventListener('keyup', (evt) => {
    console.log(evt.key);
    if (evt.key === 'Enter') {
      //Petite fonction qui permets de gérer le submit
      
      return getRepo();
    }
  });

  //console.log(datas.total_count);

  return (
    <div className="app">
      <Header/>
      <SearchBar searchRepo= {searchRepo} search={search}/>
      {/*getRepo.length nous donne le total des résultats renvoyés par le filtrage*/}
      <MessageAlert countResults = {getRepo().length}/>
      <ReposResults fakeDatasItems = {datas.items}  getRepo={getRepo()}/>
    </div>
  );
};
// == Export
export default App;
