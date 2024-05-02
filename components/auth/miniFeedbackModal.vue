<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <b-button class="button" type="is-danger" icon-left="close" @click="$parent.close()" />
      <p align="center" class="modal-card-title">{{ $t("Feedback2") }}</p>
    </header>
    <section class="modal-card-body" style="flex-grow: 0; padding: 4rem 2rem;">
      <div class="subtitle">
        <p>{{ $t("FeedbackSurvey2Link") }}</p>
        <br>
        <p>{{ $t("FeedbackSurvey2") }}
          <a style="color: #ff5757;" target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd5HcoyXbT03tBsrVIo_MfJxiLHQdEqVjFBR_Cb8iDEARLNFw/viewform?usp=sf_link">
            {{ $t("clickHere") }}
          </a>
        </p>
      </div>
      <a class="centerImage" target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSd5HcoyXbT03tBsrVIo_MfJxiLHQdEqVjFBR_Cb8iDEARLNFw/viewform?usp=sf_link">
        <img class="centerImage" loading="lazy" id="googleForms" :srcset="require('@/assets/GoogleForms.webp').srcSet"
          alt="Google Forms" custom-class="portrait grayscale" width="96" />
      </a>
    </section>
    <footer class="modal-card-foot">

    </footer>
  </div>
</template>
<style scoped>
div.media-content {
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}

.scrollableDiv {
  border: solid;
  border-width: 1px;
  border-color: #00000040;
  background-color: #f5f5f5;
  max-height: 20vh;
  overflow: scroll;
}

.headers {
  margin-bottom: 0.5rem;
  padding: 0.4rem;
}

.leftAlign {
  display: inline-block;
}

.centerImage {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marginAuto {
  margin: auto;
  display: block;
}
</style>