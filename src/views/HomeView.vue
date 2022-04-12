<template>
  <div class="home">
    <ProjectsPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectsPage from '@/components/ProjectsPage.vue'

export default {
  name: 'HomeView',
  components: {
    ProjectsPage
  }
}
</script>
