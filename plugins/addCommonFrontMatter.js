import Vue from 'vue'

// export default () => {
  Vue.mixin({
    methods: {
      addCommonFrontMatter: (pageComponent) => {
        return {
          title: pageComponent.title,
          meta: [
            { 
              hid: 'description', 
              name: 'description', 
              content: pageComponent.description
            },
            {property: 'og:title', content: pageComponent.title},
            {property: 'og:site-name', content: pageComponent.content.name},
            {property: 'og:url', content: pageComponent.content.url},
            {property: 'og:image', content: pageComponent.content.logo},
            {property: 'og:description', content: pageComponent.description},
            {name: 'twitter:card', content: 'summary'},
            {name: 'twitter:site', content: pageComponent.content.url},
            {name: 'twitter:title', content: pageComponent.title},
            {name: 'twitter:description', content: pageComponent.description},
            {name: 'twitter:creator', content: pageComponent.content.twitterHandle},
            {name: 'twitter:image:src', content: pageComponent.content.logo},
            {itemprop: 'name', content: pageComponent.title},
            {itemprop: 'description', content: pageComponent.description},
            {itemprop: 'image', content: pageComponent.content.logo}
          ],
          links: [
            {rel: 'canonical', href: pageComponent.path}
          ]
        }
      }
    }
  })  
// }
