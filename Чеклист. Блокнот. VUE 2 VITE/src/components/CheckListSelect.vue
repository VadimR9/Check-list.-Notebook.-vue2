<template>
  <select v-model="modelValue" @change="changeOption" class="select">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      modelValue: "",
    };
  },

  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.select {
  margin: 10px;

  height: 40px;
  border: 1px solid #999;
  font-size: 18px;
  color: #1c87c9;
  background-color: #eee;
  border-radius: 5px;
  box-shadow: 1px 1px 4px 0px #4d4d4d;
  outline: none;
}
</style>
