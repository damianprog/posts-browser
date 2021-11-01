<template>
  <select class="users-select" @change="onUserSelect($event.target.value)">
    <option value="" selected>Wszyscy autorzy</option>
    <option v-for="user in users" :key="getUserKey(user)" :value="user.name">
      {{ user.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "UsersSelect",

  data() {
    return {
      users: this.$store.state.users,
    };
  },

  methods: {
    onUserSelect(name) {
      const selectedUser = this.users.find((user) => user.name === name);

      this.$emit("selectUser", selectedUser);
    },
    getUserKey(user) {
      return `${user.id}-user`;
    },
  },
};
</script>

<style scoped lang="scss">
.users-select {
  height: 35px;
  width: 230px;
}

@media (max-width: 600px) {
  .users-select {
    width: 100%;
  }
}
</style>