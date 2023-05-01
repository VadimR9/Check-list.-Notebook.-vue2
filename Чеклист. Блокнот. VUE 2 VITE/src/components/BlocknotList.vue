<template>
  <div class="lists">
    <div class="lists__item">
      <div class="lists__item__record" @click="on">
        {{ elem.id }}. {{ elem.name }}
      </div>
      <Button
        label="X"
        @click="$emit('elemRemove', elem.id)"
        color="second"
        size="circle"
      />
    </div>

    <div class="lists__item__edit">
      <!-- <div> -->
      <div class="lists__item__edit__left" v-if="isOn" @dblclick="editElem">
        {{ elem.content }}
      </div>
      <div class="lists__item__edit__left" v-if="editOn">
        <textarea class="lists__item__edit__text" v-model="newText"></textarea>
      </div>
      <!-- </div> -->
      <Button
        label="✓"
        color="warning"
        size="circle"
        v-if="editOn"
        @click="saveElem"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: { Button },
  emits: ["elemRemove", "edit"],
  props: { elem: Object },
  data() {
    return {
      isOn: false,
      editOn: false,
      newText: this.elem.content,
    };
  },
  methods: {
    saveElem() {
      (this.editOn = false),
        (this.isOn = true),
        this.$emit("edit", this.elem.id, this.newText);
    },

    editElem() {
      (this.editOn = true), (this.isOn = false);
    },

    on() {
      this.isOn = !this.isOn;
    },
  },
};
</script>

<style lang="scss" scoped>
.lists {
  @media screen and (max-width: 1626px) {
    margin-left: 0px;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    &__record {
      display: flex;
      align-items: center;
      height: 30px;
      box-shadow: 0 5px 10px rgb(98 140 255 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
      width: 700px;
      padding: 20px;
      margin: 5px 14px;
      font-size: 18px;
      border: 1px solid #002878;
    }
    &__edit {
      display: flex;
      align-items: center;
      justify-content: center;
      &__left {
        box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5),
          1px 1px 5px rgba(255, 255, 255, 1);
        background-color: #fff;
        text-align: center;
        width: 100%;
        max-width: 700px;
        padding: 20px;
        margin: 0 14px;
        color: #141414;
        font-size: 18px;
        border: 1px solid #002878;
        max-height: 400px;
        overflow: scroll;
      }
      &__text {
        padding: 10px;
        width: 100%;
        resize: vertical;
        border-radius: 15px;
        border: 0;
        box-shadow: 4px 4px 10px rgb(0 0 0 / 42%);
        height: 87px;
      }
    }
  }
}
</style>
