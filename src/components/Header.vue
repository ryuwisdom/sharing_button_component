<template>
  <header>
    <h1 @click="changedTitle">{{title}}</h1>
  </header>
</template>

<script>
export default {
  props :{
    title : {
      type: String
    }
  },
  data() {
    return {
     // title : 'bonnie'
    };
  },
  methods: {
    changedTitle() {
      this.title = '+_+'
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
