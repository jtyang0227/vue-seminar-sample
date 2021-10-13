<template>
  <div class="context">
    <div>
      <h1>{{ propsMsg }}</h1>
      <p>
        {{ componentName }} page
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contextView",
  props: {
    // 상위컴퍼넌트(Props.vue) 받은 데이터
    propsMsg: String,
    componentName: String,
  }
};
</script>

<style scoped>

* {
  padding: 0;
  margin: 0;
}

.context {
  color: black;
}
</style>