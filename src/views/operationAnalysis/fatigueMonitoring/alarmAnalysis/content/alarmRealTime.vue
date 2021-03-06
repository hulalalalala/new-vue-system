<template>
  <div class="echart-real-time" ref="echartRealTime">
    <div
      id="echart-real-time"
      :style="{width: '100%', height: '300px'}"
      element-loading-background="rgba(0, 0, 0, 0)"
      >
    </div>
  </div>
</template>

<script type="type/ecmascript-6">
// import { alarmTimeChart } from 'server/interface'
import { max } from '../../../../../utils/max'
import elementResizeDetector from 'element-resize-detector'
import moment from 'moment'
import { mapGetters } from 'vuex'
export default {
  props: {
    selectData: {
      type: Object
    },
    warnObj: {
      type: Object
    }
  },
  data () {
    return {
      listData: [],
      countData: [],
      contrastCountData: [],
      xAise: [],
      maxNum: '',
      echartName: '报警次数时间趋势'
    }
  },
  computed: {
    ...mapGetters(['userId'])
  },
  created () {
    let start = new Date()
    let endTime = moment(start).format('YYYY-MM-DD 23:59:59')
    let startTime = moment(start - 3600 * 1000 * 24 * 7).format('YYYY-MM-DD 00:00:00')
    this._alarmTimeChart({
      orgId: this.selectData.orgId || (this.userId === '1' ? '' : this.userId),
      lineId: this.selectData.lineId,
      busPlateNumber: this.selectData.busPlateNumber,
      startTime,
      endTime,
      warnUuid: ''
    })
  },
  mounted () {
    let listenResize = elementResizeDetector()
    listenResize.listenTo(this.$refs.echartRealTime, (el) => {
      this.$echarts.init(document.getElementById('echart-real-time')).resize()
    })
  },
  watch: {
    warnObj: {
      deep: true,
      handler () {
        if (this.warnObj) {
          this.echartName = `(${this.warnObj.warnTypeName})报警次数时间趋势`
          this.getNewChart()
        }
      }
    },
    selectData: {
      deep: true,
      handler (newValue) {
        console.log(newValue)
        this.getNewChart()
      }
    }
  },
  methods: {
    _alarmTimeChart (params) {
      this.$api['tiredMonitoring.getWarnLine'](params).then(res => {
        this.listData = res
        this.countData = this.listData.map(list => Number(list.count))
        this.contrastCountData = this.listData.map(list => Number(list.contrastCount))
        this.xAise = this.listData.map(list => list.xdate)
        this.maxNum = max([max(this.countData), max(this.contrastCountData)])
        if (this.maxNum < 10) {
          this.maxNum = 10
        }
        if (this.listData.length > 0) {
          this.drawLine()
        }
      })
    },
    getNewChart () {
      let start = new Date()
      let endTime = moment(start).format('YYYY-MM-DD 23:59:59')
      let startTime = moment(start - 3600 * 1000 * 24 * 7).format('YYYY-MM-DD 00:00:00')
      console.log(this.selectData.orgId)
      this._alarmTimeChart({
        orgId: this.selectData.orgId || (this.userId === '1' ? '' : this.userId),
        lineId: this.selectData.lineId,
        busPlateNumber: this.selectData.busPlateNumber,
        startTime: (this.selectData.valueTime && this.selectData.valueTime[0]) || startTime,
        endTime: (this.selectData.valueTime && this.selectData.valueTime[1]) || endTime,
        warnUuid: this.warnObj.warnUuid
      })
    },
    drawLine () {
      let chart = this.$echarts.init(document.getElementById('echart-real-time'))
      window.addEventListener('resize', () => { chart.resize() })
      chart.setOption({
        color: ['rgba(80,141,255)', 'rgba(103, 194, 58)'],
        title: {
          text: this.echartName,
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          y: '30px',
          data: ['次数', '环比']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xAise
        },
        yAxis: {
          type: 'value',
          max: Math.floor(this.maxNum + this.maxNum / 6),
          min: 0,
          interval: Math.floor(this.maxNum / 6)
        },
        series: [
          {
            name: '次数',
            type: 'line',
            data: this.countData,
            smooth: true,
            lineStyle: {
              normal: {
                color: 'rgba(80,141,255)'
              }
            },
            areaStyle: {
              normal: {
              // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(80,141,255,0.39)'
                }, {
                  offset: 0.34,
                  color: 'rgba(56,155,255,0.25)'
                }, {
                  offset: 1,
                  color: 'rgba(38,197,254,0.00)'
                }])
              }
            }
          },
          {
            name: '环比',
            type: 'line',
            smooth: true,
            data: this.contrastCountData,
            lineStyle: {
              normal: {
                color: 'rgba(103, 194, 58)'
              }
            },
            areaStyle: {
              normal: {
              // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(103, 194, 58, 0.39)'
                }, {
                  offset: 0.34,
                  color: 'rgba(103, 194, 58,0.25)'
                }, {
                  offset: 1,
                  color: 'rgba(103, 194, 58,0.00)'
                }])
              }
            }
          }
        ]
      }, true)
    }
  }
}
</script>

<style lang="scss" scoped>
.echart-real-time {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  height: 322px;
}
</style>
