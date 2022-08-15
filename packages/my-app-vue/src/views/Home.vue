<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Button>Default</Button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from '@juntossomosmais/venice-vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Button,
  },
});
</script>
