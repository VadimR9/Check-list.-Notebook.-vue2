<template>
  <transition-group name="list">
    <div class="list" v-for="post in posts" :key="post.id">
      <div class="list__post">
        <div class="list__post__id">{{ post.id }}</div>
        <div class="list__post__right">
          <div>
            <div class="list__post__text">
              <span>Название: </span>{{ post.title }}
            </div>
            <div class="list__post__text">
              <span>Описание: </span> {{ post.body }}
            </div>
          </div>
          <div class="list__post__remove">
            <Button
              @click="$emit('remove', post.id)"
              label="Удалить"
              color="second"
            />
          </div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: { Button },
  props: { posts: Object, reguired: true },
  emits: ["remove"],
};
</script>

<style lang="scss" scoped>
.list {
  &__post {
    display: flex;
    align-items: center;
    margin-top: 15px;
    padding: 15px;
    border: 2px solid teal;
    &__id {
      padding: 10px;
      width: 40px;
      height: 40px;
      font-size: 18px;
      border-radius: 50%;
      margin-right: 10px;
      background-color: #ff9c9c;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__text {
      font-size: 18px;
      margin-bottom: 5px;
    }
    &__right {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 767px) {
        flex-direction: column;
      }
    }
  }
}
span {
  font-weight: 600;
  font-size: 18px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.list-move {
  transition: transform 0.4s ease;
}
</style>
