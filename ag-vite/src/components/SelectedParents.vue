<template>
<div id="selected-pop" class="panel deactivated">
  <div class="title">selected p</div>
  <hr class="panel-header">

  <div  class="pop-box">
    <div class="indiv " v-for="indiv in selectedParents">
      <div class="tooltip">
        {{indiv.rep_bin}}
        <span class="tooltiptext">
          {{'idv: ' + indiv.id + ' ' + 'gen:' + indiv.gen
          + '\nFit: ' + indiv.fitness.toFixed(2)}}
        </span>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import PackageAG from "../ag_code/packageAG";

export default {
  name: "SelectedParents",
  data() {
    return {
      selectedParents: [],
      population: [],
      canStart: false
    }
  },
  methods: {
    tournament(population) {

      this.selectedParents = PackageAG.tournament(population)

      this.canStart = false
      console.log(population)
      // TODO: Put buttons to display infos about the selected parents:
      // FIXME: - best fitness selected - most selected parent


    },
    collectDetails(details) {
      this.selectedParents.push(details.selected)
      this.canStart = details.permission

      $('#selected-pop').removeClass('deactivated')

      // this.emitter.emit('active-panel', '#selected-pop')
    },
    registerListeners() {
      this.emitter.on("enable-selectp", this.collectDetails)
    }
  },
  mounted() {
    this.registerListeners()

  }
}
</script>

<style lang="sass">

</style>