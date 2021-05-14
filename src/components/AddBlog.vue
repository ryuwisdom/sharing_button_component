<template>
  <div id="add-blog">
    <h2>add a new blog post</h2>
    <form v-if="!submitted">
      <label>blog title</label>
      <input type="text" v-model="blog.title" required />
      <label>blog content</label>
      <textarea v-model="blog.content"></textarea>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>preview blog</h3>
      <p>blog title : {{ blog.title }}</p>
      <p>blog content : {{ blog.content }}</p>
      <p>blog categories:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category.index">{{category}}</li>
      </ul>
      <p>author : {{blog.author}}</p>
      <div id="checkboxes">
        <label>ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label>wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label>mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label>cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
      </div>
      <label>author</label>
    <select v-model="blog.author">
      <option v-for="author in authors" :key="author">{{author}}</option>
    </select>
    <button @click="post">add blog</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: '',
      },
        authors : ['a', 'b', 'c', 'd'],
      submitted: false,
    };
  },
  methods: {
    post() {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data){
        console.log(data)
        this.submitted = true;
      });

    }
  }
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
