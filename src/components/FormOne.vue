<template>
<div>
  <form-helper>
    <div slot="form-header">
      <h3>Form one</h3>
      <p>ya hoo!</p>
    </div>
    <div slot="form-field">
      <input type="text" placeholder="name" required>
      <input type="password" placeholder="password" required>
    </div>
    <div slot="form-control"></div>
  </form-helper>
</div>
</template>

<script>
import FormHelper from "@/components/formHelper";

export default {
  name: "form-one",
  components: {
    'form-helper' : FormHelper
  }
};
</script>

<style scoped>

</style>
