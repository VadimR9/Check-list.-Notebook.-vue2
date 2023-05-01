<template>
  <div class="billboard-second">
    <div class="container">
      <div class="billboard-second__img">
        <div class="billboard-second__banner">
          <p class="billboard-second__banner__travel">Travel</p>
          <h2 class="billboard-second__banner__title">
            Discover Your Inner Genius To Better
          </h2>
          <div class="billboard__ready">
            <router-link :to="{ name: 'Blocknot' }"
              >Start using the blocknot</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.billboard-second {
  max-width: 1230px;

  margin: 0 auto;
  transition: 1s;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  &__img {
    position: relative;
    background-image: url(/img/blue.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 450px;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.288);
      z-index: 2;
    }
  }
  &__banner {
    position: relative;
    z-index: 3;
    border-top: 5px solid rgb(250, 69, 69);
    position: relative;
    top: 350px;
    margin: 0 auto -60px;
    padding: 60px 20px;
    max-width: 90%;
    display: flex;
    background-color: #686868;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1s;
    @media screen and (max-width: 767px) {
      top: 0px;
      background-color: #ffffff00;
    }
    &__travel {
      padding: 4px 16px;
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.2em;
      color: #ef534f;
      text-transform: uppercase;
      font-family: Poppins, sans-serif;
    }
    &__title {
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 30px;
      font-size: 48px;
      color: #ffffff;
      font-family: Playfair Display, serif;
      font-weight: 500;
      @media screen and (max-width: 767px) {
        font-size: 25px;
      }
    }
  }
}
.container {
  margin-bottom: 200px;
  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
}
</style>
