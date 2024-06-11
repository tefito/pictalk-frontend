<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ $t("ErrorTitle") }}</h1>
      <p class="subtitle">{{ $t("ErrorSubtitle") }}</p>
      <pre v-for="key of Object.keys(error).filter((err) => err != 'cause')" data-prefix=">"
        class="text-error"><code>{{ key }} : {{ (error)[key] }}</code></pre>
      <br>
      <b-button class="is-primary" @click="emptyCache">{{ $t("ErrorButton") }}</b-button>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
  methods: {
    async emptyCache() {
      if ('caches' in window) {
        const names = await window.caches.keys();
        await Promise.all(names.map(name => window.caches.delete(name)));
      }
      if ('localStorage' in window) {
        window.localStorage.clear();
      }
      const dbNames = await window.indexedDB.databases();
      await Promise.all(dbNames.map(db => window.indexedDB.deleteDatabase(db.name ?? '')));
      window.location.href = '/';
    }
  }
}
</script>