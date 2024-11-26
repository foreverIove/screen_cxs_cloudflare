<template>
  <div class="leftThree">
    <div class="text1">虚拟列表(性能好)</div>
    <!-- <div class="text2">重点区域实时停车预警</div> -->
    <div class="general-container">
      <div class="general-body">
        <div class="table-header">
          <span style="width: 32%">导航</span>
          <span style="width: 32%">导航</span>
          <span style="width: 32%">导航</span>
          <!-- <span style="width: 30%">高峰时段</span> -->
        </div>
        <!-- 祖先元素 -->
        <div
          class="scrollView"
          ref="listBox"
          id="scrollableContainer"
          @mouseenter="virStop"
          @mouseleave="reloadVir"
        >
          <!-- 虚拟列表，无数据 -->
          <div :style="{ height: listHeight + 'px' }" style="float: left"></div>
          <div class="scrollable-div">
            <div
              style="
                height: 42px;
                /* background: #06407c; */
                margin-bottom: 6px;
                border: 1px solid #6e6767;
                color: #fff;
                line-height: 42px;
              "
              v-for="(item, index) in Newlist"
              :key="index"
              class="item"
            >
              {{ item.staname }}
            </div>

            <!-- 更多内容 -->
          </div>
        </div>
      </div>
      <!-- {{ dataList1 }} -->
    </div>
  </div>
</template>
<script setup>
import { useTimer } from '@/hooks/useMove3.ts'
import { virtualList } from '@/hooks/VirtualList.ts'
// import { useTimer } from 'scroll_cxs_v3'
import { onMounted, reactive, ref, watch } from 'vue'
// import { reqQueryChgOrderData } from '@/api/operationAnalysis'
let dataList1 = ref([])
let scrollBox22 = ref(null)
const timer = useTimer()
const virtual = virtualList()
// 虚拟列表

// -----------
const listBox = ref(null)
const listHeight = ref(0)
const Newlist = ref(virtual.list)
onMounted(() => {
  getData()
  listHeight.value = dataList1.value.length * virtual.itemSize.value //计算高度
  console.log(listHeight.value, '虚拟列表')

  virtual.list.value = dataList1.value.slice(0, 4) //截6个

  let obj = {
    Dom: listBox.value,
    DataSource: dataList1.value
    // Count: 5
  }
  setTimeout(() => {
    virtual.startTimer(obj)
  }, 1000)
  // console.log(Newlist.value, 'vir2')
})

// data就是数据源

// 虚拟列表
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
}
const virStop = () => {
  // virtual.onMouseEnter()
}
const reloadVir = () => {}
const OutTimer = () => {
  timer.resumeTimer()
}
const useStopTimer = () => {
  timer.stopTimer()
  console.log('触发定时器清除', timer.stopTimer)
}
</script>

<style lang="less" scoped>
/*chrome 和Safari*/
.scrollView::-webkit-scrollbar {
  width: 0 !important;
}
/*IE 10+*/
.scrollView {
  -ms-overflow-style: none;
}
/*Firefox*/
.scrollView {
  overflow: -moz-scrollbars-none;
}
// 祖先
.scrollView {
  // width: 200px;
  height: 200px;
  // background-color: red;
  overflow-y: scroll;
  position: relative;
}
// 父组件
.scrollable-div {
  width: 370px;
  height: 200px;
  overflow-y: auto;
  // border: 1px solid #000;
  position: sticky;
  top: 0px;
}

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
    margin-bottom: 10px;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/images/PageOne/title.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 40px;
  }
  .text2 {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
  }
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
      border-bottom: 1px solid rgba(#3fc2ff, 0.2);
      //   margin-bottom: 6px;
      background-color: #000;

      span {
        //flex: 1;
      }
    }
    .item:hover {
      // border: 1px solid #fff;
      box-shadow:
        inset 0 0 5px rgba(0, 204, 255, 0.8),
        inset 0 0 10px rgba(0, 204, 255, 0.6),
        inset 0 0 15px rgba(0, 204, 255, 0.4),
        inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
    }
  }
}
</style>
