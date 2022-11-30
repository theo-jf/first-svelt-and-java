import axios from 'axios';

export default function RockItem({i, fetchRocks}) {

    const removeRock = async () => {
        new Audio('./pop.mp3').play();
        try {
            let response = await axios.delete(`api/server/remove/${i}`);
            console.log(response.data)
            fetchRocks();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="rock">
            <p>
                <img className="DWAYNE" alt="ROCK" src="https://media.tenor.com/IyweQyb3MhIAAAAi/the-rock-sus.gif" />
            </p>
            <button onClick={removeRock}>
                X
            </button>
        </div>
    );
}