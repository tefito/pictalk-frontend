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
      {{ $t("PleaseType1") }} <strong style="font-size:large; margin: 0 1rem;">{{ name
        }}</strong> {{
          $t("PleaseType2") }}
      <b-field>
        <b-input data-cy="delete-picto-meaning" v-model="lowerCaseInput" :placeholder="name"
          @keyup.native.enter="onSubmitted(lowerCaseInput)"></b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button class="button" type="button" @click="$parent.close()">{{
        $t("Close")
      }}</b-button>
      <b-button data-cy="delete-picto-button" class="button is-primary" :loading="loading"
        @click="onSubmitted(lowerCaseInput)">{{ $t("Delete") }}</b-button>
    </footer>
  </div>
</template>
<script>
import lang from "@/mixins/lang";
export default {
  mixins: [lang],
  props: {
    object: {
      type: Object,
      required: true,
    },
  },
  computed: {
    lowerCaseInput: {
      get() {
        return this.input;
      },
      set(value) {
        this.input = value.trim().toLowerCase().replace(/\s/g, "-");
      }
    }
  },
  data() {
    return {
      input: "",
      loading: false,
      name: ""
    };
  },
  created() {
    this.name = this.object.meaning[this.getUserLang].trim().toLowerCase().replace(/\s/g, "-");
  },
  methods: {
    async onSubmitted(input) {
      this.loading = true;
      if (input == this.name) {
        try {
          if (this.object.collection) {
            await this.$store.dispatch("removeCollection", {
              collectionId: this.object.id,
              fatherCollectionId: parseInt(
                this.$route.query.fatherCollectionId,
                10
              ),
            });
          } else {
            await this.$store.dispatch("removePicto", {
              pictoId: this.object.id,
              fatherCollectionId: parseInt(
                this.$route.query.fatherCollectionId,
                10
              ),
            });
          }
          this.$buefy.toast.open({
            message: this.$t("DeletedSuccess"),
            type: "is-success",
          });
          $nuxt.$emit("resyncPictoList");
          this.$parent.close();
          return;
        } catch (ex) {
          console.log(ex);
          this.$buefy.toast.open({
            message: this.$t("SomeThingBadHappened"),
            type: "is-danger",
          });
        }
      } else {
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
