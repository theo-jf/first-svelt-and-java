import axios from 'axios';

import RockGeneratorButton from './RockGeneratorButton';
import RockList from './RockList';

import { useEffect, useState } from 'react';

export default function Main() {

    const [rocks, setRocks] = useState(0);
    const [response, setResponse] = useState('Press the button!');

    useEffect(() => {
        fetchRocks();
    }, [rocks]);

    const fetchRocks = async () => {
        try {
          let serverResponse = await axios.get('api/server/fetch');
          setRocks(serverResponse.data);
          setResponse(`${rocks} rocks`);
        } catch (error) {
          console.log(error);
          setResponse(`The server doesn't appear to be connected ...`);
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
        <main>
            <div className="card">
                <RockGeneratorButton response={response} addRock={addRock} />
            </div>

            <div className="rocks">
                <RockList rocks={rocks} fetchRocks={fetchRocks}/>
            </div>
        </main>
    );

}