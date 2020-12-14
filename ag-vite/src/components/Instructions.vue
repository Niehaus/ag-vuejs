<template>
<div>
  <fieldset class="instructions">
    <legend>Instruções</legend>
    <div class="row">
      <div class="col-text">
        <div class="text">
          <p>Algoritmos genéticos são algoritmos de busca baseados na mecânica da seleção
            natural e na genética natural, inspirado na teoria da evolução apresentado por
            Charlin Darwin.</p>
          <p>Este Projeto tem como objetivo realizar uma pequena demonstração do funcionamento
            de um AG simples com representação binária de tamanho 6.</p>
          <p>Função Objetivo a ser <span>minimizada</span>:
          <br>
            [Função obj aqui]
          </p>
        </div>
      </div>

      <div class="col-param">
        <fieldset class="parametros">
          <legend>Configure os Parâmetros</legend>
          <div class="block">
            <label>
              Tam. da População:
            </label>
            <input type="number" v-model="tam_pop"/>
          </div>
          <div class="block">
            <label>
              Taxa de Mutação:
            </label>
            <input type="number" v-model="tx_cruz"/>
          </div>
          <div class="block">
            <label>Taxa de Cruzamento:</label>
            <input type="number" v-model="tx_mut"/>
          </div>
          <button class="sub-param" v-on:click="getFormValues">Submit</button>
        </fieldset>

        <fieldset class="parametros show">
          <legend>Parâmetros</legend>
          <div class="block">
            <label>
              Tam. População: {{tam_pop}}
            </label>
          </div>
          <div class="block">
            <label>
              Tx. Mutação: {{tx_mut}}
            </label>
          </div>
          <div class="block">
            <label>Tx. Cruzamento: {{tx_cruz}}</label>
          </div>
        </fieldset>
      </div>
    </div>

    <button class="btn" @click="iniciarAG">Iniciar AG</button>
  </fieldset>
</div>
</template>

<script>

export default {
  name: "Instructions",
  data() {
    return{
      tx_mut: 0,
      tx_cruz: 0,
      tam_pop: 0
    }
  },
  methods: {
    getFormValues() {
      console.log(this.tx_mut)
    },
    iniciarAG() {
      this.emitter.emit('display-logs', 'iniciando Ag')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "src/assets/instructions.sass"

</style>