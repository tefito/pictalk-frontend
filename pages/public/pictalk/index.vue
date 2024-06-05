<template>
  <div>
    <clientOnly>
      <div class="is-widescreen" style="margin-right: 0.5rem; margin-left: 0.5rem">
        <pictoList :publicMode="true" :pictos="pictos" :sidebar="false" :sidebarUsed="false" />
      </div>
      <div class="contenant">
        <pictoBar :style="loadSpeech.length != 0
          ? 'bottom: 2px'
          : 'transform: translateY(105%);'
          " class="pictobar sidebar slide-up" :publicMode="true" :pictos="loadSpeech"
          :collectionColor="collectionColor" />
      </div>
      <div class="filler"></div>
    </clientOnly>
  </div>
</template>
<script>
import axios from "axios";
import pictoList from "@/components/pictos/pictoList";
import pictoBar from "@/components/pictos/pictoBar";
export default {
  nuxtI18n: false,
  layout: "public",
  middleware: ["axios"],
  components: {
    pictoList: pictoList,
    pictoBar: pictoBar,
  },
  computed: {
    loadSpeech() {
      return this.$store.getters.getSpeech;
    },
    collectionColor() {
      if (this.collection) {
        if (this.collection.color) {
          return this.collection.color;
        } else {
          return "#f5f5f5";
        }
      } else {
        return "#f5f5f5";
      }
    },
  },
  async fetch() {
    if (process.client) {
      if (this.$route.query.fatherCollectionId) {
        await this.fetchCollection(
          parseInt(this.$route.query.fatherCollectionId, 10)
        );
      }
      this.pictos = await this.loadedPictos();
    }
  },
  data() {
    return {
      isPicto: true,
      pictos: [],
    };
  },
  methods: {
    sorting(items) {
      let sortedItems = items.sort(function (itemA, itemB) {
        return new Date(itemA.createdDate) - new Date(itemB.createdDate);
      });
      return sortedItems;
    },
    async fetchCollection(collectionId) {
      try {
        const collection = await this.$store.dispatch("fetchCollection", collectionId);
        return collection;
      } catch (error) {
        const notif = this.$buefy.notification.open({
          duration: 4500,
          message: this.$t("LostConnectivity"),
          position: "is-top-right",
          type: "is-danger",
          hasIcon: true,
          iconSize: "is-small",
          icon: "airplane",
        });
      }
    },
    loadedPictos() {
      return this.loadPictos(
        parseInt(this.$route.query.fatherCollectionId, 10)
      );
    },
    async loadPictos(fatherCollectionId) {
      const collectionList = this.$store.getters.getCollectionsFromFatherCollectionId(fatherCollectionId);
      const pictos = this.$store.getters.getPictosFromFatherCollectionId(fatherCollectionId);
      let items = await Promise.all([collectionList, pictos]);
      items = items[0].concat(items[1]) // Merge both arrays
      console.log(items)
      if (items) {
        let sortedItems = this.sorting(items);
        sortedItems.map((picto) => {
          if (picto?.starred === true) {
            picto.priority = 1;
          } else if (picto?.starred === false) {
            picto.priority = 10;
          }
        });
        return sortedItems.sort((a, b) => a.priority - b.priority);
      } else {
        return [];
      }
    },
    removeSpeech() {
      this.$store.commit("removeSpeech");
    },
    async getCollectionFromId(id) {
      return this.$store.dispatch("getCollectionFromId", id);
    },
    async getPictoFromId(id) {
      return this.$store.dispatch("getPictoFromId", id);
    },
  },
};
</script>
<style scoped>
.pictobar {
  bottom: 2px;
  margin: 0 auto;
  width: 99vw;
  max-height: 20%;
  position: fixed;
  max-width: 767px;
  z-index: 4;
}

.filler {
  padding-bottom: 20%;
}

.contenant {
  display: flex;
  justify-content: center;
}
</style>
