<template>
  <div id="app">
    <router-view/>
    <home-footer></home-footer>
  </div>
</template>

<script>

import HomeFooter from './components/Footer'
export default {
  name: 'App',
  components:{
        HomeFooter
    }
}

</script>

<style>

</style>
