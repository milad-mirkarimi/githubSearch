<template>
  <div :class="{'blur': isProcessing}">
    <div class="row">
      <div class="column">
        <h1>Search more than 63M users</h1>
        <SearchControl @emit-search="getUsers" :isDisabled="isProcessing" />
      </div>
    </div>
    <template v-if="usersList">
      <transition-group
        :css="false"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
      >
        <div class="row" v-for="(user,index) in usersList" :key="user.id" :data-index="index">
          <div class="column">
            <ResultTileControl 
              :imgSrc="user.avatar_url"
              :title="user.login"
              :link="user.html_url" />
          </div>
        </div>
      </transition-group>
    </template>
    <template v-if="usersList.length == 0 && term && !isProcessing">
      <div class="row">
        <div class="column">
          <p>No results for "<span>{{ term }}</span>"</p>
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
    term: '',
    usersList: [],
    isProcessing: false
	}),
  methods: {
    getUsers(searchTerm){
      // RESET
      this.isProcessing = true;
      this.term = searchTerm;
      this.usersList = [];

      // call get users API - searchTerm passed from child
      axios.get(`/api/github/users/${searchTerm}`)
        .then( res => {
          res.data.items.forEach(user => {
          const { 
            id,
            html_url,
            avatar_url,
            login,
          } = user
          this.usersList.push({id, html_url, avatar_url, login });
        });
          this.isProcessing = false;
        })
        .catch( error => {
          console.log(error);
          this.isProcessing = false;
        })
    },
    // Staggering Animation for tiles
    onBeforeEnter (el) {
      el.style.opacity = 0;
      el.style.transform = "translate3d(-5%, 0, 0)";
      el.style.transition = "all 0.25s ease-out";
    },
    onEnter (el, done) {
      // Delay on each item
      const delay = 120 * parseInt(el.dataset.index);
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform= "translate3d(0%, 0, 0)";

        el.addEventListener('transitionend', onTransitionEnd);

        function onTransitionEnd () {
          el.removeAttribute('style');
          el.removeEventListener('transitionend', onTransitionEnd);
          done();
        }
      }, delay)
    }
  },
};
</script>
