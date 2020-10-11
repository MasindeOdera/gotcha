import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { connect, useDispatch, useSelector } from 'react-redux';
import logo from '../../images/logo.png';
import './styles.scss';

const Results = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.repos);
    const choice = state.choice;
    const solution = state.solution;
    const photo = state.photo;

    //If a vehicle has been fond via license plate, then look for image.
    if (solution) {
        let query = choice.merk;
        let uri = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=009973936156204013139%3Anrb9qxuk0na&num=1&key=AIzaSyCDfpyxYE4gK2zgNltdbAjEATo5fcP5uq8`;
        fetch(uri)
        .then(res => res.json())
        .then(res => {
            console.log("Photo:", res);
            let photo = res.items[0].pagemap.cse_thumbnail[0].src;
            console.log(photo);
            if (photo !== undefined) {
                dispatch({ type: "ADD_PHOTO", payload: photo });
            }
        })
        .catch(error => {
            console.error({error});
        })
    }

    //If there is an image available, use it, otherwise use logo as default.
    const image = solution && photo ? photo : logo;

    const vehicle = solution ? <Card>
        <Card.Content>
            <Image
                floated='right'
                size='tiny'
                src={image}
            />
            <Card.Header>Car: {choice.merk}</Card.Header>
            <Card.Meta>License Plate: {choice.kenteken}</Card.Meta>
            <Card.Description>
                <strong>Commercial Name:</strong> {choice.handelsbenaming}
                    </Card.Description>
            <Card.Description>
                <strong>Type:</strong> {choice.voertuigsoort}
                    </Card.Description>
            <Card.Description>
                <strong>First Color:</strong> {choice.eerste_kleur}
                    </Card.Description>
            <Card.Description>
                <strong>Number of seats:</strong> {choice.aantal_zitplaatsen}
                    </Card.Description>
            <Card.Description>
                <strong>Catalog price:</strong> €{choice.catalogusprijs}
                    </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color='green'>
                    Save
                    </Button>
                <Button basic color='red'>
                    Ignore
                    </Button>
            </div>
        </Card.Content>
    </Card> : null;

    return (
        <div className="results">
            {solution ? <h1>Matching Vehicle:</h1> : null}
            <Card.Group>
                { vehicle }
            </Card.Group>
        </div>
    )
}

export default connect(null)(Results);
