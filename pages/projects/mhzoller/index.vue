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
        <p class="font-24"><em>{{ summary }}</em></p>
        <p>{{ description }}</p>
        <p>My work for this project included:</p>
        <div class="col-3">
          <div>
            <div>
              <div><i class="fas fa-pen-nib font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Design</span>
              <p class="font-14">Page design and layout, fonts, and colors.  I created a vector version of the existing logo using Sketch.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-code font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Code</span>
              <p class="font-14">HTML and CSS3 with a simple build system.  I used the <a class="link" href="https://materializecss.com/" target="_blank">Materialize</a> framework.</p>
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
      project: "M.H. Zoller",
      industry: "real estate & property management",
      date: "May 2017",
      website: "http://mhzoller.com",
      image: "/images/mhzoller-large.png",
      summary: "M.H. Zoller Company provides unique opportunities for investors and purchasers alike.",
      description: "This company serves a diverse audience of home buyers, renters, and property investors. I enjoyed the challenge of creating an experience that showcased properties while connecting to the other facets that M.H. Zoller provides."
    }
  },
  computed: {
    path() {
      return `${this.content.url}/projects/mhzoller`;
    },
    title() {
      return `${this.content.name} | M.H. Zoller Project`;
    }
  },
  head() {
    return this.addCommonFrontMatter(this);
  }
}
</script>