<template>
  <div class="row">
    <div class="column">
      <h1>Search more than 63M users</h1>
      <SearchControl @emit-search="getUsers" />
    </div>
  </div>
</template>

<script>
import SearchControl from "@/components/shared/controls/searchControl/SearchControl.vue";
import axios from "axios";
export default {
  name: "Users",
  components: {
    SearchControl
  },
  methods: {
    async getUsers(searchTerm){
      // call get users API - searchTerm passed from child
      const res = await axios.get(`/api/github/users/${searchTerm}`);
      console.log(res.data);
    }
  }
};
</script>
