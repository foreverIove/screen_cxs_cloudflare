<template>
  <div class="rightTwo">
    <div class="text1">虚拟列表说明</div>
    <div class="text" style="width: 80%; margin: 0 auto; color: #fff; font-size: 19px">
      说明：
      <br />
      <li>dom元素不会大量的生成</li>

      <li>采用requestAnimationFrame 来进行平滑滚动</li>

      <li>并不会因为滚动条影响其他组件布局，从而产生重绘和回流的风险</li>

      <li>较为便捷的参数传递，简化开发</li>
      <div>参数的可选性以及固定的开发模版让你更快更熟练的使用</div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
let Echarts = ref(null)
const getChart = () => {
  const myChart = echarts.init(Echarts.value)
  const option = {
    // backgroundColor: '#001348', //背景色
    grid: {
      show: 'true',
      borderWidth: '0',
      height: '70%',
      width: '55%',
      x: '30%',
      y: '10%'
    },
    xAxis: {
      show: false, //是否显示x轴
      type: 'value'
    },
    yAxis: [
      {
        type: 'category',
        inverse: true, //让y轴数据逆向
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            // fontWeight: 'bold',
            fontSize: 16
          }
        },
        splitLine: { show: false }, //横向的线
        axisTick: { show: false }, //y轴的端点
        axisLine: { show: false }, //y轴的线
        data: ['联通大厦停车场', '能园停车场', '道路停车场', '顺鑫停车场', '地面停车场']
      },
      {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
          textStyle: {
            color: '#ffffff',
            fontSize: '12'
          },
          formatter: function (value) {
            return value + ''
          }
        },
        data: [8.9, 7.0, 6.1, 5.3, 4.2]
      }
    ],
    series: [
      {
        name: '产出',
        type: 'bar',
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
              {
                offset: 1,
                color: '#1CD0E7'
              },
              {
                offset: 0,
                color: '#0196F7'
              }
            ])
          }
        },
        label: {
          normal: {
            show: false,
            position: 'inside',
            color: 'black',
            fontSize: 14
          }
        },
        barWidth: 10,
        data: [800, 700, 550, 400, 200]
      },
      {
        name: '计划数',
        type: 'bar',
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            color: 'rgba(1,65,134,0.4)'
          }
        },
        barGap: '-100%',
        z: 0,
        barWidth: 10,
        data: [1000, 1000, 1000, 1000, 1000]
      }
    ]
  }
  option && myChart.setOption(option)
}
onMounted(() => {
  // getChart()
})
</script>

<style lang="less" scoped>
.chart-flow {
  height: 100%;
  width: 100%;
  &::before {
    content: ' ';
    width: 169px;
    // height: 169px;
    position: absolute;
    // top: 41px;
    left: 54px;
    // background: url(@/assets/images/power/pie_bg_2.png) no-repeat;
    background: none !important;
  }
}
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
    padding: 10px 10px 10px 10px;
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
      background-color: #0a4cad;

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
