<template>
  <footer>
    <p>{{copyright}}</p>
    <div class="sharethis-inline-share-buttons"
         data-url="https://xangle.io/indices?slug=xlci"
         data-title="Sharing is great!"
         data-description="xangle"
    ></div>
    <details>
      <summary></summary>
      <p>내부에 넣을 내용을 입력해주세요</p>
    </details>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright : 'Copyright 2021 Bonnie'
    };
  },
  created() {console.log(window)
  }
}
</script>

<style scoped>
footer {
  padding: 6px;
  background: #222;
}
 p, summary{
  color : lightgreen;
  text-align: center;
}
</style>
