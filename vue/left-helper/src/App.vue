<template>
  <div id="app">
    <!-- <section>header</section> -->
    <section class="content">
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

<style scoped>
.content{
  margin-bottom: 55px;
}
</style>
