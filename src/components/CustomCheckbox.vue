<template>
  <div class="field">
    <input
      class="is-checkradio has-background-color is-warning"
      id="exampleCheckboxBackgroundColorWarning"
      type="checkbox"
      name="exampleCheckboxBackgroundColorWarning"
      :checked="pageSkin === 3"
      v-model="pageSkin"
    >
    <label for="exampleCheckboxBackgroundColorWarning">Orange</label>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
