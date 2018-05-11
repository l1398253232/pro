<template>
  <div id="app">
    <header1/>
    <router-view/>
    <footer1/>
  </div>
</template>

<script>
import header1 from '@/components/header1';
import footer1 from '@/components/footer1'
export default {
  data() {
    return {
      
    }
  },
  components:{
    'header1':header1,
    'footer1': footer1
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
