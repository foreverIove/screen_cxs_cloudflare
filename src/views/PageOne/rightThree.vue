<template>
  <div class="rightTwo">
    <div class="text1">
      <span>宽松停车场</span>
    </div>
    <div class="all">
      <div class="all-item" v-for="item in list" :style="{ background: 'url(' + item.url + ')' }">
        <div>{{ item.name }}</div>
        <div>{{ item.value }}</div>
        <div>{{ item.address }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([])
list.value = [
  {
    name: '宽松',
    value: 100,
    value2: 'xxx',
    url: '/src/assets/images/PageOne/carbg1.png',
    address: '能园地面停车场'
  },
  {
    name: '宽松',
    value: 40,
    value2: 'xxx',
    url: '/src/assets/images/PageOne/carbg1.png',
    address: '地面停车场'
  },
  {
    name: '宽松',
    value: 87,
    value2: 'xxx',
    url: '/src/assets/images/PageOne/carbg1.png',
    address: '道路停车位'
  },
  {
    name: '暂无',
    value: 55,
    value2: 'xxx',
    url: '/src/assets/images/PageOne/carbg3.png',
    address: '顺鑫停车场'
  },
  {
    name: '宽松',
    value: 92,
    value2: 'xxx',
    url: '/src/assets/images/PageOne/carbg1.png',
    address: '联通大厦停车场'
  },
  {
    name: '宽松',
    value: 93,
    value2: 'xxx',
    url: '/src/assets/images/PageOne/carbg1.png',
    address: '24h停车场'
  }
]
</script>

<style lang="less" scoped>
.rightTwo {
  box-shadow: inset 0 0 5px rgb(252, 250, 250);
  padding-top: 10px;
  height: 315px;
  //   border: 1px solid #acb3bd;
  // background: #0049ac;
  // background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  // background-size: 100% 100%;
  margin-bottom: -5px;
  margin-top: 20px;
  .text1 {
    color: #fff;
    font-size: 18px;
    // font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    height: 35px;
    line-height: 35px;
    // border: 1px solid red;
    background: url(@/assets/images/PageOne/title.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 40px;
    position: relative;
    span {
      display: block;
      position: absolute;
      top: -5px;
    }
  }
  .all {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:;
    // padding: 20px;
    padding: 0 20px;
    .all-item {
      width: 130px;
      height: 110px;
      // background: #0176a5;
      color: #fff;
      margin-bottom: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background: url(@/assets/images/PageOne/carbg1.png) 100% no-repeat;
      background-size: 100% 100%;
      &:hover {
        // transform: rotate(0deg) scale(1.5);
        animation: change 2s linear; /* 动画效果 */
      }
      @keyframes change {
        0% {
          transform: rotate(0deg) scale(1); /* 初始状态 */
        }
        10% {
          transform: rotate(-5deg) scale(1);
        }
        20% {
          transform: rotate(5deg) scale(1);
        }
        30% {
          transform: rotate(-5deg) scale(1);
        }
        40% {
          transform: rotate(5deg) scale(1);
        }
        50% {
          transform: rotate(0deg) scale(1);
        }
        70% {
          transform: rotate(0deg) scale(1.2);
        }
        100% {
          transform: scale(1); /* 结束状态，恢复原始大小 */
        }
      }
    }
  }
}
</style>
