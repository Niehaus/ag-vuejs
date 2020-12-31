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
            de um PackgeAG simples com representação binária de tamanho 6.</p>
          <p>Clique <span @click="showAlert">aqui</span> para mais detalhes as etapas de um Algoritmo Genético:</p>
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
            <input type="number" v-model="tx_mut"/>
          </div>
          <div class="block">
            <label>Taxa de Cruzamento:</label>
            <input type="number" v-model="tx_cruz"/>
          </div>
          <button class="sub-param" v-on:click="validateForms">Validar</button>
        </fieldset>

        <fieldset class="parametros show">
          <legend>Parâmetros</legend>
          <div class="block">
            <label>Tam. População: <span id="tam_pop">{{getFormValues(tam_pop)}}</span></label>
          </div>
          <div class="block">
            <label>Tx. Mutação: <span id="tx_mut">{{getFormValues(tx_mut)}}</span></label>
          </div>
          <div class="block">
            <label>Tx. Cruzamento:<span id="tx_cruz">{{getFormValues(tx_cruz)}}</span></label>
          </div>
        </fieldset>
      </div>
    </div>
      <button v-if="!agIniciado" class="btn" @click="beginAG">Iniciar AG</button>
      <button v-else class="btn" @click="beginAG">Reiniciar AG</button>

  </fieldset>
</div>
</template>

<script>

export default {
  name: "Instructions",
  data() {
    return{
      tx_mut: 1,
      tx_cruz: 1,
      tam_pop: 25,
      validForm: false,
      agIniciado: false
    }
  },
  methods: {
    showAlert() {
      this.$swal({
        title: '<strong><u>Modal Example</u></strong>',
        // icon: 'info',
        html:
            '<button>Botão de Teste</button>',
        showCloseButton: true,
        showConfirmButton: false
      });
    },
    getFormValues(value) {
      if (value === "") {
        return 'NaN'
      }
      else {
        return parseInt(value)
      }
    },
    validateForms: function () {
      let validCount = 0
      let ids = ['#tx_mut', '#tx_cruz', '#tam_pop']
      let paramsValues = [this.tx_mut, this.tx_cruz, this.tam_pop]

      paramsValues.forEach((value, index) => {
        if (this.getFormValues(value) !== parseInt(value)) {
          $(ids[index]).removeClass('valid')
          $(ids[index]).addClass('invalid')
        } else {
          $(ids[index]).removeClass('invalid')
          $(ids[index]).addClass('valid')
          validCount += 1
        }
      });

      this.validForm = validCount === 3;
    },
    beginAG() {
      //TODO: Implement GA restart
      let log, ppop_info, emit_e = this.emitter

      if (this.validForm){
        log = { message: 'Iniciando Ag', class: 'valid' }
        emit_e.emit('display-logs', log)

        ppop_info = {
          message: "",
          permission: true,
          tx_mut: this.tx_mut,
          tx_cruz: this.tx_cruz,
          tam_pop: this.tam_pop,
          gen: 1
        }
        emit_e.emit('enable-ppop', ppop_info)

        emit_e.emit('active-panel', '#panel-pop')
        this.validForm = !this.validForm
        this.agIniciado = true
      }else {
        log = {message: 'Valide os Parâmetros Antes de Iniciar!',class: 'invalid'}
        emit_e.emit('display-logs', log)

        ppop_info = {message: "Parâmetros Inválidos", permission: false}
        emit_e.emit('enable-ppop', ppop_info)
      }

      emit_e.emit('scroll-to-anchor', '#ag-console')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "src/assets/instructions.sass"

</style>