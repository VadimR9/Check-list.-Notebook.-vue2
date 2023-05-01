<template>
  <div class="dialog" @click="closeModal">
    <div class="dialog__content" @click.stop>
      <form @submit.prevent>
        <h3 class="dialog__title">Создание поста</h3>
        <input
          class="dialog__input"
          v-model="newTitle"
          type="text"
          placeholder="Название"
        />

        <input
          class="dialog__input"
          v-model="newBody"
          type="text"
          placeholder="Описание"
        />
        <Button label="Создать" @click="createPost" color="warning" />
      </form>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: { Button },
  data() {
    return {
      newTitle: "",
      newBody: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    createPost() {
      let title = this.newTitle;
      let body = this.newBody;
      this.$emit("add", title, body);
      (this.newTitle = ""), (this.newBody = "");
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;

  &__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
  }
  &__btn {
    margin-top: 15px;
    align-self: flex-end;
  }
  &__input {
    padding: 10px;
    margin-bottom: 10px;
  }
  &__title {
    margin-bottom: 10px;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
form {
  display: flex;
  flex-direction: column;
}
</style>
