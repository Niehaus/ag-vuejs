<template>
<div id="panel-pop" class="panel deactivated">
<div class="title">População</div>
  <hr class="panel-header">
  <div v-if="!this.hiddenPopPanel" class="pop-box">
    <div class="indiv " v-for="indiv in population">
      <div class="tooltip">
          {{indiv.rep_bin}}
        <span class="tooltiptext">
          {{'idv: ' + indiv.id + ' ' + 'gen:' + indiv.gen}}
        </span>
      </div>
    </div>
  </div>
  <div v-else-if="this.canStart" id="btn-gen-pop">
    <button @click="generatePop(this.agDetails)">Gerar População Inicial</button>
  </div>
  <div v-else>{{ this.messageerror }}</div>
</div>
</template>

<script>

import PackageAG from "../ag_code/packageAG";
import packgeAG from "../ag_code/packageAG";

export default {
  name: "PopPanel",
  data() {
    return {
      population: [],
      hiddenPopPanel: true,
      canStart: false,
      messageerror: "",
      agDetails: {
        pop_size: 0,
        gen: 0
      }
    }
  },
  methods: {
    generatePop(details) {
      // TODO: Allow to regenerate the population
      let isActive = $("#panel-pop").attr('class')

      this.population =  packgeAG.initPop(details)
      // TODO: Decide and calculate the f(x)
      this.hiddenPopPanel = isActive.includes('deactivated')

      let popDetails = {
        population: this.population,
        permission: true
      }
      this.emitter.emit('enable-selectp', popDetails)
    },
    collectInstructions(instructions) {
      this.canStart = instructions.permission
      this.messageerror = instructions.message

      this.agDetails = {
        pop_size: instructions.tam_pop,
        gen: instructions.gen
      }
    },
    registerListeners() {
      this.emitter.on("enable-ppop", this.collectInstructions)
    }
  },
  mounted() {
    this.registerListeners()
  }
}

</script>

<style lang="sass">

@import 'src/assets/color-variables.sass'

.pop-box
  height: 170px !important
  padding-top: 30px
  margin-bottom: 30px

.indiv
  display: inline-block
  transition: transform .2s
  margin: 0 2px
  font-size: 14px

.indiv:hover
  transform: scale(1.1)
  color: $primary-color
  cursor: pointer
  font-weight: bold

#btn-gen-pop
  display: flex
  justify-content: center
  padding: 65px 0

</style>