<template>
  <div class="leftThree">
    <div class="text1">触底反弹（效果好）</div>
    <div class="general-container">
      <div class="general-body">
        <div class="table-header">
          <span style="width: 25%">导航</span>
          <span style="width: 25%">导航</span>
          <span style="width: 22%">导航</span>
          <span style="width: 30%">导航</span>
        </div>
        <div class="box">
          <div
            class="scroll-box"
            ref="scrollBox2"
            data-id="aaa"
            @mouseover="useStopTimer"
            @mouseleave="OutTimer"
          >
            <div class="scroll-box-item" v-for="item in dataList1" :key="item.id">
              <div class="ellipsis" style="width: 25%; line-height: 15px">
                {{ item.staname }}
              </div>
              <div
                class=" "
                style="
                  width: 25%;
                  height: 100%;
                  padding-top: 5px;
                  align-items: flex-start;
                  word-wrap: break-word;
                "
              >
                {{ item.transactionid }}
              </div>
              <div class="scroll-box-title ellipsis" style="width: 25%; line-height: 30px">
                {{ item.starttime }}
              </div>
              <div style="width: 25%; margin-left: 0px; border-box: box-sizing">
                {{ item.endtime }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- {{ dataList1 }} -->
    </div>
  </div>
</template>

<script setup>
import { useTimer } from '@/hooks/useMove3.ts'
// import { useTimer } from 'scroll_cxs_v3'
import { onMounted, reactive, ref, watch } from 'vue'
// import { reqQueryChgOrderData } from '@/api/operationAnalysis'
let dataList1 = ref([])
let scrollBox2 = ref(null)
const timer = useTimer()
onMounted(() => {
  // console.log(Echarts.value)
  // useMove(dataList1.value,scrollBox2.value)
  getData()
})

const getData = async () => {
  //   let result = await reqQueryChgOrderData()
  dataList1.value = [
    {
      staname: '能园地面停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '道路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '花园路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '顺鑫停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '火车站停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '地下停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '颖秀路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '春晖路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '银座停车场',
      transactionid: 199,
      starttime: '300',
      endtime: '11:00-2:00'
    },
    {
      staname: '能园地面停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '道路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '花园路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '顺鑫停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '火车站停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '地下停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '颖秀路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '春晖路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '银座停车场',
      transactionid: 199,
      starttime: '300',
      endtime: '11:00-2:00'
    },
    {
      staname: '能园地面停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '道路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '花园路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '顺鑫停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '火车站停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '地下停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '颖秀路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '春晖路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '银座停车场',
      transactionid: 199,
      starttime: '300',
      endtime: '11:00-2:00'
    },
    {
      staname: '能园地面停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '道路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '花园路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '顺鑫停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '火车站停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '地下停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '颖秀路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '春晖路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '银座停车场',
      transactionid: 199,
      starttime: '300',
      endtime: '11:00-2:00'
    },
    {
      staname: '能园地面停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '道路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '花园路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '顺鑫停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '火车站停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '地下停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '颖秀路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '春晖路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '银座停车场',
      transactionid: 199,
      starttime: '300',
      endtime: '11:00-2:00'
    },
    {
      staname: '能园地面停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '道路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '花园路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '顺鑫停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '火车站停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '地下停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '颖秀路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '春晖路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '银座停车场',
      transactionid: 199,
      starttime: '300',
      endtime: '11:00-2:00'
    },
    {
      staname: '能园地面停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '道路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '花园路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '顺鑫停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '火车站停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '地下停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '颖秀路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '春晖路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '银座停车场',
      transactionid: 199,
      starttime: '300',
      endtime: '11:00-2:00'
    },
    {
      staname: '能园地面停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '道路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '花园路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '顺鑫停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '火车站停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '地下停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '颖秀路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '春晖路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '银座停车场',
      transactionid: 199,
      starttime: '300',
      endtime: '11:00-2:00'
    },
    {
      staname: '能园地面停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '道路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '花园路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '顺鑫停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '火车站停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '地下停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '颖秀路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '春晖路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '银座停车场',
      transactionid: 199,
      starttime: '300',
      endtime: '11:00-2:00'
    },
    {
      staname: '能园地面停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '道路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '花园路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '顺鑫停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '火车站停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '地下停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '颖秀路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '奥体中路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '春晖路停车场',
      transactionid: 99,
      starttime: '350',
      endtime: '11:00-2:00'
    },
    {
      staname: '银座停车场',
      transactionid: 199,
      starttime: '300',
      endtime: '11:00-2:00'
    }
  ]

  //   if (result.code == 0) {
  //     dataList1.value = result.chgOrderData
  //     console.log('获取充电订单', dataList1)
  timer.startTimer({
    DataSource: dataList1.value, //必填
    Dom: scrollBox2.value //必填
    // duration: 10
    // Count: 3,
    // Height: 41
  })

  //   }
}
const OutTimer = () => {
  setTimeout(() => {
    timer.startTimer({
      DataSource: dataList1.value, //必填
      Dom: scrollBox2.value //必填
      // duration: 10
      // Count: 3,
      // Height: 41
    })
  }, 500)
  timer.resumeTimer()
}
const useStopTimer = () => {
  timer.stopTimer()
}
</script>

<style lang="less" scoped>
.leftThree {
  box-shadow: inset 0 0 5px rgb(252, 250, 250);
  padding-top: 10px;
  height: 315px;
  //   border: 1px solid #acb3bd;
  // background: #0049ac;
  // background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  // background-size: 100% 100%;
  margin-bottom: -5px;
  overflow: hidden;
  .text1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    // margin-bottom: 10px;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/images/PageOne/title.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 40px;
  }
}
// .box{
//     height: 300px;
//     border: 1px solid red;
// }
.scroll-box-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.general-container {
  position: relative;

  .general-body {
    padding: 0px 10px 10px 10px;
    margin-top: 10px;
    overflow: hidden;
    height: 260px;
    .table-header {
      height: 40px;
      line-height: 40px;
      width: 100%;
      text-align: center;
      display: flex;
      font-size: 16px;
      position: relative;
      top: -10px;
      color: #ccddf5;
      font-weight: bold;
      border-bottom: 2px solid rgba(#3fc2ff, 0.2);
      //   margin-bottom: 6px;
      background-color: #000;
      z-index: 999;

      span {
        //flex: 1;
      }
    }

    .scroll-box {
      margin: auto;
      width: 100%;
      height: 204px;
      //   overflow: hidden;
      cursor: pointer;
      color: #99bff3;
      font-size: 16px;
      border-top: none;
      font-weight: 400;

      .scroll-box-item {
        padding: 10px;
        box-sizing: border-box;
        font-size: 12px;
        flex: 1;
        justify-content: stretch;
        height: 40px;
        margin-bottom: 6px;
        text-align: center;
        display: flex;
        // align-items: center;
        align-items: center;
        background: rgba(#3fc2ff, 0.1);
        overflow:;
        border: 1px solid #6e6767;
        //height: 40px;
        //line-height: 40px;
        //display: flex;
        &:hover {
          // border: 1px solid #fff;
          box-shadow:
            inset 0 0 5px rgba(0, 204, 255, 0.8),
            inset 0 0 10px rgba(0, 204, 255, 0.6),
            inset 0 0 15px rgba(0, 204, 255, 0.4),
            inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
        }
        div {
          //flex: 1;
          color: #99bff3;
          pointer-events: auto;
          display: -webkit-box;
          -webkit-line-clamp: 2; //控制文字显示行数
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
