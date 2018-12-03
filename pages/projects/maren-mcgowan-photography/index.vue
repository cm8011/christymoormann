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
              <p class="font-14">Page design and layout, fonts, and colors.  Maren provided the excellent imagery, of course!</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-code font-24 color-pink pb-05"></i></div>
              <span class="uppercase">CMS &amp; Blog Setup</span>
              <p class="font-14">This site was built with <a class="link" href="https://craftcms.com/" target="_blank" title="Visit Craft CMS">Craft CMS</a> and completely custom CSS.</p>
            </div>
          </div>
          <div>
            <div>
              <div><i class="fas fa-server font-24 color-pink pb-05"></i></div>
              <span class="uppercase">Maintenance</span>
              <p class="font-14">Monthly hosting and email account setup.</p>
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
      project: "Maren McGowan Photography",
      industry: "photography",
      date: "Jan 2013",
      website: "http://marenphoto.com/",
      image: "/images/marenphoto-large.png",
      summary: "Maren McGowan specializes in film photography and writes photo essays on local businesses.",
      description: "As an avid writer and lover of film-photography, Maren McGowan needed a place to showcase her work while also drawing in new business for her wedding and special occasion photography services."
    }
  }
}
</script>