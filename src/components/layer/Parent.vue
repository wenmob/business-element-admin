<template>
  <el-container id="layer-page">
    <el-header id="layer-head">
        <icon name="gm" scale="2.3" class="layer-head-ico"></icon>
        <span class="layer-head-title">系统管理</span>
        <div class="layer-head-use"><el-tag>{{username}}</el-tag><el-button type="warning" size="small" style="margin-left: 30px;">退出</el-button></div>
        <icon name="user" scale="2.3" class="layer-head-useico"></icon>
    </el-header>
    <el-container>
      <el-aside width="200px" id="layer-aside-left">
        <el-menu
         :default-active="leftStats"
         class="el-menu-vertical-demo"
         @select="menuSelected"
         background-color="transparent"
         text-color="#fff"
         active-text-color="black"
         router
         >
         <NavMenu :navMenus="leftMenus"></NavMenu>
        </el-menu>
      </el-aside>
      <el-aside id="layer-aside-right">
        <el-header id="layer-aside-head">
          <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="skipNext">
            <el-tab-pane
              v-for="item in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
            </el-tab-pane>
          </el-tabs>
          <div style="clear:both"></div>
        </el-header>
        <el-main>
          <transition :name="transitionName">
           <router-view class="Router"/>
          </transition>
        </el-main>
      </el-aside>
     <!-- <el-main>
          asdasd
      </el-main>  -->
    </el-container>
  </el-container>
</template>

<script>
import Icon from 'vue-svg-icon/Icon.vue'
import NavMenu from './NavMenu'
import { datas } from '@/assets/js/jsondate'
export default {
  data () {
    return {
      username: 'admin',
      leftStats: this.$route.name,
      transitionName: 'slide-right',
      editableTabs: [],
      editableTabsValue: '', // 标签被选中的位置
      tabIndex: 0, // 标签的索引
      leftMenus: []
    }
  },
  components: {
    Icon,
    NavMenu
  },
  mounted () {
    this.initData()
  },
  methods: {
    // 初始化
    initData () {
      this.leftMenus = datas
      let name = this.leftStats
      let path = this.$route.path
      this.addTab(name, path)
    },
    // 添加标签的方法
    addTab (name, path) {
      let n = this.editableTabs.findIndex(ele => {
        return ele.title === name
      })
      if (n === -1) {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: name,
          name: newTabName,
          path: path
        })
        this.editableTabsValue = newTabName
      } else {
        this.editableTabsValue = this.editableTabs[n].name
      }
    },
    // 删除标签的方法
    removeTab (targetName) {
      let _this = this
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
              _this.$router.push(nextTab.path)
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    // 点击标签方法
    skipNext (obj) {
      let tabs = this.editableTabs
      let n = parseInt(obj.index)
      this.$router.push(tabs[n].path)
      this.editableTabsValue = tabs[n].name
      this.leftStats = tabs[n].title
    },
    // 点击左边菜单的方法
    menuSelected (name, arr, obj) {
      this.leftStats = name
      this.addTab(name, obj.route)
      // console.log(obj.route)
    }
  },
  watch: {
    // 监听路由的方法
    '$route' (to, from) {
      let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      this.leftStats = to.name
    }
  }
}
</script>

<style>
  @import url('../../assets/css/bus.css');
  #layer-page {
    width: 100%;
    height: 100%;
  }
  #layer-head {
    background-color: #394D86;
    height: 46px !important;
  }
  #layer-aside-left {
    background-color: #29365D;
    overflow: auto !important;
  }
  #layer-aside-right {
     width: calc(100% - 200px) !important;
  }
  #layer-aside-head{
    height: 40px !important;
    padding: 0px !important;
  }
  .Router {
     width: 100%;
     transition: all .3s ease;
     -webkit-transition: all .3s ease;
     -moz-transition: all .3s ease;
     -o-transition: all .3s ease;
    }

  .slide-left-enter,
  .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
  .el-menu{
    border-style: none !important;
  }
  .layer-head-ico{
    float: left;
    margin-top: 12px;
  }
  .layer-head-title{
    float: left;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
    margin-top: 13px;
  }
  .layer-head-useico {
    float: right;
    margin-top: 12px;
  }
  .layer-head-use{
    padding: 6px 0px;
    float: right;
  }
  .layer-head-use .el-tag{
    font-size: 18px;
    border-style: none;
    background-color: transparent;
  }
</style>
