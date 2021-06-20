import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';


const ReposResults = ({getRepo}) => (
<Card.Group itemsPerRow={3}>

{
  //On récupère la liste filtrée et on map dessus pour afficher les résultats 
  //Les CARDS viennent de Semantic UI et permettent une mise en page rapide 
  getRepo.map(
            (data) => <Card key={data.id} {...data}>
            <Image src={data.owner.avatar_url}  />
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
  getRepo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ReposResults
