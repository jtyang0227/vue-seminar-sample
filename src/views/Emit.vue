<template>
  <div class="emit">
    <h1>This is an about page</h1>
    <ItemList @message="addMessages"></ItemList>
    <br>

    <h3>3. emit</h3>
    <ul style="background-color: antiquewhite">
      <li v-for="msg in msgList" :key="msg">{{ msg }}</li>
    </ul>

    <!-- <하위 컴포넌트 이름 v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"> </컴포넌트명> -->
    <address-view v-bind:propsReturnData="numAdd">addressView</address-view>

    <!-- v-on:하위 이벤트(emit)이름="상위 컴포넌트의 이벤트 이름" -->
    <text-view v-on:emitPass="returnNum">textView</text-view>

  </div>
</template>

<script>
import ItemList from "../components/ItemList";
import textView from "../components/textView";
import AddressView from "../components/addressView";

export default {
  components: {
    AddressView,
    ItemList, textView
  },

  data() {
    return {
      msgList: [],
      numAdd: 0,
    };
  },

  methods: {
    // 하위 컴퍼넌트(ItemList.vue)로 값 추가
    addMessages(payload) {
      console.log("emit callback");
      this.msgList.push(payload.message);
    },

    // 하위 컴퍼넌트(contextView)로 전달값 할당
    returnNum(value) {
      console.log("ItemList");
      this.numAdd = value;
    }
  }
};
</script>
