import React, { useState } from 'react';
import axios from 'axios';
import DogPhoto from './DogPhoto';
import Button from './ButtonDog';

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhotos = async () => {
    const result = await axios.get('https://dog.ceo/api/breeds/image/random');
    const photo = await result.data.message;
    console.log(photo);
    return photo;
  };

  const handleClick = async () => {
    const photo = await getDogPhotos();
    await setDogPhotos([...dogPhotos, photo]);
  };

  return (
    <div>
      <Button onClick={handleClick} />
      {dogPhotos.length > 0 ? <DogPhoto data={dogPhotos} /> : <h4>Click Button</h4>}
    </div>
  );
}

export default DogGallery;
