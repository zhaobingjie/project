<template>
  <div>
    
  </div>
</template>

<script>
import { Toast } from "we-vue";
export default {
  data() {
    return {
      value: "",
      defaultResult: [
        "Apple",
        "Banana",
        "Orange",
        "Durian",
        "Lemon",
        "Peach",
        "Cherry",
        "Berry",
        "Core",
        "Fig",
        "Haw",
        "Melon",
        "Plum",
        "Pear",
        "Peanut",
        "Other"
      ]
    };
  },

  computed: {
    filterResult() {
      return this.defaultResult.filter(value =>
        new RegExp(this.value, "i").test(value)
      );
    }
  },

  methods: {
    onSearch(val) {
      localStorage.setItem('username','zhangsan');
    },

    onCancel() {
      // 自定义取消事件处理
    }
  },
  created() {
    console.log(this);
    Toast.loading({
      duration: 1000000,
      message: "laoding"
    });
    setTimeout(function() {
      Toast.close();
    }, 3000);
    // Toast.loading('laoding')
  }
};
</script>