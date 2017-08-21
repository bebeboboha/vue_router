<template>
  <div class="announ">
   <h1>Announcement</h1>
   <button @click="backpage">BACK</button>
  </div>
</template>

<script>
export default {
  name: 'announ',
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
