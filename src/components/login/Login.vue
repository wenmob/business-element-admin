<template>
  <div class="bis-page" id="login">
    <div id="login-cont" align="center">
       <h3 id="login-h">后台管理系统<br/><span>版本_V0.1</span></h3>
       <el-form id="login-form" size="small" :model="userInfo" :rules="rules" ref="userInfo">
          <el-form-item prop="username">
            <el-col :span="4">
              <span>账号：</span>
            </el-col>
            <el-col :span="17">
              <el-input type="text" v-model="userInfo.username" placeholder="请输入账号" auto-complete="off"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="password">
            <el-col :span="4">
              <span>密码：</span>
            </el-col>
            <el-col :span="17">
              <el-input type="password" v-model="userInfo.password" placeholder="请输入密码" auto-complete="off"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item prop="picCode">
            <el-col :span="5">
              <span>验证码：</span>
            </el-col>
            <el-col :span="8">
              <el-input type="text" v-model="userInfo.picCode" placeholder="请输入验证码" auto-complete="off"></el-input>
            </el-col>
            <el-col :span="7" :offset="1">
              <img id="pic-code" width="100%" height="32" @click="refCode" :src="srcCode"/>
            </el-col>
          </el-form-item>
          <el-form-item>
           <el-button type="primary" style="width:130px;float:right;margin-right:35px;" @click="submitForm('userInfo')">提交</el-button>
          </el-form-item>
       </el-form>
    </div>
  </div>
</template>

<script>
import {API} from '../../utils/api'
export default {
  name: 'Login',
  data () {
    return {
      userInfo: {
        picKey: '',
        username: '',
        password: '',
        picCode: ''
      },
      rules: {
        username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        picCode: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]

      },
      srcCode: ''
    }
  },
  mounted () {
    this.refCode()
  },
  methods: {
    guid () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0
        let v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    },
    refCode () {
      let guid = this.guid()
      this.userInfo.picKey = guid
      this.srcCode = 'http://a.yingqw.com/code?key=' + guid
    },
    submitForm (formName) {
      const _this = this
      let userInfo = _this.userInfo
      this.$refs[formName].validate((valid) => {
        if (valid) {
          API.login(userInfo.picKey, userInfo.username, userInfo.password, userInfo.picCode).then(response => {
            if (response.code === 0) {
              console.log(response)
            } else {
              _this.$message({
                message: response.data,
                type: 'warning'
              })
              _this.refCode()
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
  @import url('../../assets/css/bus.css');
  #login {
    background-image: url('../../assets/images/bg.jpg');
    background-repeat: no-repeat;
  }
  #login-cont{
    position: absolute;
    width: 400px;
    height: 330px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    -webkit-box-shadow:0 0 10px rgba(255, 255, 255, .4);
    -moz-box-shadow:0 0 10px rgba(255, 255, 255, .4);
    box-shadow:0 0 10px rgba(255, 255, 255, .4);
  }
  #login-h{
   width: 140px;
   color: #0862C4;
   font-weight: 600;
   font-size: 20px;
   padding: 7px 0px;
   border-radius: 2px;
  }
  #login-h span{
    font-size: 12px;
  }
  #login-form{
    width: 300px;
  }
  #pic-code{
    border-radius: 2px;
  }
</style>
