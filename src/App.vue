<template>
  <div>
    <!--    <app-header :title="title"></app-header>-->
    <!--    <app-footer></app-footer>-->
    <!--    <bonnie :ninjas="ninjas"></bonnie>-->
    <!--    <form-helper>-->
    <!--      <div slot="form-header">-->
    <!--        <h3>this is the title of th form</h3>-->
    <!--        <p>ya hoo!</p>-->
    <!--      </div>-->
    <!--      <div slot="form-field">-->
    <!--        <input type="text" placeholder="name" required>-->
    <!--        <input type="password" placeholder="password" required>-->
    <!--      </div>-->
    <!--      <div slot="form-control"></div>-->
    <!--    </form-helper>-->
    <!--    <keep-alive>-->

    <!--    <component :is="component"></component>-->
    <!--    </keep-alive>-->
    <!--    <button @click="component = 'form-one'">Show form one</button>-->
    <!--    <button @click="component = 'form-two'">Show form one</button>-->
    <!--    <form-one></form-one>-->
    <!--    <form-two></form-two>-->

    <!--    <a id="create-kakao-link-btn" href="javascript:;">-->
    <!--      <img-->
    <!--        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"-->
    <!--      />-->
    <!--    </a>-->
    <!--    <a href="https://t.me/share/url?url=https://ko.xangle.io">-->
    <!--      <img-->
    <!--        src="https://static.addtoany.com/images/blog/telegram-icon.png"-->
    <!--      />-->
    <!--    </a>-->
    <add-blog></add-blog>
    <div id="app">
      <Button label="Order Now">
      </Button>
    </div>

  </div>
</template>

<script>
/* eslint-disable no-undef */
// import Header from "@/components/Header";
// import Footer from "@/components/Footer.vue";
// import Bonnie from "@/components/Bonnie";
// import FormHelper from "@/components/formHelper";
// import FormOne from "@/components/FormOne";
// import FormTwo from "@/components/FormTwo";


import AddBlog from "@/components/AddBlog";
import Button from "@/components/Button.vue";

export default {
  components: { AddBlog, Button },
  // components: { FormTwo, FormOne,  Bonnie, "app-header": Header, "app-footer": Footer },
  data() {
    return {
      //   ninjas: [
      //     { name: "Ryu", specialty: "Vue Components", show: false },
      //     { name: "Crystal", specialty: "HTML Wizardry", show: false },
      //     { name: "Hitoshi", specialty: "Click Events", show: false },
      //     { name: "Tango", specialty: "Conditionals", show: false },
      //     { name: "Kami", specialty: "Webpack", show: false },
      //     { name: "Yoshi", specialty: "Data Diggin", show: false }
      //   ],
      //   title: "bonnie blog",
      //   component : 'form-two'
    };
  }
  // mounted() {
  //   Kakao.Link.createDefaultButton({
  //     container: "#create-kakao-link-btn",
  //     objectType: "feed",
  //     content: {
  //       title: "Xangle",
  //       description: "가상자산 산업에 공시 제도 도입 및 활성화",
  //       imageUrl:
  //         "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2b9570d6-b839-4341-b952-0ca75bef57c8%2FArtboard_Copy.jpg?table=block&id=8abdcdff-6bc9-495c-9901-0d34a3497280&width=2560&userId=aaa9188f-7ace-489a-a31b-3a3776af3a38&cache=v2",
  //       link: {
  //         mobileWebUrl: "https://ko.xangle.io/",
  //         webUrl: "https://ko.xangle.io/"
  //       }
  //     },
  //     social: {
  //       likeCount: 286,
  //       commentCount: 45,
  //       sharedCount: 845
  //     },
  //     buttons: [
  //       {
  //         title: "웹으로 보기",
  //         link: {
  //           mobileWebUrl: "https://ko.xangle.io/",
  //           webUrl: "https://ko.xangle.io/"
  //         }
  //       },
  //       {
  //         title: "앱으로 보기",
  //         link: {
  //           mobileWebUrl: "https://ko.xangle.io/",
  //           webUrl: "https://ko.xangle.io/"
  //         }
  //       }
  //     ]
  //   });
  // }
};

</script>

<style scoped>

</style>
