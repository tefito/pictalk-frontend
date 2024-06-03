<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <b-button class="button" type="is-danger" icon-left="close" @click="$parent.close()" />
      <p align="center" class="modal-card-title">{{ $t("Delete") }}</p>
    </header>
    <section class="modal-card-body">
      {{ $t("DeleteItem") }}{{ object.meaning[getUserLang] }} ?
      <br />
      <br />
      <img class="image" :src="object.image" :alt="object.meaning" width="40%" crossorigin="anonymous" style="" />
      <br />
      <br />
      {{ $t("PleaseType1") }} <strong style="font-size:large; margin: 0 1rem;">{{ object.meaning[getUserLang]
        }}</strong> {{
          $t("PleaseType2") }}
      <b-field>
        <b-input data-cy="delete-picto-meaning" v-model="meaningOrName" :placeholder="object.meaning[getUserLang]"
          @keyup.native.enter="onSubmitted(meaningOrName)"></b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button class="button" type="button" @click="$parent.close()">{{
        $t("Close")
      }}</b-button>
      <b-button data-cy="delete-picto-button" class="button is-primary" :loading="loading"
        @click="onSubmitted(meaningOrName)">{{ $t("Delete") }}</b-button>
    </footer>
  </div>
</template>
<script>
import { SoundHelper } from "@/utils/sounds";
import lang from "@/mixins/lang";
export default {
  mixins: [lang],
  props: {
    object: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      meaningOrName: "",
      loading: false,
    };
  },
  methods: {
    async onSubmitted(name) {
      this.loading = true;
      // We need to format name to compare it with the object name
      // Remove trailing and leading spaces
      name = name.trim();
      // Remove leading < and trailing > characters
      if (name == this.object.meaning[this.getUserLang].trim()) {
        try {
          if (this.object.collection) {
            const res = await this.$store.dispatch("removeCollection", {
              collectionId: this.object.id,
              fatherCollectionId: parseInt(
                this.$route.params.fatherCollectionId,
                10
              ),
            });
          } else {
            const res = await this.$store.dispatch("removePicto", {
              pictoId: this.object.id,
              fatherCollectionId: parseInt(
                this.$route.params.fatherCollectionId,
                10
              ),
            });
          }
          this.$buefy.toast.open({
            message: this.$t("DeletedSuccess"),
            type: "is-success",
          });
          SoundHelper.playPictogramDelete();
          $nuxt.$emit("resyncPictoList");
          this.$parent.close();
          return;
        } catch (ex) {
          console.log(ex);
          SoundHelper.playError();
          this.$buefy.toast.open({
            message: this.$t("SomeThingBadHappened"),
            type: "is-danger",
          });
        }
      } else {
        SoundHelper.playError();
        this.$buefy.toast.open({
          message: this.$t("DeleteNotCorrespond"),
          type: "is-danger",
        });
      }
      this.loading = false;
    },
  },
};
</script>
