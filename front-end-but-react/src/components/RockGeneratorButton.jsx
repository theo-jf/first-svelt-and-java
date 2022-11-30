
export default function RockGeneratorButton({addRock, response}) {

    return (
        <>
            <button onClick={addRock}>
                Add a rock
            </button>
            <p>
                {response}
            </p>
        </>
    );
}