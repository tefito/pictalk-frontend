<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p align="center" class="modal-card-title">
        {{ $t("RestoreItem") }}
      </p>
    </header>
    <section id="search" class="modal-card-body">
      <pictoList :sidebar="false" :pictos="orphaned" :sidebarUsed="false" :publicMode="true" />
    </section>
    <footer class="modal-card-foot"></footer>
  </div>
</template>
<script>
import pictoList from '~/components/pictos/pictoList.vue'
export default {
  name: 'RestoreItemModal',
  middleware: ["axios"],
  components: {
    pictoList
  },
  data() {
    return {
      orphaned: []
    }
  },
  async created() {
    this.orphaned = await this.$store.dispatch('getOrphanedCollections');
  }
}
</script>