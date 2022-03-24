<template>
  <div class="headerMain">
    <div class="container mx-auto">
      <div class="images">
        <img
          src="https://www.metacritic.com/images/icons/metacritic-icon.svg"
          alt=""
        />
        <img
          src="https://www.metacritic.com/images/icons/metacritic-wordmark.svg"
          alt=""
        />
      </div>
      <div class="filter">
        <input type="text" placeholder="search..." />
        <div class="resultFilter"></div>
      </div>
      <div class="links">
        <router-link to="/">Games</router-link>
        <router-link to="/">Movies</router-link>
        <router-link to="/">TV</router-link>
        <router-link to="/">Music</router-link>
        <p
          class="text-white"
          @click="sendUserState[0].online = true"
          v-if="sendUserState[0].online == false"
        >
          Sign In
        </p>
        <p v-if="sendUserState[0].online == true" class="text-white">
          {{ sendUserState[0].name + " " + sendUserState[0].surname }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  async mounted() {
    this.fetchUsers();
  },
  methods: mapActions(['fetchUsers']),
  computed: mapGetters(['sendUserState'])
};
</script>
