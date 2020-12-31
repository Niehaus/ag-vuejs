<template>
<div id="panel-pop" class="panel deactivated">
<div class="title">População <i class="fa fa-info-circle" aria-hidden="true" style="cursor: pointer"></i></div>
  <hr class="panel-header">
  <div v-if="!this.hiddenPopPanel" class="pop-box">
    <div class="indiv " v-for="indiv in population" @click="selectMe($event, indiv.id)">
      <div class="tooltip">
          {{indiv.rep_bin}}
        <span class="tooltiptext">
          {{'Id: ' + indiv.id + ' ' + 'Gen: ' + indiv.gen + '\nFit: ' + indiv.fitness.toFixed(2)}}
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
      },
      oldEvent: [],
      selectedCount: 0
    }
  },
  methods: {
    generatePop(details) {
      // TODO: Allow to regenerate the population
      let isActive = $("#panel-pop").attr('class')

      this.population =  packgeAG.initPop(details)
      packgeAG.f(this.population[0].rep_bin)
      this.population.forEach(indv => {
        indv.fitness = packgeAG.f(indv.rep_bin)
      });

      this.hiddenPopPanel = isActive.includes('deactivated')
      this.emitter.emit("active-panel", '#ag-actions')
      this.emitter.emit("enable-tournament", details)
    },
    collectInstructions(instructions) {
      this.canStart = instructions.permission
      this.messageerror = instructions.message

      this.agDetails = {
        pop_size: instructions.tam_pop,
        gen: instructions.gen
      }
    },
    selectMe(event, p_id) {
      // TODO: Mark only the current selected parents
      let aux_event
      if ($(event.currentTarget).hasClass('valid')) return

      if (this.selectedCount > 1) {
        $(event.currentTarget).addClass('valid')
        $(this.oldEvent[0].target.parentNode).removeClass('valid')
        aux_event = this.oldEvent[1]
        this.oldEvent[1] = event
        this.oldEvent[0] = aux_event

        this.selectedCount = 2
      }else {
        $(event.currentTarget).addClass('valid')
        this.oldEvent[this.selectedCount] = event
        this.selectedCount++
      }
      this.emitter.emit('register-parent', this.population[p_id])
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
  //margin: 30px 0

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