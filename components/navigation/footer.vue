<template>
  <div class="footers">
    <div class="social-media gradiant rounded">
      <div class="columns is-centered is-mobile whitebg rounded">
        <div class="column centerImage">
          <a href="https://www.instagram.com/pictalk_speech_made_easy/">
            <b-image style="height: 42px" lazy :responsive="false" :srcset="require('@/assets/instagram.webp').srcSet"
              alt="Instagram" custom-class="imgpixelslimitvw portrait grayscale" />
          </a>
        </div>
        <div class="column centerImage">
          <a href="https://www.facebook.com/profile.php?id=100086626416882">
            <b-image style="height: 42px" lazy :responsive="false" :srcset="require('@/assets/facebook.webp').srcSet"
              alt="Facebook" custom-class="imgpixelslimitvw portrait grayscale" />
          </a>
        </div>
        <div class="column centerImage">
          <a href="https://www.linkedin.com/company/88954834/">
            <b-image style="height: 42px" lazy :responsive="false" :srcset="require('@/assets/linkedin.webp').srcSet"
              alt="Linkedin" custom-class="imgpixelslimitvw portrait grayscale" />
          </a>
        </div>
        <div class="column centerImage">
          <a href="https://www.youtube.com/channel/UCPb9icb_q3b0Kb4YhTLZqpA">
            <b-image style="height: 42px" lazy :responsive="false" :srcset="require('@/assets/video.png').srcSet"
              alt="Youtube logo" custom-class="imgpixelslimitvw portrait grayscale" />
          </a>
        </div>
        <div class="column centerImage">
          <a href="mailto:alex@pictalk.org">
            <b-image style="height: 42px" lazy :responsive="false" :srcset="require('@/assets/email.webp').srcSet"
              alt="Mail" custom-class="imgpixelslimitvw portrait grayscale" />
          </a>
        </div>
      </div>
    </div>
    <div class="content has-text-centered">
      <p style="margin-bottom: 0px">
        <strong>PicTalk</strong> {{ $t("By") }}
        <a class="morecontrast" href="https://www.helloasso.com/associations/pictalk-speech-made-easy">Pictalk Speech
          Made Easy</a>
        . {{ $t("CodeIsLicensed") }}
        <a class="morecontrast" href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU</a>.
        {{ $t("TakeALook") }}
        <a href="https://www.pictalk.org/fr/terms-of-service/" class="morecontrast">{{
              $t("TermsOfUse")
            }}</a>
        {{ $t("And") }}
        <a href="https://www.pictalk.org/fr/privacy-policy/" class="morecontrast">{{
              $t("PrivacyPolicy")
            }}</a>. <b>PicTalk</b> {{ $t("ProjectBackedBy") }}
      </p>
    </div>
    <br />
    <div class="columns is-centered is-mobile social-media">
      <div class="column centerImage">
        <b-image :lazy="true" :responsive="false" :srcset="require('@/assets/InsaFondation.png').srcSet"
          alt="logo of Fondation INSA Lyon " custom-class="imgpixelslimit" />
      </div>
      <div class="column centerImage">
        <b-image :lazy="true" :responsive="false" :srcset="require('@/assets/DigitalOcean.png').srcSet"
          alt="Logo of DigitalOcean" custom-class="imgpixelslimit" />
      </div>
      <div class="column centerImage">
        <b-image :lazy="true" :responsive="false" :srcset="require('@/assets/gandi.png').srcSet" alt="Logo of Gandi"
          custom-class="imgpixelslimit" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.footers {
  padding: 2rem;
}

.social-media {
  margin-top: 10px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.gradiant {
  background-image: linear-gradient(90deg,
      rgba(255, 87, 87, 1) 60%,
      rgba(131, 151, 255, 1) 100%);
  height: 72px;
  padding: 0.95em;
  margin-top: -1.5rem;
  margin-bottom: 1.5em;
  box-shadow: 1px 1px 10px 1px #ccc;
}

.whitebg {
  background-color: #fff;
}

.rounded {
  border-radius: 50px;
}
</style>
<style>
.imgpixelslimit {
  max-width: 100px;
}

.centerImage {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.morecontrast {
  color: #ee0000;
}

.imgpixelslimitvw {
  width: 10vw;
  max-width: 36px;
}

.portrait:hover {
  animation: zoom 250ms;
  animation-fill-mode: forwards;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.08);
  }
}

.grayscale {
  filter: none;
  -webkit-filter: grayscale(0%);
}

.grayscale:hover {
  filter: gray;
  /* IE6-9 */
  -webkit-filter: grayscale(100%);
  /* Chrome 19+ & Safari 6+ */
}
</style>
