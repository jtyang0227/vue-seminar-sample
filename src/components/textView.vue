<template>
  <div>
    <button v-on:click="passNum">pass</button>
  </div>
</template>

<script>
export default {
  name: "textView",
  methods: {
    passNum: function() {
      console.log("textView move");
      // $emit을 이용하여 상위 컴퍼넌트로 전달할 데이터, Emit.vue 이동
      this.$emit("emitPass", 1000);
    }
  }
};
</script>

<style scoped>

</style>