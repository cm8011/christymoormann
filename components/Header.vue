<template>
  <header>
    <div class="logo center pt-3">
      <nuxt-link class="logo-mark" to="/"><img src="/images/logo.svg" alt="Logo for Christy Moormann shows Christy's first and last initials." /></nuxt-link>
      <h1 class="font-24 uppercase">Christy Moormann</h1>
      <p class="font-18 color-brown mb-1">UX Design, Web Design &amp; Front-End Development</p>
    </div>
    <!-- <nav>
      <div class="desktop-menu hide-for-small">
        <nuxt-link to="/projects" class="active">Projects</nuxt-link>
        <nuxt-link to="/">About</nuxt-link>
        <nuxt-link to="/">Resume</nuxt-link>
      </div>
      <button class="mobile-menu-button show-for-small" :class="{ open: isOpen }" @click="showMenu">
        <span>Menu</span>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <transition name="fade">
        <div class="mobile-menu" v-show="mobileMenu">
          <nuxt-link to="/projects" class="active">Work</nuxt-link>
          <nuxt-link to="/">About</nuxt-link>
          <nuxt-link to="/">Resume</nuxt-link>
        </div>
      </transition>
    </nav> -->
  </header>
</template>

<script>

export default {
  data () {
    return {
      mobileMenu: false,
      isOpen: false
    }
  },
  methods: {
    showMenu () {
      this.mobileMenu = !this.mobileMenu
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/variables';

header {
  align-items: center;
  display: grid;
  grid-area: header;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: auto auto;
  grid-template-areas:
  ". logo ."
  ". hero .";
  padding: 0;
  @media screen and (max-width: $medium) {
    grid-template-columns: 1rem auto auto 1rem;
  }
  .logo {
    grid-area: logo;
    .logo-mark {
      background-color: $white2;
      border-bottom: 1px solid rgba($pink, 0.5);
      // border-radius: 6rem;
      height: 3rem;
      width: 3rem;
      display: flex;
      justify-content: center;
      margin: 0 auto 1rem;
      align-items: center;
      transition: $transition;
      &:hover {
        background: $pink;
      }
    }
  }
}

nav {
  display: grid;
  grid-area: nav;
  width: 100%;
  a, a:visited {
    align-self: center;
    color: $black;
    font-family: $nova-font-family;
    text-align: center;
    text-decoration: none;
    transition: $transition;
    &.active {
      color: $pink2;
    }
    &:hover {
      color: $pink2;
    }
    &.button:hover {
      color: $pink !important;
    }
  }
  .desktop-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
}

.mobile-menu-button {
  align-items: center;
  justify-self: end;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  outline: none;
  padding: 0;
  position: relative;
  z-index: 2;
  > span {
    font-weight: bold;
    margin-right: .5rem;
    text-transform: uppercase;
  }
  > div {
    height: 15px;
    margin: 0 auto;
    position: relative;
    width: 24px;
    > span {
      background-color: $black;
      display: block;
      height: 3px;
      left: 0;
      opacity: 1;
      position: absolute;
      transform: rotate(0 deg);
      transition: $transition;
      width: 100%;
      &:first-child {
        top: 0;
      }
      &:nth-child(2), &:nth-child(3) {
        top: 6px;
      }
      &:last-child {
        top: 12px;
      }
    }
  }
  &.open {
    > div > span {
      &:first-child {
        left: 50%;
        top: 6px;
        width: 0%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:last-child {
        left: 50%;
        top: 6px;
        width: 0%;
      }
    }
  }
}

.mobile-menu {
  background-color: $white;
  height: 100vh;
  left: 0;
  padding-top: 8rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  > a {
    border-bottom: 1px solid $pink;
    display: block;
    padding: 1rem;
    text-align: left;
  }
}
</style>
