import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
interface State {
  center: [number, number]
  staid: string
  pathMain: string
  idMove: number
  allMaplist: any[] // 地图
  center1: [number, number] | []
  adcode: any
  zoompinia: any
  name: any
  listpoint: any
  nameArea: any
}
const useType = defineStore('counter', {
  state: () => ({
    center: [117.006, 36.8],
    staid: '',
    pathMain: '--p-',
    idMove: 0,
    allMaplist: [], //地图，
    center1: [],
    adcode: '370100',
    zoompinia: 9,
    listpoint: [],
    nameArea: ''
  }),

  getters: {},

  actions: {
    moveMap(id: number) {
      this.idMove = id
      console.log('触发action', this.center, id)
      let center1 = {}
      center1 = this.allMaplist.filter((item) => {
        return id == item.id
      })[0]

      this.center = [center1.longitude, center1.latitude]
    },
    moveMap2(area: any) {
      console.log(area, '坐标')
      this.center = area
    },
    changeAdcode(citycode: number) {
      console.log(citycode, 'citycode')
    },
    putname(data, name) {
      this.listpoint = data
      this.nameArea = name
    }
  }
})

//暴露这个useCounter模块
export default useType
