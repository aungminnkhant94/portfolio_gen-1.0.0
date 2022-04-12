<template>
  <header class="profile container">
    <font-awesome-icon icon="moon" class="change-theme" id="theme-button"/>

    <div class="profile__container grid">
      <div class="profile__data">
        <div class="profile__border">
          <div class="profile__photo">
            <img src="./assets/img/amkp.jpg" alt="">
          </div>
        </div>

        <h2 class="profile__name">AUNG MINN KHANT</h2>
        <h3 class="profile__profession">Web Developer</h3>

        <ul class="profile__social">
            <a href="https://www.instagram.com/" target="_blank" class="profile__social-link">
              <font-awesome-icon :icon="['fab', 'instagram']" /> 
            </a>
            <a href="https://www.linkedin.com/" target="_blank" class="profile__social-link">
              <font-awesome-icon :icon="['fab', 'linkedin']" /> 
            </a>
            <a href="https://github.com/" target="_blank" class="profile__social-link">
              <font-awesome-icon :icon="['fab', 'github']" /> 
            </a>
        </ul>
      </div>

      <div class="profile__info">
        <h2 class="profile__info-heading">
          This is me
        </h2>
        <p class="profile__info-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, similique ex molestias, sit ipsam modi id excepturi ullam, saepe fugit asperiores reprehenderit mollitia officia! Quam obcaecati veritatis eum quidem enim.
        </p>
      </div>
    </div>
  </header>

  <div class="profile__buttons">
    <!-- Insert your CV -->
    <a download="" href="./assets/pdf/amk'resume.pdf" class="button">
        Download CV <font-awesome-icon icon="download"/>
    </a>

    <div class="profile__buttons-small">
        <!-- Insert your brand name or profile -->
        <a href="https://m.me/bedimcode" target="_blank" class="button button__small button__gray">
          <font-awesome-icon :icon="['fab', 'facebook-messenger']" /> 
        </a>
    </div>
  </div>

  <section class="filters container">
    <nav>
      <ul class="filters__content">
        <router-link to="/" class="filters__button">
              Projects
        </router-link>
        <router-link to="/skills" class="filters__button">
              Skills
        </router-link>
      </ul>
    </nav>
    <router-view/>
  </section>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>

<style scoped>
  nav a.router-link-exact-active {
    background-color: var(--first-color-alt);
  }
</style>

