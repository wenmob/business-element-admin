<template>
  <div class="navMenu">
    <label v-for="(navMenu,index) in navMenus" :key="index">
    <el-menu-item v-if="navMenu.children==undefined&&navMenu.isMenu"
       :key="navMenu.id" :data="navMenu" :index="navMenu.label" :route="navMenu.url">
        <i :class="'fa ' + navMenu.icon"></i>
        <span slot="title">{{navMenu.label}}</span>
      </el-menu-item>

      <el-submenu v-if="navMenu.children&&navMenu.isMenu"
        :key="navMenu.id" :data="navMenu" :index="navMenu.label" >
        <template slot="title">
          <i :class="'fa ' + navMenu.icon"></i>
          <span>{{navMenu.label}}</span>
         </template>
         <el-menu-item v-for="child in navMenu.children" :key="child.id" :index="child.label" :route="child.url">
          <!-- <i :class="'fa ' + child.icon"></i> -->
          <span slot="title">{{child.label}}</span>
         </el-menu-item>
        </el-submenu>
     </label>
    </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navMenus'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
  .el-menu-item.is-active{
    background-color: #fff !important;
    color: black !important;
  }
  .el-menu-item.is-active i{
    color: black !important;
  }
  .el-menu-item i,.el-submenu__title i{
    color: #fff !important;
  }
</style>
