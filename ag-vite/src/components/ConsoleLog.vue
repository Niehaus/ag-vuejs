<template>
    <fieldset class="console">
      <legend>Logs</legend>
      <div class="text-box">
        <p v-for="(log, index) in logs"> <span :class="log.class"> > </span> {{ log.message }} </p>
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