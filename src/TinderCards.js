import { SwipeDown } from '@mui/icons-material'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {

    const [people, setPeople ] = useState([
        {
            name: 'Elon Musk',
            url: 'https://cdn.motor1.com/images/mgl/wllWOo/s3/elon-musk-photo.webp'
        },
        {
            name: 'AJ Blanco',
            url: 'https://i.pinimg.com/736x/d5/3d/a6/d53da6c7c4dbb742a238a484e1ba37ae.jpg'
        },
        {
            name: 'Kevin Leister',
            url: 'https://www.dmarge.com/wp-content/uploads/2017/01/FEAT-1.jpg'
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + 'left the screen!');
    };

  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
        {people.map((person) => (
            <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up', 'down']}
                onSwipe={(dir) => SwipeDown(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
            >
                <div
                    style={{ backgroundImage: `url(${person.url})`}}
                    className='card'
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
  )
}

export default TinderCards