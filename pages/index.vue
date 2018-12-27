<template>
  <div>
    <section class="bg-white">
      <div class="content pt-3 pb-3">
        <div class="heading-with-button">
          <h2>Clients &amp; Projects</h2>
          <nuxt-link to="/projects" class="button">See all projects</nuxt-link>
        </div>
        <div class="col-3">
          <div v-for="project in projects.slice(0, 3)" :key="project.id" class="box center">
          <v-image :src="project.info.thumb" class="pb-1" :alt="`Screenshot of ${project.info.name}`" />
          <h3 class="font-24 color-brown uppercase">{{ project.info.name }}</h3>
          <span class="uppercase font-13 pb-1">{{ project.info.industry }}</span>
          <p>{{ project.info.summary }}</p>
          <nuxt-link :to="`/projects/${project.id}`" class="flat-button" :title="`Read more about ${project.info.name}`">Read more &#62;</nuxt-link>
        </div>
        </div>
      </div>
    </section>
    <section>
      <div class="content pt-3 pb-3">
        <h2 class="pb-1">Design Process</h2>
        <div class="col-3">
          <div>
            <p>When approached about building a website, I usually launch in to question-asking mode.  What goals do you have?  What do you hope to accomplish?  What are the top three things you want people to do on the site?</p>
            <p>Websites aren't just about aesthetic appeal and big, beautiful images.  They are there to help people find information about you and your business.</p>
            <p>Every element I design is intentional, taking your audience and your business goals into consideration.  This is why I start my process with user research and data analysis.</p>
          </div>
          <div>
            <div class="bullet-items">
              <div>
                <span>1</span>
                <span>User Research <span class="font-13">&middot; Understanding the audience</span></span>
                <span></span>
              </div>
              <div>
                <span>2</span>
                <span>Data Analysis <span class="font-13">&middot; Establishing a baseline</span></span>
                <span></span>
              </div>
              <div>
                <span>3</span>
                <span>Concept Development <span class="font-13">&middot; Sketching a plan</span></span>
                <span></span>
              </div>
              <div>
                <span>4</span>
                <span>UI Design <span class="font-13">&middot; Visualizing the outcome</span></span>
                <span></span>
              </div>
              <div>
                <span>5</span>
                <span>Development <span class="font-13">&middot; Making it happen</span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div>
            <p>Once I understand how to align the needs of your customer with the goals of your business, I start problem-solving mode.  This usually involves sketching out some rough concepts - not always pretty, but good for conversation.</p>
            <p>Concepts quickly evolve into graphical representations of what your website will look like.  During this time, I often work with graphic designers and content writers to complete the picture.</p>
            <p>With a plan in place, I get to work developing your site.  I frequently work side-by-side with developers, ensuring that the outcome isn't just a literal execution of the design, but a high-quality product that helps you succeed.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div class="content pt-3 pb-3">
        <h2 class="pb-1">About Me</h2>
        <div class="col-3">
          <div>
            <div>
              <i class="fas fa-pencil-ruler font-32 color-pink pb-1"></i>
              <h3 class="color-body-font-light font-14 uppercase pb-1">Design is my life</h3>
              <p>I currently reside in the Pacific Northwest with my family and spend my time living and breathing design.  It's much more than just a job for me, it's a lifestyle.  When people hear that I'm a designer, they immediately think about graphics and artwork which, while a crucial part of the user experience, does not encompass all that I do.</p>
            </div>
          </div>
          <div>
            <div>
              <i class="fas fa-fire font-32 color-pink pb-1"></i>
              <h3 class="color-body-font-light font-14 uppercase pb-1">What moves me</h3>
              <p>People are multi-faceted and complicated, which is why User Experience Design is so fascinating.  It deals with the deeper, more psychological aspects of design and digs into the complexity of how and why humans interact with technology.  This is the stuff that keeps my fire going. And this is why I read psychology books and papers for fun.</p>
            </div>
          </div>
          <div>
            <div>
              <i class="fas fa-flask font-32 color-pink pb-1"></i>
              <h3 class="color-body-font-light font-14 uppercase pb-1">What I'm Up To Now</h3>
              <p>My <a class="link" href="https://franklintarter.com" target="_blank" title="Visit Franklin Tarter's site">business partner</a> and I have recently launched a web application design and development company called <a class="link" href="https://mortar-labs.com" target="_blank" title="Visit Mortar Labs">Mortar Labs</a>.  Together, we are focused on building meaningful connections in the technology space and on creating experiences that make a difference.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Image from '~/components/Image'
import Projects from '~/assets/projects'
import addCommonFrontMatter from '~/plugins/addCommonFrontMatter'

export default {
  components: {
    'v-image': Image
  },
  data () {
    return {
      projects: Projects,
      description:
        "Christy Moormann is a Senior UX Designer in the Portland, Oregon and Vancouver, Washington area with 8+ years of experience leading the design process from user research and design to code implementation and post-deployment analytics."
    }
  },
  computed: {
    path() {
      return `${this.content.url}`;
    },
    title() {
      return `${this.content.name} | UX Design, Web Design, Front-End Development`;
    }
  },
  head() {
    return this.addCommonFrontMatter(this);
  },
  layout: 'home'
}
</script>


<style lang="scss" scoped>


</style>


