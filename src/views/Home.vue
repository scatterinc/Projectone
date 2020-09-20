<template>
  <div class="home">
    <pre v-html="items" v-if="items.length" />
    <div v-else>loading...</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    items: []
  }),
  mounted () {
    setTimeout(() => {
      this.$http.get('https://jsonplaceholder.typicode.com/todos').then(r => { this.items = r.data; });
    }, 5000);
  }
};
</script>
