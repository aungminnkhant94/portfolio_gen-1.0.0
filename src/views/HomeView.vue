<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ProfilePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfilePage from '@/components/ProfilePage.vue'

export default {
  name: 'HomeView',
  components: {
    ProfilePage
  }
}
</script>
