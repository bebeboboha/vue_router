<template>
  <div class="main">
    <nav> 
      <router-link :to="{name : 'slider'}">Slider</router-link>
      <router-link :to="{name : 'announcement'}">Announcement</router-link>
      <router-link :to="{name : 'booklist'}">Booklist</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Announcement from '@/components/Announcement'
import Booklist from '@/components/Booklist'
import Slider from '@/components/Slider'


export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Announcement,
    Booklist,
    Slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
