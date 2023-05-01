<template>
  <div>
    <BillboardMain />
    <BillboardSecond />
  </div>
</template>

<script>
import BillboardMain from "@/components/Billboards/BillboardMain.vue";
import BillboardSecond from "@/components/Billboards/BillboardSecond.vue";
export default {
  components: { BillboardMain, BillboardSecond },
  data: () => ({
    date: new Date(),
  }),
  methods: {
    formatDate2: (d) => d.toLocaleString("ru-RU").replace(",", "").slice(0, -3),
  },
};
</script>

<style lang="scss" scoped></style>
