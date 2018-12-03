<template>
  <section class="bg-white">
    <div class="content pt-3 pb-3">
    <div class="heading-with-button">
      <h2>{{ title }}</h2>
      <nuxt-link to="/projects" class="button">See all projects</nuxt-link>
    </div>
    <div class="divider mb-2"></div>
    <div class="col-2">
      <div>
        <v-image :src="image" class="pb-1" :alt="`Screenshot of ${project} website`" />
        <div class="center">
          <a :href="website" class="button" :title="`Visit ${project}`" target="_blank">Visit {{ project }} &#62;</a>
        </div>
      </div>
      <div>
        <h2 class="font-32 color-brown uppercase">{{ project }}</h2>
        <p class="uppercase font-20 color-pink2 no-margin-bottom">{{ industry }}</p>
        <p class="font-14">{{ date }}</p>
        <p class="font-24"><em>{{ summary }}</em></p>
        <p>{{ description }}</p>
        <p>In this project, my <a class="link" href="https://franklintarter.com/" target="blank" title="Visit Franklin Tarter's portfolio">partner</a> and I collaborated on:</p>
        <div class="col-3">
          <div>
            <div>
              <div><i class="fas fa-pen-nib font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Design</span>
              <p class="font-14">Produced Sketch mockups to collaborate on design and create vector illustrations.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-code font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Code</span>
              <p class="font-14">Used <a class="link" href="https://nuxtjs.org/guide/" target="_blank" title="Learn about Nuxt">Nuxt</a>, a Vue.js framework for creating applications, and custom CSS.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-server font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Hosting</span>
              <p class="font-14">We are using Firebase for easy deployment and low-cost hosting.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>

import Image from '~/components/Image'
import Project from '~/assets/projects'

export default {
  components : {
    'v-image': Image
  },
  data () {
    return {
      title: "Clients & Projects",
      project: "Mortar Labs",
      industry: "web application design & development",
      date: "Aug 2018",
      website: "https://mortar-labs.com",
      image: "/images/mortar-labs-large.png",
      summary: "Mortar Labs is a company that designs and develops websites and web applications.",
      description: "My business partner joined forces for the greater good of the web application development industry and started Mortar Labs.  We seek to help people reach their maximum potential on the web, whether they are small businesses just getting started or entrepreneurs looking for a way to create and test an MVP.  We co-designed and developed our website and had an absolute blast doing it."
    }
  }
}
</script>