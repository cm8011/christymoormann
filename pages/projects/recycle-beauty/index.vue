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
          <a :href="website" class="button" :title="`Visit ${project}`" target="_blank">Visit {{ project }} &#62;</a>
        </div>
      </div>
      <div>
        <h2 class="font-32 color-brown uppercase">{{ project }}</h2>
        <p class="uppercase font-20 color-pink2 no-margin-bottom">{{ industry }}</p>
        <p class="font-14">{{ date }}</p>
        <p>{{ description }}</p>
        <p>My work for this project included:</p>
        <div class="col-3">
          <div>
            <div>
              <div><i class="fas fa-pen-nib font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Design</span>
              <p class="font-14">Page design and layout, fonts, and colors.  I recommended <a class="link" href="https://99designs.com/" target="_blank">99designs</a> to the client for her logo.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-code font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Code</span>
              <p class="font-14">HTML and CSS3 with a simple build system.  Includes an embedded Mailchimp form for newsletter signups.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-server font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Maintenance</span>
              <p class="font-14">Monthly hosting, email account setup, and occasional content updates for the site.</p>
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
      project: "Recycle Beauty",
      industry: "Non-profit organization",
      date: "Apr 2016",
      website: "http://recyclebeauty.org",
      image: "/images/recyclebeauty-large.png",
      summary: "Recycle Beauty has a unique mission - to connect people with excess beauty products with those in need.",
      description: "It was an honor to create a one-page site, complete with sign-up form integration, for the founder of Recycle Beauty.  The Recycle Beauty website displays information about 'drop-off events' where busy people can conveniently donate their used and unused products."
    }
  },
  computed: {
    path() {
      return `${this.content.url}/projects/recycle-beauty`;
    },
    title() {
      return `${this.content.name} | Recycle Beauty Project`;
    }
  },
  head() {
    return this.addCommonFrontMatter(this);
  }
}
</script>