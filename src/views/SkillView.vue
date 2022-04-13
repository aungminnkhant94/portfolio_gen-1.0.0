<template>
  <div class="about">
    <SkillsPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import SkillsPage from '@/components/SkillsPage.vue'

export default {
  name: 'HomeView',
  components: {
    SkillsPage
  }
}
</script>