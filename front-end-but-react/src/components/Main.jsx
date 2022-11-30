import axios from 'axios';

import { useEffect } from 'react';

export default function Main() {
    
    let response = 'Press the button!';
    let rocks = 0;

    useEffect(() => {
        fetchRocks();
    }, [rocks]);

    
    const fetchRocks = async () => {
        try {
          let serverResponse = await axios.get('api/server/fetch');
          rocks = serverResponse.data;
          response = `${rocks} rocks`;
        } catch (error) {
          console.log(error);
          response = `The server doesn't appear to be connected ...`
        }
      }

    const addRock = async () => {
        new Audio('./l-e5pazuT1o_48.mp3').play();
        try {
          let addMessage = await axios.post('api/server/add');
          console.log(addMessage.data);
          fetchRocks();
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <p>Hey!</p>
    );

}