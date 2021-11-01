<template>
  <input
    class="search"
    type="text"
    @input="onInput($event.target.value)"
    placeholder="Szukaj po tytule"
  />
</template>

<script>
export default {
  name: "Search",

  methods: {
    onInput(text) {
      this.$emit("textInput", text);
    },
  },
};
</script>

<style scoped lang="scss">
input {
  height: 35px;
  width: 230px;
}

@media (max-width: 600px) {
  input {
    width: 100%;
  }
}
</style>