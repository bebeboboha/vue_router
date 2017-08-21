<template>
  <div class="booklist">
   <h1>booklist</h1>
   <button @click="backpage">BACK</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'booklist',
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
