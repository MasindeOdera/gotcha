import React, { useEffect, useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { connect, useDispatch, useSelector } from 'react-redux';
import logo from '../../images/logo.png';
import './styles.scss';

const Results = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.repos);
    const choice = state.choice;
    const solution = state.solution;
    console.log(state, choice);

    const vehicle = solution ? <Card>
        <Card.Content>
            <Image
                floated='right'
                size='tiny'
                src={logo}
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
