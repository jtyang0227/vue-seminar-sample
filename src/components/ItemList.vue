<template>
  <div>
    <input type="text"
           v-model="emitData"
           @keyup.enter="pushMessages"
           ref="pushMessages"
    />
    <button v-on:click="pushMessages">emit</button>
  </div>
</template>

<script>

export default {
  name: "ItemList",
  components: {},
  data() {
    return {
      // Emit.vue 전달 데이터
      emitData: ""
    };
  },

  methods: {
    // emit call
    pushMessages: function() {
      if (undefined === this.emitData || null === this.emitData || "" === this.emitData) {
        alert("값을 입력해주세요.");
        return;
      }

      this.$emit("message", { message: this.emitData });
      this.$refs.pushMessages.value = null;
    }
  }
};
</script>
<style>
</style>
