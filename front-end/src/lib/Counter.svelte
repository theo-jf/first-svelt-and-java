<script>
  import axios from 'axios';

  let response = 'Press the button!';
  const testServer = async () => {
    try {
      response = await axios.get('api/server');
    } catch (error) {
      console.log(error);
      response = `The server doesn't appear to be connected ...`
    }
  };
</script>

<button on:click={testServer}>
  Test the server
</button>

<p>
  {response}
</p>
