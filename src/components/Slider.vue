<template>
  <div class="slider">
    <h1>slider</h1>
    <button @click="backpage">BACK</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	backpage(){
      history.back()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
