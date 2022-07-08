<template>
  <div>
    <!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu mode="vertical">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {
    routes() {
      return this.$router.options.routes
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>
