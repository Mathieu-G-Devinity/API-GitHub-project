import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';


const ReposResults = ({ReposItems}) => (
<Card.Group itemsPerRow={3}>

{
  //On récupère la liste filtrée et on map dessus pour afficher les résultats 
  //Les CARDS viennent de Semantic UI et permettent une mise en page rapide 
  ReposItems().map(
            (data) => <Card key={data.id}>
            <Image src={data.owner.avatar_url}/> {/*Ne pas utiliser ...data ici car cela créé un conflit avec les enfants apelés data.quelquechose*/}
            <Card.Content>
              <Card.Header>{data.name}</Card.Header>
              <Card.Meta>{data.owner.login}</Card.Meta>
              <Card.Description>
              {data.description}
              </Card.Description>
            </Card.Content>
          </Card>,
          ) 
        }
</Card.Group>
)

//On valide nos props
ReposResults.propTypes = {
  ReposItems: PropTypes.func.isRequired,
};

export default ReposResults
