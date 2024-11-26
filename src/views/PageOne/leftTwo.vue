<template>
  <div class="leftThree">
    <div class="text1">区块基本信息</div>
    <div
      style="
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      "
    >
      <!-- <div style="width: 100%; height: 40px"></div> -->
      <iconAndCount
        :bg="bg4"
        :url="url1"
        :num="num1"
        :name="name1"
        :widthPer="'200px'"
      ></iconAndCount>
      <iconAndCount
        :bg="bg3"
        :url="url2"
        :num="num2"
        :name="name2"
        :widthPer="'200px'"
      ></iconAndCount>
      <div style="width: 100%; height: 40px"></div>
      <iconAndCount
        :bg="bg1"
        :url="url3"
        :num="num3"
        :name="name3"
        :widthPer="'200px'"
      ></iconAndCount>
      <iconAndCount
        :bg="bg1"
        :url="url4"
        :num="num4"
        :name="name4"
        :widthPer="'200px'"
      ></iconAndCount>
    </div>
  </div>
</template>

<script setup>
import bg1 from '@/assets/images/PageOne/bg1.png'
// import bg2 from '@/assets/images/PageOne/bg2.png'
import bg3 from '@/assets/images/PageOne/bg3.png'
import bg4 from '@/assets/images/PageOne/bg4.png'
import url1 from '@/assets/images/PageOne/1.png'
import url2 from '@/assets/images/PageOne/2.png'
import url3 from '@/assets/images/PageOne/5.png'
import url4 from '@/assets/images/PageOne/4.png'
import iconAndCount from '@/components/iconAndCount/iconAndCount.vue'
import { ref } from 'vue'
const name1 = ref('新能源汽车')
const num1 = ref(11200)
const name2 = ref('平均利用率')
const num2 = ref(79.5)
const name3 = ref('平均周转率')
const num3 = ref(1.5)
const name4 = ref('重点监控区域')
const num4 = ref(10)
</script>

<style lang="less" scoped>
.leftThree {
  box-shadow: inset 0 0 5px rgb(252, 250, 250);
  // padding-top: 10px;
  padding: 10px;
  height: 315px;
  //   border: 1px solid #acb3bd;
  // background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  // background-size: 100% 100%;
  margin-bottom: -5px;
  .text1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/images/PageOne/title.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 40px;
  }
}
</style>
