<template>
  <div class="billboard">
    <div class="billboard__content">
      <h2 class="billboard__title">One Simple Word To Success</h2>
      <div class="billboard__time">
        <img class="billboard__img" src="/svg/clock-24.png" />
        <strong class="billboard__clock">{{ formatDate2(date) }}</strong>
      </div>
      <div class="billboard__ready">
        <router-link :to="{ name: 'Check' }"
          >Start using the checklist</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
  }),
  methods: {
    formatDate2: (d) => d.toLocaleString("ru-RU").replace(",", "").slice(0, -3),
  },
};
</script>

<style lang="scss" scoped>
.billboard {
  position: relative;
  background: url("/img/Foto.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    height: 450px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0 0 0 / 19%);
    z-index: 2;
  }
  &__content {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__body {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__time {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  &__img {
    margin-right: 5px;
  }
  &__title {
    margin-bottom: 20px;
    font-size: 38px;
    line-height: 1.2em;
    font-family: Playfair Display, serif;
    color: #fff;
    @media screen and (max-width: 767px) {
      font-size: 25px;
    }
  }
  &__clock {
    color: #f2f2f2;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
