<template>
  <div class="props">
    <context-view :props-msg="message"
                  v-bind:component-name="componentName"
    />
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