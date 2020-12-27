<template>
    <fieldset class="console">
      <legend>Logs</legend>
      <div class="text-box">
        <div class="log-item" v-for="(log, index) in logs">
          <p>
            <span class="log-time">{{'['+ time.getHours() + ':' + time.getMinutes() + ':' + time.getUTCSeconds() + '] ' }}</span>
            <span :class="log.class"><i class="fas fa-arrow-right"></i></span>  {{ log.message }}
          </p>
          <button class="close-log" @click="closeMe(index)">
            <i class="fas fa-times"></i>
          </button>
        </div>
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
      bindClass: false,
      time: new Date()
    }
  },
  methods: {
    display: function (logMessage) {
      this.logs.push(logMessage)
    },
    closeMe(index) {
      this.logs.splice(index, 1)
    },
    upToInstructions: function () {
      let emit_e = this.emitter

      emit_e.emit('scroll-to-anchor', '.instructions')
    }
  },
  mounted() {
    this.emitter.on("display-logs", this.display)
    // TODO: Implement a better timestamp for logs
  }
}
</script>

<style lang="sass" scoped>

@import "src/assets/console"

</style>