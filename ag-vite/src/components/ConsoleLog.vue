<template>
    <fieldset class="console">
      <legend>Logs</legend>
      <div class="text-box">
        <p v-for="(log, index) in logs"> <span :class="log.class"> > </span> {{ log.message }} </p>
      </div>

      <div class="row anchor-up-row">
        <button id="log-anchor-up" @click="upToInstructions">
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </fieldset>
</template>

<script>
export default {
  name: "ConsoleLog",
  data() {
    return {
      logs: [],
      bindClass: false
    }
  },
  methods: {
    display: function (logMessage) {
      this.logs.push(logMessage)
    },
    upToInstructions: function () {
      let emit_e = this.emitter

      emit_e.emit('scroll-to-anchor', '.instructions')
    }
  },
  mounted() {
    this.emitter.on("display-logs", this.display)
  }
}
</script>

<style lang="sass" scoped>

@import "src/assets/console"

</style>