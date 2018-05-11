<template>
  <div>
    <ul v-for="item in items">
      <li>{{item.catid}}</li>
      <li>{{item.catname}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      items:[]
    }
  },
  created(){
    var _this = this;
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalCate"
    axios.get(url).then(function(res){
     _this.items = res.data.result
      console.log(_this.items)
     }).catch(function(err){
       console.log(err)
     })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
