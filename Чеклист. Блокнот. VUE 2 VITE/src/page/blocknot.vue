<template>
  <div class="blocknot">
    <div class="blocknot__title">
      <h1>Блокнот</h1>
    </div>
    <div class="blocknot__container">
      <div class="blocknot__container__top">
        <input
          class="blocknot__container__top__input"
          v-model="value"
          placeholder="Название"
        />
        <textarea
          class="blocknot__container__top__area"
          v-model="text"
          placeholder="Заметка"
        ></textarea>
        <div class="buttons">
          <Button
            :smallMobile="true"
            label="Очистить"
            @click="clear"
            color="danger"
          />
          <Button
            :smallMobile="true"
            label="Сохранить"
            @click="save"
            color="warning"
          />
        </div>
      </div>
      <div>
        <blocknot-list
          v-for="elem in arr"
          :key="elem.id"
          :elem="elem"
          @elemRemove="elemRemove"
          @edit="edit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BlocknotList from "@/components/BlocknotList.vue";
import Button from "@/components/Button.vue";

export default {
  components: { BlocknotList, Button },
  emits: [],

  data() {
    return {
      text: "",
      arr: [],
      value: "",
    };
  },

  methods: {
    edit(id, content) {
      this.arr = this.arr.map((el) => {
        if (el.id == id) {
          el.content = content;
        }
        return el;
      });
    },

    elemRemove(id) {
      this.arr = this.arr.filter((el) => id !== el.id);
    },

    save() {
      let name = this.value;
      let content = this.text;

      let id = this.arr.length + 1;
      this.arr.push({ id, name, content });
      this.value = "";
      this.text = "";
    },
    clear() {
      this.text = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.blocknot {
  min-height: 100vh;
  color: white;
  background: linear-gradient(90deg, #485c64, #444c54, #343c3c, #18242c);
  padding: 30px 100px;
  @media screen and (max-width: 850px) {
    padding: 30px 30px;
  }
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    &__prompt {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #000;
      background-color: #fff;
      margin-left: 15px;
      font-size: 23px;
      font-weight: 600;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
    }
  }
  &__container {
    @media screen and (max-width: 1626px) {
      display: block;
    }
    &__top {
      margin-right: 40px;
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
      &__input {
        width: 700px;
        margin: 10px 0px;
        padding: 15px;
        border: 1px solid #ffffffc2;
        border-radius: 20px;
        box-shadow: 0 0 8px 1px rgb(0 0 0 / 34%);
        @media screen and (max-width: 850px) {
          width: 100%;
        }
      }
      &__area {
        width: 700px;
        resize: vertical;
        margin: 10px 0;
        padding: 15px;
        border-radius: 15px;
        border: 0;
        box-shadow: 4px 4px 10px rgb(0 0 0 / 42%);
        height: 87px;
        @media screen and (max-width: 850px) {
          width: 100%;
        }
      }
    }
  }
}

.buttons {
  @media screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
}
</style>
