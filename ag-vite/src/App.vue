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
      <div class="console-log">
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
  }
}
</script>

<style lang="sass">
  @import "variables"
</style>
