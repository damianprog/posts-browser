<template>
  <ul class="pagination">
    <li>
      <button
        :disabled="isPageOutOfRange(selectedPage - 1)"
        @click="onPageClick(selectedPage - 1)"
      >
        {{ "<" }}
      </button>
    </li>
    <li v-for="pageNumber in pagesQuantity" :key="getPageKey(pageNumber)">
      <button
        :class="{ selected: pageNumber === selectedPage }"
        @click="onPageClick(pageNumber)"
      >
        {{ pageNumber }}
      </button>
    </li>
    <li>
      <button
        :disabled="isPageOutOfRange(selectedPage + 1)"
        @click="onPageClick(selectedPage + 1)"
      >
        {{ ">" }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    pagesQuantity: {
      type: Number,
      default: 1,
    },
    selectedPage: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    getPageKey(pageNumber) {
      return `${pageNumber}-page`;
    },
    isPageOutOfRange(pageNumber) {
      return pageNumber < 1 || pageNumber > this.pagesQuantity;
    },
    onPageClick(pageNumber) {
      this.$emit("change", pageNumber);
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0;

  li {
    margin: 3px;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
      background: #d6d6d6;
    }

    &:disabled {
      color: #ababab;
    }

    &.selected {
      background: #bebebe;
    }
  }
}
</style>