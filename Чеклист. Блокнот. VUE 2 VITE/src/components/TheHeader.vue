<template>
  <header>
    <nav>
      <ul class="menu">
        <li class="menu__item">
          <router-link :to="{ name: 'Home' }">Главная</router-link>
        </li>
        <li class="menu__item">
          <router-link :to="{ name: 'Check' }">Чеклист</router-link>
        </li>
        <li class="menu__item">
          <router-link :to="{ name: 'Blocknot' }">Блокнот</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
.menu {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    color: #8a2a2a;
    font-size: 18px;
    margin: 0 40px;
    list-style-type: none;
    @media screen and (max-width: 400px) {
      margin: 0 10px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
