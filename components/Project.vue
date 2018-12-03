<template>
  <div class="col-2">
    <div>
      <v-image class="pb-1" :alt="`Screenshot of ${project.info.name}`" srcSet/>
      <div class="center">
        <a :href="project.info.websiteLink" class="button" :title="`Visit ${project.info.name}`" target="_blank">Visit {{ project.info.name }} &#62;</a>
      </div>
    </div>
    <div>
      <h2 class="font-32 color-brown uppercase">{{ project.info.name }}</h2>
      <p class="uppercase font-20 color-pink2">{{ project.info.industry }}</p>
      <p class="font-24"><em>{{ project.info.summary }}</em></p>
      <p>{{ project.info.description }}</p>
      <p>My work for this project included:</p>
      <div class="col-3">
        <div v-for="(item, i) in project.info.work" :key="i">
          <div>
            <div><i :class="`${item.icon} font-24 color-pink pb-1`"></i></div>
            <span class="uppercase">{{ item.heading }}</span>
            <p class="font-14">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from '~/components/Image'
import Projects from '~/assets/projects'

export default {
  data () {
    return {
      projects: Projects,
      currProject: [],
      project: []
    }
  },
  components: {
    'v-image': Image,
  },
  created: function () {
    let vm = this
    for(let i = 0; i < vm.projects.length; i +=1) {
      if(vm.projects[i].id === vm.$route.params.id) {
        this.currProject = vm.projects[i]
        console.log(this.currProject)
      }
    }
  }
}
</script>

<style>

</style>
