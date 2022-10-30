<script>
    export let i;
    export let fetchRocks;

    import axios from 'axios';

    const removeRock = async () => {
        new Audio('./[YT2mp3.info] - POP - Sound Effect (320kbps).mp3').play();
        try {
            let response = await axios.delete(`api/server/remove/${i}`);
            console.log(response.data)
            fetchRocks();
        } catch (error) {
            console.log(error)
        }
    }
</script>


<div class="rock">
    <p>
        <img class="DWAYNE" alt="ROCK" src="https://media.tenor.com/IyweQyb3MhIAAAAi/the-rock-sus.gif" />
    </p>
    <button on:click={removeRock}>
        X
    </button>
</div>


<style>
    .rock {
      display: inline-block;
      padding: 30px;
    }

    .DWAYNE {
        width: 100px;
    }
  </style>