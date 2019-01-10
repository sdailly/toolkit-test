<template>
  <button class="ai-Button">
    <slot>My button</slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    methods: {
      test() {
        return 'test';
      }
    }
  }
</script>

<style lang="scss">
  .ai-Button {
    background: #eee;
    box-shadow: none;
    border: 0;
    transition: all ease .5s;
    padding: 1em;
    cursor: pointer;
    outline: none;
    &:hover, &:focus {
      background: #eee;
      box-shadow: 0 0 1px #9a9a9a;
    }
  }
</style>

