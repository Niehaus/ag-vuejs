<template>
    <fieldset class="console">
      <legend>Logs</legend>
      <div class="text-box">
        <p v-for="log in logs"> > {{ log }} </p>
      </div>
    </fieldset>
</template>

<script>
export default {
  name: "ConsoleLog",
  data() {
    return {
      logs: []
    }
  },
  methods: {
    display(logMessage) {
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