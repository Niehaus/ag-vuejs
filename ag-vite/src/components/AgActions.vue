<template>
<div id="ag-actions" class="panel deactivated ag-actions">
  <div class="title">ag-actions</div>
  <hr class="panel-header">
  <div class="actions-area">
    <tournament :pop_size="this.agDetails.pop_size"
                :gen="this.agDetails.gen"
                v-if="tournamentTime">
    </tournament>
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
      agDetails: {}
    }
  },
  methods: {
    enableTournament(agDetails) {
      this.tournamentTime = true
      this.agDetails = agDetails
      console.log(this.agDetails)
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

  .actions-area
    display: flex
    justify-content: center
    align-items: center
    height: 90%
</style>