import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody, CardHeader, ListGroup, ListGroupItemHeading, ListGroupItem,
} from 'reactstrap';

import styles from './CharacterCard.module.css';

const CharacterCard = ({ character, image }) => (
  <Card className={styles.Card}>
    <CardImg top width="100%" src={image[0].image} />
    <CardHeader tag="h2">{character.name}</CardHeader>
    <CardBody>
      <ListGroup flush>
        <ListGroupItemHeading tag="h3">Basic Stats</ListGroupItemHeading>
        <ListGroupItem className={styles.ListGroupItem}>
          {`Height: ${character.height}`}
        </ListGroupItem>
        <ListGroupItem className={styles.ListGroupItem}>
          {`Homeworld: ${character.mass}`}
        </ListGroupItem>
        <ListGroupItem className={styles.ListGroupItem}>
          {`Birth Year: ${character.birth_year}`}
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    birth_year: PropTypes.string,
  }).isRequired,
  image: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default CharacterCard;
