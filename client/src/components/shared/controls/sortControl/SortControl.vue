<template>
	<div class="sort-control">
		<button 
            @click="displayList = !displayList" 
            v-click-outside="hide" >
            Sort: <span>best match <i class="fa fa-chevron-down"></i></span>
        </button>
        <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            :css="false" >
            <ul v-if="displayList">
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
        </transition>
	</div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import Velocity from 'velocity-animate';
export default {
    name: "SortControl",
    directives: {
        ClickOutside
    },
	data: () => ({
		displayList: false
	}),
	methods:{
		hide(){
            this.displayList = false;
        },
        beforeEnter(el){
            el.style.opacity = 0;
            el.style.height = '0px';
        },
        enter(el, done){
            Velocity(
                el,
                { opacity: 1, height: '90px'},
                { duration: 250, easing: [90, 10], complete: done}
            )
        },
        leave(el, done){
            Velocity(
                el,
                { opacity: 0, height: '0px'},
                { duration: 200, easing: 'easeInCubic', complete: done}
            )

        }
    }
}
</script>