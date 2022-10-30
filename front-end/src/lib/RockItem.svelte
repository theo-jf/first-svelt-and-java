<script>
    export let i;
    export let fetchRocks;

    import axios from 'axios';

    const removeRock = async () => {
        let response = await axios.delete(`api/server/remove/${i}`);
        console.log(response.data)
        fetchRocks();
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