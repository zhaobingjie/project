<template>
  <div id="app">
    <!-- <section>header</section> -->
    <section>
      <router-view/>
    </section>
    <section>
      <tabbar/>
    </section>
  </div>
</template>

<script>
import tabbar from './components/tabbar';
export default {
  name: 'App',
  components : {
    tabbar
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
