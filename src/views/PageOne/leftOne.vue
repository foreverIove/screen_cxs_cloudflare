<template>
  <div class="leftThree">
    <div class="text1">实时数据</div>

    <div class="chart-flow" style="float: left" ref="Echarts"></div>
    <div class="echarts-right">
      <div class="item">
        <div>当前泊位占用率</div>
        <div>90.0%</div>
      </div>
      <div class="item">
        <div>昨日周转率</div>
        <div>1.77</div>
      </div>
    </div>
    <div class="bg">
      <!-- <img src="../../assets/images/PageOne/leftOnebg.png" alt="" /> -->
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
let Echarts = ref(null)
const getChart = () => {
  const myChart = echarts.init(Echarts.value)
  let value = 78
  const option = {
    grid: {
      // left: 20,
      right: 40,
      bottom: '5',
      // top: 107,
      containLabel: true
    },
    // backgroundColor: '000',

    xAxis: {
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      }
      // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    series: [
      // 内圆
      {
        type: 'pie',
        radius: ['0', '50%'],
        center: ['50%', '50%'],
        z: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0, [
              {
                offset: 0,
                color: '#1147A1'
              },
              {
                offset: 0.5,
                color: '#423DB3'
              },
              {
                offset: 1,
                color: '#1147A1'
              }
            ]),
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [100]
      },

      //刻度尺
      {
        // name: "白色圈刻度",
        type: 'gauge',
        radius: '87%',
        startAngle: 225, //刻度起始
        endAngle: -134.8, //刻度结束
        z: 4,
        axisTick: {
          show: true,
          lineStyle: {
            width: 2,
            color: 'rgba(1,244,255, 0.9)'
          }
        },
        splitLine: {
          length: -16, //刻度节点线长度
          lineStyle: {
            width: 2,
            color: 'rgba(1,244,255, 0.9)'
          } //刻度节点线
        },
        axisLabel: {
          color: 'rgba(255,255,255,0)',
          fontSize: 12
        }, //刻度节点文字颜色
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            opacity: 0
          }
        },
        detail: {
          show: false
        },
        data: [
          {
            value: 0,
            name: ''
          }
        ]
      },
      // 刻度圈
      {
        type: 'pie',
        radius: ['0%', '73%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: false,
            textStyle: {
              fontWeight: 'bold'
            }
          }
        },
        itemStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0.05,
                  color: 'rgba(32,36,107, 0.2)'
                },
                {
                  offset: 0.5,
                  color: 'rgba(32,36,107,0.3)'
                },
                {
                  offset: 0.95,
                  color: 'rgba(32,36,107, 0.2)'
                }
              ]
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 3235
          }
        ]
      }
    ]
  }
  option && myChart.setOption(option)
}
onMounted(() => {
  getChart()
})
</script>

<style lang="less" scoped>
.bg {
  position: absolute;
  top: 95px;
  left: 25px;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1); /* 初始状态 */
  }
  100% {
    transform: rotate(360deg) scale(1); /* 结束状态，恢复原始大小 */
  }
}
.chart-flow {
  height: 270px;
  width: 240px;
  // border: 1px solid red;
  animation: rotate 6s linear infinite; /* 动画效果 */
  &::before {
    content: ' ';
    width: 169px;
    // height: 169px;
    position: absolute;
    // top: 41px;
    left: 54px;
  }
}
.leftThree {
  box-shadow: inset 0 0 5px rgb(252, 250, 250);
  padding-top: 10px;
  position: relative;
  height: 315px;
  //   border: 1px solid #acb3bd;

  // background: url(@/assets/images/PageOne/leftOne.png) 100% no-repeat;
  // background-size: 100% 100%;
  // margin-bottom: -5px;
  .text1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    // border: 1px solid red;
    height: 45px;
    line-height: 35px;
    background: url(@/assets/images/PageOne/title.png) 100% no-repeat;
    background-size: 100% 100%;
    padding-left: 40px;
  }
  .echarts-right {
    float: right;
    width: 200px;
    height: 270px;
    // border: 1px solid black;
    .item {
      width: 180px;
      height: 80px;
      padding: 10px 0;
      margin: 30px auto;
      text-align: center;
      line-height: 30px;
      color: #fff;

      box-shadow:
        inset 0 0 5px rgba(0, 204, 255, 0.8),
        inset 0 0 5px rgba(0, 204, 255, 0.6),
        inset 0 0 5px rgba(0, 204, 255, 0.4),
        inset 0 0 20px rgba(0, 204, 255, 0.2); /* 发光颜色及强度 */
    }
  }
}
</style>
