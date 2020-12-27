<template>
  <div class="tournament-box">
    <p>Selecione dois indivíduos no box de <span>População</span> para realizar um torneio!</p>
    <div class="row">
      <fieldset id="f_parent">
        <legend>Primeiro Pai</legend>
        <div v-if="this.f_parent != null" class="indiv">
          <div class="tooltip">
            {{this.f_parent.rep_bin}}
            <span class="tooltiptext">
            {{'Id: ' + this.f_parent.id + ' ' + 'Gen: ' + this.f_parent.gen
              + '\nFit: ' + this.f_parent.fitness.toFixed(2)}}
            </span>
          </div>
        </div>
      </fieldset>
      <fieldset id="s_parent" class="winner">
        <legend>Segundo Pai</legend>
        <div class="indiv">
          <div v-if="this.s_parent != null" >
            <div class="tooltip">
              {{this.s_parent.rep_bin}}
              <span class="tooltiptext">
              {{'Id: ' + this.s_parent.id + ' ' + 'Gen: ' + this.s_parent.gen
              + '\nFit: ' + this.s_parent.fitness.toFixed(2)}}
            </span>
            </div>
          </div>
        </div>
      </fieldset>
    </div>

    <div class="row with-button" >

      <fieldset id="winner">
        <legend>Vencedor</legend>
        <div class="indiv">
          <div v-if="this.winner != null">
            <div class="tooltip">
              {{this.winner.rep_bin}}
              <span class="tooltiptext">
                {{'Id: ' + this.winner.id + ' ' + 'Gen: ' + this.winner.gen
              + '\nFit: ' + this.winner.fitness.toFixed(2)}}
              </span>
            </div>
          </div>
        </div>
      </fieldset>

      <div class="row">
        <button class="btn-tournament" @click="twoTournament">Realizar Torneio</button>

        <button class="btn-tournament new-t" @click="clearAll">Novo Torneio</button>
      </div>
    </div>
  </div>

</template>

<script>
import packageAG from "../ag_code/packageAG";

export default {
  name: "Tournament",
  data() {
    return {
      f_parent: null,
      s_parent: null,
      winner: null,
      replaceCount: 0,
    }
  },
  methods: {
    registerParent(parent) {

      if (this.f_parent !== null) {
        if (this.replaceCount >= 2) {
          this.f_parent = parent
          this.replaceCount = 1
        } else {
          this.s_parent = parent
          this.replaceCount++
        }
      } else {
        this.f_parent = parent
        this.replaceCount++
      }
    },
    twoTournament() {
      let a = this.f_parent,
          b = this.s_parent,
          winner = null,
          log, details


      if (a === null || b === null) {
        log = {
          message: 'Selecione no mínimo 2 pais',
          class: 'invalid'
        }
      }else if (a.id === b.id) {
        log = {
          message: 'Pais Iguais. Selecione pais diferentes!',
          class: 'invalid'
        }
      }else {
        log = {
          message: 'Torneio Realizado',
          class: 'valid'
        }
        this.winner = packageAG.tournament_by_user(a, b)

        details = {
          selected: this.winner,
          permission: true
        }
        this.emitter.emit("enable-selectp", details)
      }

      this.emitter.emit('display-logs', log)
    },
    clearAll() {
      this.s_parent = null
      this.f_parent = null
      this.winner = null
    }
  },
  mounted() {
    this.emitter.emit("active-panel", '#ag-actions')

    this.emitter.on('register-parent', this.registerParent)
  }
}
</script>

<style lang="sass">

@import "../main"

.tournament-box
  .row
    justify-content: center
    margin: 10px 0
    &.with-button
      flex-direction: column
      align-items: center
      .warning
        min-height: 18px

.btn-tournament
  margin: 5px
  &.new-t
    color: $error-color
    border-color: $error-color
  &.new-t:hover
    color: $invert-font-color
    background-color: $error-color

#f_parent, #s_parent, #winner
  display: inline-block
  min-width: 150px

#winner
  color: $succes-color
  border-color: $succes-color
  .indiv .tooltip:hover
    color: $succes-color

</style>