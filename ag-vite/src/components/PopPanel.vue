<template>
<div id="panel-pop" class="panel deactivated">
<div class="title">População</div>
  <hr class="panel-header">
  <div class="pop-box">
    <div class="indiv " v-for="indiv in population">
      <div class="tooltip">
          {{indiv.rep_bin}}
        <span class="tooltiptext">
          {{'idv: ' + indiv.id + ', ' + 'gen:' + indiv.gen}}
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import PackgeAG from "../ag_code/packgeAG";
import packgeAG from "../ag_code/packgeAG";

export default {
  name: "PopPanel",
  data() {
    return {
      population: [],
      hiddenPopPanel: true
    }
  },
  methods: {
    generatePop(pop_size) {
      this.population =  packgeAG.initPop(pop_size)
      console.log(this.population)
    }
  },
  mounted() {
    let pop_params = {pop_size: 10, gen: 1}
    this.generatePop(pop_params)
  }
}
</script>

<style lang="sass">

@import 'src/assets/color-variables.sass'

.pop-box
  height: 170px !important
  padding-top: 30px

.indiv
  display: inline-block
  //margin: 3px
  transition: transform .2s
  font-size: 12px
  z-index: 1

.indiv:hover
  transform: scale(1.1)
  color: $primary-color
  cursor: pointer
  font-weight: bold

</style>