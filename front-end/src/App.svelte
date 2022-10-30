<script>
  import axios from 'axios';

  import RockGeneratorButton from "./lib/RockGeneratorButton.svelte";
  import RockList from "./lib/RockList.svelte";

	import { useEffect } from './lib/hooks.js';

  let response = 'Press the button!';
  let rocks = 0;

  useEffect(() => {
    fetchRocks();
  }, () => [rocks]);

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
</script>

<main>
  <div class="card">
    <RockGeneratorButton response={response} addRock={addRock} />
  </div>

  <div class="rocks">
    <RockList rocks={rocks} fetchRocks={fetchRocks}/>
  </div>

</main>

<style>
  .rocks {
    display: inline;
    text-align: left;
  }
</style>
