<template>
  <div>
    <div class="row">
      <div class="column">
        <h1>Search more than 63M users</h1>
        <SearchControl @emit-search="getUsers" />
      </div>
    </div>
    <template v-if="usersList">
      <div class="row" v-for="user in usersList" :key="user.id">
        <div class="column">
          <ResultTileControl 
            :imgSrc="user.avatar_url"
            :title="user.login" />
        </div>
      </div>
    </template>

  </div>


</template>

<script>
import SearchControl from "@/components/shared/controls/searchControl/SearchControl.vue";
import ResultTileControl from "@/components/shared/controls/resultTileControl/ResultTileControl.vue";

import axios from "axios";

export default {
  name: "Users",
  components: {
    SearchControl,
    ResultTileControl
  },
  data: () => ({
		usersList: []
	}),
  methods: {
    async getUsers(searchTerm){
      this.usersList = [];
      // call get users API - searchTerm passed from child
      const res = await axios.get(`/api/github/users/${searchTerm}`);
      res.data.items.forEach(user => {
        const { 
          id,
          avatar_url,
          login,
        } = user

        this.usersList.push({id, avatar_url, login });
      });
    }
  }
};
</script>
