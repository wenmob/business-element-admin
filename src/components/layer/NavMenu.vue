<template>
  <div class="navMenu">
    <label v-for="(navMenu,index) in navMenus" :key="index">
    <el-menu-item v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
       :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.alias" :route="navMenu.entity.value"
     disabled="">
        <i :class="navMenu.entity.icon"></i>
        <span slot="title">{{navMenu.entity.alias}}</span>
      </el-menu-item>

      <el-submenu v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
        :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.alias">
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span> {{navMenu.entity.alias}}</span>
         </template>
         <el-menu-item v-for="child in navMenu.childs" :key="child.entity.id" :index="child.entity.alias" :route="child.entity.value">
          <i :class="child.entity.icon"></i>
          <span slot="title">{{child.entity.alias}}</span>
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
</style>
