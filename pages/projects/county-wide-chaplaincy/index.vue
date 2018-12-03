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
              <p class="font-14">Logo, page layout, and design.  Slight re-design done in May 2016 along with MailChimp newsletter integration.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-code font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Code</span>
              <p class="font-14">This was originally done in WordPress, but then I moved it into a much simpler static site using Zurb Foundation's <a class="link" href="https://foundation.zurb.com/sites/docs/panini.html" target="_blank" title="Visit the Panini docs">Panini</a> templating system.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-server font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Maintenance</span>
              <p class="font-14">Monthly hosting, email account setup, and monthly content updates for the site.</p>
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
      project: "County-Wide Chaplaincy",
      industry: "non-profit organization",
      date: "Feb 2011",
      website: "http://911chaplain.org/",
      image: "/images/chaplaincy-large.png",
      summary: "County-Wide Chaplaincy is an organization dedicated to providing comfort and guidance at the scene of traumatic injury or death.",
      description: "The Chaplaincy is a non-profit organization located in the Clark County district of Washington State.  Since they rely on donations, I set up a website to provide information on how to give to the Chaplaincy and learn more about chaplain services."
    }
  }
}
</script>