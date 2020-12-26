<template>
<div id="ag-actions" class="panel deactivated ag-actions">
  <div class="title">ag-actions</div>
  <hr class="panel-header">
  <div class="actions-area">
    <tournament v-if="tournamentTime"></tournament>
  </div>


</div>
</template>

<script>
import Tournament from "./Tournament.vue";

export default {
  name: "AgActions",
  components: {Tournament},
  data(){
    return {
      tournamentTime: false,
      crossoverTime: false,
    }
  },
  methods: {
    enableTournament() {
      this.tournamentTime = true
      console.log(this.tournamentTime)
    },
    registerListeners() {
      this.emitter.on("enable-tournament", this.enableTournament)
    }
  },
  mounted() {
    this.registerListeners()
  }
}
</script>

<style lang="sass">
.panel
  &.ag-actions
    height: 572px
</style>