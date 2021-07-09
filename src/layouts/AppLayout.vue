<template>
  <div id="app">
    <h1 @click="hello()">Layout</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AppLayout extends Vue {
    mounted() {
        this.hello();
    }
    //methods: {},
    public hello() {
        //console.log('yo yo');
    }
}
</script>

<style scoped>
</style>
