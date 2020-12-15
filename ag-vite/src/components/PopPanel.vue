<template>
<div class="panel">
<div class="title">População</div>
  <hr class="panel-header">
  <div class="text-box">
    <div class="indiv" v-for="indiv in population">
      {{indiv}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PopPanel",
  data() {
    return {
      population: ['[10101]', '[10101]', '[10101]', '[10101]', '[10101]', '[10101]', '[10101]','[10101]', '[10101]', '[10101]', '[10101]', '[10101]', '[10101]', '[10101]']
    }
  }
}
</script>

<style lang="sass">

.indiv
  display: inline-block
  margin: 3px
  font-size: 13px

</style>