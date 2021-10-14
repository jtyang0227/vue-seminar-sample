<template>
  <div class="props">
    <!--
      <하위 컴포넌트 이름 v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름">
      </컴포넌트명>
    -->
    <context-view :props-msg="message"
                  v-bind:component-name="componentName"
    >
    </context-view>
  </div>
</template>

<script>
import contextView from "../components/contextView";

export default {
  name: "Props",
  components: {
    contextView,
  },

  // 하위 컴퍼넌트(contextView.vue)로 전달
  data() {
    return {
      message: 'Hello world',
      componentName: 'Props',
    }
  },
};
</script>

<style>
</style>