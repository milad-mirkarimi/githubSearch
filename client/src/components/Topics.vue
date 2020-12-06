<template>
  <div :class="{'blur': isProcessing}">
    <div class="row">
      <div class="column">
        <h1>search for topics on Github</h1>
        <SearchControl 
          @emit-search="getTopics" 
          :isDisabled="isProcessing" />
      </div>
    </div>
    <span>
      <div class="row" v-if="topicsList.length !== 0">
        <div class="info">
          <p>Results for "{{ term }}"</p>
          <SortControl
            :defaultSort="defaultSort"
            @selected-sort-changed="callSort"
            :sorts="sorts" />
        </div>
      </div>
      <transition-group
        :css="false"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
      >
        <div class="row" v-for="(topic,index) in topicsList" :key="index" :data-index="index">
          <div class="column">
            <ResultTileControl 
              :imgSrc="hashIcon"
              :link="`https://github.com/topics/${topic.name}`"
              :description="topic.short_description"
              :title="topic.name" />
          </div>
        </div>
      </transition-group>
    </span>
    <span v-if="topicsList.length == 0 && term && !isProcessing">
      <div class="row">
        <div class="column">
          <p>No results for "<span>{{ term }}</span>"</p>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
import SearchControl from "@/components/shared/controls/searchControl/SearchControl.vue";
import ResultTileControl from "@/components/shared/controls/resultTileControl/ResultTileControl.vue";
import SortControl from "@/components/shared/controls/sortControl/SortControl.vue";
import hashIcon from "../assets/hash-icon.png";

import axios from "axios";

export default {
  name: "Topics",
  components: {
    SearchControl,
    ResultTileControl,
    SortControl
  },
  data: () => ({
    term: '',
    topicsList: [],
    isProcessing: false,
    sorts: [
      {
        name: 'Name',
        value: 'name'
      },
      {
        name: 'Created at',
        value: 'created_at'
      }
    ],
    defaultSort: { name: 'Name', value: 'name'},
    hashIcon: hashIcon
	}),
  methods: {
    callSort(sortType){
      this.defaultSort = sortType;
      this.topicsList.sort((a,b) => (a[sortType.value] > b[sortType.value]) ? 1 :
                                    ((b[sortType.value] > a[sortType.value]) ? -1 : 0)); 
    },
    getTopics(searchTerm){
      // RESET
      this.isProcessing = true;
      this.term = searchTerm;
      this.topicsList = [];
      this.defaultSort = { name: 'Name', value: 'name'};

      // call get topics API - searchTerm passed from child
      axios.get(`/api/github/topics/${searchTerm}`)
        .then( res => {
          res.data.items.forEach(topic => {
            const { 
              name,
              short_description,
              created_at
            } = topic
            this.topicsList.push({ name, short_description, created_at });
          });
          this.callSort(this.defaultSort);
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
  }
};
</script>
