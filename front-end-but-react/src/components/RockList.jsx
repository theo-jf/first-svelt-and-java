import RockItem from "./RockItem";

export default function RockList({rocks, fetchRocks}) {

    return (
        <>
            {[...Array(rocks)].map((x, i) => {
                return(
                    <RockItem key={i} i={i} fetchRocks={fetchRocks}/>
                );
            })}
        </>
    );
}