<template>
  <header class="profile container">
    <font-awesome-icon icon="moon" class="change-theme" id="theme-button"/>

    <div class="profile__container">
      <div class="profile__data">

        <div class="profile__border">
          <div class="profile__photo">
            <img src="./assets/img/amkp.jpg" alt="Profile-Picture">
          </div>
        </div>

        <h2 class="profile__name">AUNG MINN KHANT</h2>
        <h3 class="profile__profession">Web Developer</h3>

        <ul class="profile__social">
            <a href="https://www.instagram.com/___aung_minn_khant___/" target="_blank" class="profile__social-link">
              <font-awesome-icon :icon="['fab', 'instagram']" /> 
            </a>
            <a href="https://www.linkedin.com/in/aung-minn-khant-2a8403172/" target="_blank" class="profile__social-link">
              <font-awesome-icon :icon="['fab', 'linkedin']" /> 
            </a>
            <a href="https://github.com/aungminnkhant94" target="_blank" class="profile__social-link">
              <font-awesome-icon :icon="['fab', 'github']" /> 
            </a>
        </ul>
      </div>

      <div class="profile__info">
        <h2 class="profile__info-heading">
          This is me
        </h2>
        <p class="profile__info-description">
          I am fond of building websites or designing UI when I'm not doing much. Being humble and hustling about web develpment and trying to be proficient in mainly FrontEnd Dev. Always eager to share what I have learnt to new coders. I'm not very smart, just passionate to see how programming works. Also, looking to get into machine learning and Web3 in the future.
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
        <a href="https://www.facebook.com/aungminnkhant942000" target="_blank" class="button button__small button__gray">
          <font-awesome-icon :icon="['fab', 'facebook-messenger']" /> 
        </a>
    </div>
  </div>

  <section class="filters container">
      <ul class="filters__content">
        <router-link to="/" class="filters__button">
              Projects
        </router-link>
        <router-link to="/skills" class="filters__button">
              Skills
        </router-link>
      </ul>
    <router-view/>
  </section>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->

  <!--=============== FOOTER ===============-->
  <footer class="footer container">
      <span class="footer__copy">
          Design Idea Credit Goes to Bedimcode.
      </span>
  </footer>
</template>

<style scoped>
  ul a.router-link-exact-active {
    background-color: var(--first-color-alt);
  }
</style>

