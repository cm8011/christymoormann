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
          <p>The store is accessible only to CCLI customers.  For more information on this company, visit <a class="link" href="https://ccli.com" target="_blank" title="Visit CCLI's website">CCLI's website</a></p>
        </div>
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
              <div><i class="fas fa-pen-nib font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Design</span>
              <p class="font-14">Produced Sketch mockups to review with key stakeholders and team members.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-code font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Code</span>
              <p class="font-14">Created fully coded HTML &amp; CSS prototype using custom component library.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-chart-line font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Analytics</span>
              <p class="font-14">Did post-analysis on behavior flow using Google Analytics and Google Tag Manager.</p>
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
      project: "CCLI Store",
      industry: "music licensing",
      date: "Sep 2018",
      website: "https://globalstore.ccli.com",
      image: "/images/ccli-large.png",
      summary: "CCLI, or Christian Copyright Licensing International, provides information and resources for churches and copyright owners around the world.",
      description: "In order to expand services to a global audience, CCLI needed a way to allow customers to easily renew their annual subscription online.  As CCLI's full-time Senior UX Designer, I worked inside a small project team to design and produce a flow that allowed a targeted set of customers to view services that are due for renewal and pay online with a credit card."
    }
  },
  computed: {
    path() {
      return `${this.content.url}/projects/ccli`;
    },
    title() {
      return `${this.content.name} | CCLI Store Project`;
    }
  },
  head() {
    return this.addCommonFrontMatter(this);
  }
}
</script>