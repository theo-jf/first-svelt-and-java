<script>
  export let rocks
  export let fetchRocks;
  import RockItem from "./RockItem.svelte";
</script>


{#each Array(rocks) as _, i}
  <RockItem i={i} fetchRocks={fetchRocks}/>
{/each}
  