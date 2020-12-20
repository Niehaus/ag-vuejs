<template>

    <div class="grid-container">
      <div class="instructions" >
        <instructions ></instructions>
      </div>
      <div class="ag-actions">
        <AgActions></AgActions>
      </div>
      <div class="population">
        <PopPanel></PopPanel>
      </div>
      <div class="selected-parents">
        <SelectedParents></SelectedParents>
      </div>
      <div class="mid-population">
        <MidPop></MidPop>
      </div>
      <div id="ag-console" class="console-log">
        <console-log></console-log>
      </div>
    </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PopPanel from "./components/PopPanel.vue";
import AgActions from "./components/AgActions.vue";
import MidPop from "./components/MidPop.vue";
import SelectedParents from "./components/SelectedParents.vue";
import Instructions from "./components/Instructions.vue";
import ConsoleLog from "./components/ConsoleLog.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    PopPanel,
    AgActions,
    MidPop,
    SelectedParents,
    Instructions,
    ConsoleLog
  },
  methods: {
    scrollToAnchor(anchor) {
      $('html, body').animate({
        scrollTop: $(anchor).offset().top
      }, 1000);
    },
    activePanel(whichPanel) {
      $(whichPanel).removeClass('deactivated')
    },
    deactivatePanel(whichPanel) {
      $(whichPanel).addClass('deactivated')
    },
    registerListeners() {
      this.emitter.on("scroll-to-anchor", this.scrollToAnchor)

      this.emitter.on("active-panel", this.activePanel)

      this.emitter.on("deactivate-panel", this.deactivatePanel)
    }
  },
  mounted() {
    this.registerListeners()
  }
}
</script>

<style lang="sass">
</style>
