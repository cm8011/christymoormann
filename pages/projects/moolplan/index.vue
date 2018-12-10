<template>
  <section class="bg-white">
    <div class="content pt-3 pb-3">
    <div class="heading-with-button">
      <h2>Clients &amp; Projects</h2>
      <nuxt-link to="/projects" class="button">See all projects</nuxt-link>
    </div>
    <div class="divider mb-2"></div>
    <div class="col-2">
      <div>
        <v-image :src="image" class="pb-1" :alt="`Screenshot of ${project} website`" />
        <div class="center">
          <p>This app is accessible only to moolPLAN customers.  For more information on this company, visit <a class="link" href="https://moolplan.com" target="_blank" title="Visit moolPLAN's website">moolPLAN's website</a>.</p>        </div>
      </div>
      <div>
        <h2 class="font-32 color-brown uppercase">{{ project }}</h2>
        <p class="uppercase font-20 color-pink2 no-margin-bottom">{{ industry }}</p>
        <p class="font-14">{{ date }}</p>
        <p class="font-24"><em>{{ summary }}</em></p>
        <p>{{ description }}</p>
        <p>My work for this project included:</p>
        <div class="col-3">
          <div>
            <div>
              <div><i class="fas fa-search font-24 color-pink pb-05"></i></div>
              <span class="uppercase">UX Audit of Survey</span>
              <p class="font-14">Reviewed the initial survey that went out to MVP audience and made UX recommendations on format and flow.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-pen-nib font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Design</span>
              <p class="font-14">Site layout and interaction design. For fonts and colors, I worked within branding guidelines already set by a the company's marketing agency.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-code font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Code</span>
              <p class="font-14">Static, clickable prototypes with Zurb Foundation's <a class="link" href="https://foundation.zurb.com/sites/docs/panini.html" target="_blank" title="Visit the Panini docs">Panini</a> templating system and the <a class="link" href="https://getbootstrap.com/" target="_blank" title="Visit the Bootstrap component library">Bootstrap</a> component library.</p>
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
import addCommonFrontMatter from '~/plugins/addCommonFrontMatter'

export default {
  components : {
    'v-image': Image
  },
  data () {
    return {
      project: "moolPLAN",
      industry: "Planning Software",
      date: "Aug 2017",
      website: "https://app.moolplan.com",
      image: "/images/moolplan-large.png",
      summary: "moolPLAN is an online application designed to help couples build a stronger foundation together while planning for the future.",
      description: "This online software was created to give couples an easy way to talk about values, goals, and finances.  I was hired as a consultant to create an onboarding process for new users."
    }
  },
  computed: {
    path() {
      return `${this.content.url}/projects/moolplan`;
    },
    title() {
      return `${this.content.name} | moolPLAN Project`;
    }
  },
  head() {
    return this.addCommonFrontMatter(this);
  }
}
</script>