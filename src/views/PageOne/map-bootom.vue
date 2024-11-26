<template>
  <div class="leftThree">
    <div class="text1" style="padding-left: 60px">触底反弹说明</div>
    <div class="text" style="width: 80%; margin: 0 auto; color: #fff; font-size: 17px">
      说明：
      <br /><br />
      <li>同样采用requestAnimationFrame让滚动更加流程</li>
      <br />
      <li>更加明显的感觉滚动的方向</li>
      <br />
      <li>它相对于虚拟列表，有些缺点：大量的dom渲染</li>
      <br />
      <li>并不会因为滚动条影响其他组件布局，从而产生重绘和回流的风险</li>
      <br />
      <li>较为便捷的参数传递，简化开发</li>
      <div>参数的可选性以及固定的开发模版让你更快更熟练的使用</div>
    </div>
    <!-- <div class="chart-flow" style="float: left" ref="Echarts"></div> -->
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
let Echarts = ref(null)
const getChart = () => {
  let myColor = ['#59FFF5', '#59FFF5', '#59FFF5', '#59FFF5', '#59FFF5'].reverse()

  const propData = [
    { name: '能园地面停车场', value: '115.10', ratio: '28.99' },
    { name: '地面停车场', value: '84.57', ratio: '21.3' },
    { name: '道路停车场', value: '71.98', ratio: '18.13' },
    { name: '顺鑫停车场', value: '28.21', ratio: '7.1' },
    { name: '联通大厦停车场', value: '16.35', ratio: '4.12' },
    { name: '火车站停车场', value: '115.10', ratio: '28.99' },
    { name: '地上停车场', value: '84.57', ratio: '21.3' },
    { name: '舜耕路停车场', value: '71.98', ratio: '18.13' },
    { name: '。。。', value: '28.21', ratio: '7.1' },
    { name: '地上停车场', value: '16.35', ratio: '4.12' },
    { name: 'xxx停车场11', value: '115.10', ratio: '28.99' },
    { name: 'xxx停车场12', value: '84.57', ratio: '21.3' },
    { name: '联通大厦停车场', value: '71.98', ratio: '18.13' },
    { name: 'xxx停车场14', value: '28.21', ratio: '7.1' },
    { name: 'xxx停车场15', value: '16.35', ratio: '4.12' }
  ]
  const xData = propData.map((item) => item.name)
  console.log(xData)
  const yData = propData.map((item) => item.value)
  let max = Math.ceil(Math.max(...yData) * 1.2)
  let maxData = [max, max, max, max, max]
  let emptyData = yData.map((v, i) => {
    let color = myColor[i]
    let item = {
      value: max,
      label: {
        formatter: '{a|' + v + '}',
        position: 'right',
        distance: -60,
        offset: [0, -30],
        rich: {
          a: {
            fontSize: 14,
            color: '#ffffff'
          }
        }
      }
    }
    return item
  })
  const myChart = echarts.init(Echarts.value)
  const option = {
    tooltip: {
      trigger: 'axis',
      // renderMode: 'html',
      // triggerOn: 'mousemove|click',

      // className: 'content',
      textStyle: {
        color: '#000'
      },
      // position: function (pointer, data, dom, rect, size) {
      //   return [pointer[0], pointer[1]]
      // },
      formatter: '{b}' + '辆'
    },
    // backgroundColor: '#0A2E5D',
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '15%',
      containLabel: true
    },
    yAxis: [
      {
        type: 'value',
        name: '单位：辆',
        min: 0,
        nameTextStyle: {
          fontSize: 12,
          color: '#AFBCC4'
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#9B9B9B'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          fontSize: 12,
          color: '#AFBCC4'
        },
        boundaryGap: ['20%', '20%']
      }
    ],
    xAxis: [
      {
        show: true,
        inverse: false,
        data: xData,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false // 这里设置为false即可取消x轴刻度
        }
      },

      {
        show: true,
        data: yData,
        offset: -109,
        position: 'right',
        axisLabel: {
          show: false,
          lineHeight: 30,
          verticalAlign: 'bottom',
          textStyle: {
            fontSize: 12,
            color: '#fff'
          },
          formatter: '{value}kg'
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        show: true,
        type: 'bar',
        barGap: '-100%',
        xAxisIndex: 1,

        barWidth: 8, //统计条宽度
        itemStyle: {
          normal: {
            barBorderRadius: 8,

            color: function (params) {
              let num = myColor.length
              return {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: myColor[params.dataIndex % num]
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
                  }
                ]
              }
            }
          }
        },
        // max: 0,
        labelLine: {
          show: false
        },
        z: 2,
        data: yData
      },
      {
        name: '外圆',
        type: 'scatter',
        hoverAnimation: false,
        data: yData,
        xAxisIndex: 1,
        symbolSize: 14,
        itemStyle: {
          normal: {
            color: function (params) {
              let num = myColor.length
              return myColor[params.dataIndex % num]
            },
            opacity: 1
          }
        },
        z: 2
      }
      //   {
      //     z: 1,
      //     show: true,
      //     type: 'bar',
      //     xAxisIndex: 1,
      //     barGap: '-100%',
      //     barWidth: 7, //统计条宽度
      //     itemStyle: {
      //       normal: {
      //         barBorderRadius: 7,
      //         color: 'rgba(13, 55, 78, 1)'
      //       }
      //     },
      //     label: {
      //       normal: {
      //         show: true,

      //         position: [0, -20],
      //         rich: {
      //           //富文本
      //           white: {
      //             //自定义颜色
      //             color: '#ffffff'
      //           }
      //         },
      //         formatter: function (data) {
      //           return '{white|' + xData[data.dataIndex] + '}'
      //         }
      //       }
      //     },
      //     data: maxData
      //   }
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
  height: 270px;
  width: 100%;
  // border: 1px solid red;
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
.leftThree {
  box-shadow: inset 0 0 5px rgb(252, 250, 250);
  padding-top: 10px;
  height: 325px;
  //   border: 1px solid #acb3bd;
  //   background: rgba(0, 69, 168, 0.5);
  // background: url(@/assets/images/PageOne/bootom.png) 100% no-repeat;
  // background-size: 100% 100%;
  // margin-bottom: -5px;
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
