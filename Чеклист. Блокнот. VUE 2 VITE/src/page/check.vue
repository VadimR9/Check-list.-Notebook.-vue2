<template>
  <div class="lists">
    <div>
      <h1 class="lists__title">Чеклист</h1>
      <div class="lists__form">
        <input
          class="lists__search"
          v-model="seachQuery"
          placeholder="Поиск по названию..."
        />
        <CheckListSelect v-model="selectedSort" :options="sortOptions" />
      </div>
      <Button label="Создать пост" color="warning" @click="toggleModal" />
    </div>
    <check-list-create v-show="isShowModal" @close="toggleModal" @add="add" />

    <check-list
      :posts="sortedAndSearchedPosts"
      @remove="remove"
      v-if="!isPostsLoading"
    />
    <div class="indicator" v-else>
      <div class="donut"></div>
    </div>

    <div class="page">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page__item"
        :class="{
          page__current: page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import CheckListSelect from "@/components/CheckListSelect.vue";
import CheckList from "@/components/CheckList.vue";
import CheckListCreate from "@/components/CheckListCreate.vue";
import Button from "@/components/Button.vue";
import axios from "axios";

export default {
  components: { CheckList, CheckListCreate, Button, CheckListSelect },

  data() {
    return {
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
      isShowModal: false,
      seachQuery: "",
      totalPages: 0,
      page: 1,
      limit: 10,
      posts: [],
    };
  },

  mounted() {
    this.fetchPosts();
  },

  methods: {
    changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchPosts();
    },
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },

    add(title, body) {
      let id = this.posts.length + 1;
      this.posts.push({ id, title, body });
      this.isShowModal = false;
    },
    remove(id) {
      this.posts = this.posts.filter((elem) => id !== elem.id);
    },

    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        // setTimeout(async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
        // this.isPostsLoading = false;
        // }, 1000);
      } catch (e) {
        alert("Ошибка");
      } finally {
        this.isPostsLoading = false;
      }
    },
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.seachQuery.toLowerCase())
      );
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  height: auto;
}
.lists {
  background: -webkit-linear-gradient(90deg, #4bc7dd, #56cadf, #ada9cc);
  background: linear-gradient(90deg, #5acbdf, #4cc2d6, #a7a1ca);
  padding: 30px 200px 20px 100px;
  min-height: 100vh;
  @media screen and (max-width: 767px) {
    padding: 30px 20px 20px 20px;
  }

  &__create {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
  }
  &__search {
    width: 400px;
    border: 1px solid teal;
    padding: 10px 15px;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  &__title {
    text-align: center;
    margin-bottom: 35px;
    color: rgb(0, 24, 24);
  }
  &__form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .page {
    margin-top: 15px;
    display: flex;
    @media screen and (max-width: 767px) {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
    &__item {
      border: 1px solid black;
      padding: 10px;
      cursor: pointer;
    }
    &__current {
      background-color: rgba(0, 128, 128, 0.404);
    }
  }
  @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .indicator {
    display: flex;
    justify-content: center;
  }

  .donut {
    display: inline-block;
    border: 10px solid rgba(0, 0, 0, 0.1);
    border-left-color: #7983ff;
    border-radius: 50%;
    width: 100px;
    height: 100px;

    animation: donut-spin 1.2s linear infinite;
  }
}
</style>
