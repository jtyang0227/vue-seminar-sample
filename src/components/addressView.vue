<template>
  <div>
    컴퍼넌트 통신을 받은 값 : {{ propsReturnData }}
  </div>
</template>

<script>
export default {
  name: "addressView",
  props: {
    // 상위 컴퍼넌트 통신으로 받은 데이터, Emit.vue 받음
    propsReturnData: {
      type: Number,
      default: 0
    },
  }
};
</script>

<style scoped>

</style>