<template>
  <div class="box_1 flex-row">
    <div class="title">xxxxxxxxxxx大屏平台</div>
    <div
      class="menu"
      :class="{ 'left-active': TypeList[3].type1 }"
      @click="onNavigationClick('frontpage', $event)"
    >
      首页
    </div>
    <div
      class="menu"
      :class="{ 'left-active': TypeList[0].type1 }"
      @click="onNavigationClick('OperationalAnalysis', $event)"
    >
      模拟mock
    </div>
    <div
      class="menu"
      :class="{ 'left-active': TypeList[1].type1 }"
      @click="onNavigationClick('dataOverview', $event)"
    >
      导航一
    </div>
    <div
      class="menu"
      :class="{ 'left-active': TypeList[2].type1 }"
      @click="onNavigationClick('safetySupervision', $event)"
    >
      导航二
    </div>

    <!-- <div
      class="text-wrapper_2 flex-col left-btn"
      :class="{ 'left-active': TypeList[0].type1 }"
      @click="onNavigationClick('OperationalAnalysis', $event)"
    >
      <span class="text_2">运营分析</span>
    </div>
    <span class="text_3" @click="onNavigationClick('dataOverview', $event)">大屏平台</span>
    <div
      class="text-wrapper_3 flex-col left-btn"
      :class="{ 'left-active': TypeList[2].type1 }"
      @click="onNavigationClick('safetySupervision', $event)"
    >
      <span class="text_4">安全监管</span>
    </div> -->
    <div
      v-if="!outBtn"
      style="
        height: 50px;
        width: 300px;
        text-align: center;
        /* position: absolute; */
        /* top: 0; */
        z-index: 9999999;
        /* float: right; */
        /* left: 1700px; */
        /* margin-right: 50px; */
      "
      @click="outLogin()"
    >
      <div
        class="auth"
        style="
          width: 30px;
          height: 30px;
          border-radius: 50%;

          margin-top: 15px;
          /* text-align: center; */
          color: #fff;
          line-height: 30px;
          display: inline-block;
          margin-right: 10px;
        "
      >
        <span style="color: rgba(0, 0, 0, 0)">1</span>
        <!-- <img src="@/assets/images/auth/bg.png" alt="" srcset="" /> -->
      </div>
      <span style="color: #fff">{{ getInfo() }}</span>
    </div>
    <div
      v-if="outBtn"
      style="
        height: 50px;
        width: 300px;
        text-align: center;
        /* position: absolute; */
        top: 0;
        z-index: 9999999;
        /* float: right; */
        /* left: 1700px; */
        /* margin-right: 50px; */
      "
      @click="out()"
    >
      <div
        style="
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: black;
          margin-top: 15px;
          text-align: center;
          color: #fff;
          line-height: 30px;
          display: inline-block;
          margin-right: 10px;
        "
      >
        A
      </div>
      <span style="color: #fff">退出</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getInfo } from '@/utils/setToken'

import { getType, setType } from '../../utils/localStorage'
// import useType from '@/stores/counter.ts'

// let changeType = useType()
const router = useRouter()

let TypeList = ref<any>([{ type1: false }, { type1: false }, { type1: false }, { type1: false }])
onMounted(() => {
  const type = getType()
  console.log('进入1', TypeList.value)
  if (type != null) {
    TypeList.value = JSON.parse(type)
    console.log(type, 7888888)
  }
})
// const router = useRouter()
const isActivePath = ref('')
const onNavigationClick = (to: any) => {
  console.log('进入1', TypeList.value)
  console.log(to, 888888888)
  if (to === isActivePath.value || to === isActivePath.value) {
    console.log('您点击的是同一个导航')
  } else {
    if (to == 'dataOverview') {
      console.log(TypeList, 9997)
      router.push({ name: 'ParkingComprehensive' })
      TypeList.value = TypeList.value.map((item) => {
        return { ...item, type1: false }
      })
      TypeList.value[1].type1 = true
      isActivePath.value = 'dataOverview'
      setType(JSON.stringify(TypeList.value))
    } else if (to == 'OperationalAnalysis') {
      console.log(TypeList, 9997)
      router.push({ name: 'PageOne' })
      TypeList.value = TypeList.value.map((item) => {
        return { ...item, type1: false }
      })
      TypeList.value[0].type1 = true

      isActivePath.value = 'OperationalAnalysis'
      setType(JSON.stringify(TypeList.value))
    } else if (to == 'safetySupervision') {
      router.push({ name: 'BusinessCollaboration' })
      TypeList.value = TypeList.value.map((item) => {
        return { ...item, type1: false }
      })
      TypeList.value[2].type1 = true

      isActivePath.value = 'dataOverview'
      setType(JSON.stringify(TypeList.value))
    } else if (to == 'frontpage') {
      router.push({ name: 'frontpage' })
      TypeList.value = TypeList.value.map((item) => {
        return { ...item, type1: false }
      })
      console.log('进入', TypeList)
      TypeList.value[3].type1 = true
      console.log(TypeList, 9999999999)
      isActivePath.value = 'frontpage'
      setType(JSON.stringify(TypeList.value))
    }
    //   // 对to进行判断是否包含指定数据
    isActivePath.value = to
  }
}
const outBtn = ref(false)
const outLogin = () => {
  outBtn.value = true
}
const out = () => {
  // 清除token,回到登录
  router.push('/login')
}
</script>
<style src="@/assets/common.css" />
<style scoped lang="less">
.auth {
  background: url(@/assets/images/auth/bg.png) 100% no-repeat;
  background-size: 100% 100%;
}
.title {
  font-size: 35px;
  font-family: YouSheBiaoTiHei;
  color: #fff;
  line-height: 60px;
  margin-left: 20px;
  margin-right: 110px;
}
.menu {
  font-size: 22px;
  color: #fff;
  height: 51px;
  line-height: 51px;
  width: 176px;
  text-align: center;
  // border: 1px solid red;
  margin-left: 90px;
  margin-top: 5px;
  z-index: 9999;
}
.left-active,
.left-btn:hover {
  background: url(@/assets/images/header-active.png) !important;
  background-size: 100% 100% !important;

  color: rgba(255, 255, 255, 1);
}

.box_1 {
  z-index: 999;
  position: absolute;
  // width: 1920px;
  display: flex;
  width: 1920px;
  height: 90px;
  background: url(@/assets/images/main-top.png) 100% no-repeat;
  background-size: 100% 100%;

  .text-wrapper_1 {
    height: 31px;
    background: url(@/assets/static/Header/normal-left.png);

    background-size: 100% 100%;
    width: 128px;
    margin: 7px 0 0 26px;

    .text_1 {
      width: 70px;
      height: 17px;
      overflow-wrap: break-word;
      color: rgba(0, 233, 244, 1);
      font-size: 18px;
      font-family: SourceHanSansCN-Regular;
      font-weight: NaN;
      text-align: left;
      white-space: nowrap;
      line-height: 29px;
      margin: 7px 0 0 17px;
    }
  }

  .text_3 {
    text-shadow: 3px 5px 0px rgba(17, 20, 22, 0.22);
    background-image: linear-gradient(
      180deg,
      rgba(36, 83, 152, 0.35) 0,
      rgba(36, 83, 152, 0.35) 0,
      rgba(255, 255, 255, 0.35) 100%,
      rgba(255, 255, 255, 0.35) 100%
    );
    width: 450px;
    height: 36px;
    float: left;

    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 48px;
    font-family: PangMenZhengDao;
    font-weight: NaN;
    text-align: center;
    line-height: 15px;
    -webkit-background-clip: text;
    /* -webkit-text-fill-color: transparent; */
    margin: 30px 0 0 528px;
  }

  .text-wrapper_2 {
    height: 31px;
    background: url(@/assets/static/Header/normal-left.png);

    background-size: 100% 100%;
    width: 128px;
    margin: 7px 0 0 95px;

    .text_2 {
      width: 71px;
      height: 17px;

      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      font-family: SourceHanSansCN-Regular;
      font-weight: NaN;
      text-align: left;
      white-space: nowrap;
      line-height: 29px;
      margin: 3px 0 0 20px;
    }
  }

  .text-wrapper_3 {
    height: 31px;
    background: url(@/assets/static/Header/normal-left.png);

    background-size: 128px 31px;
    width: 127px;
    margin: 7px 113px 0 495px;
  }

  .text_4 {
    width: 70px;
    height: 17px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-family: SourceHanSansCN-Regular;
    font-weight: NaN;
    text-align: left;
    white-space: nowrap;
    line-height: 29px;
    margin: 3px 0 0 19px;
  }
}
</style>
