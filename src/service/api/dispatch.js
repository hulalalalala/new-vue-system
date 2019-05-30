export const dispatchApi = {
  dispatch: [
    {
      name: 'getOnlineCarNumber',
      method: 'POST',
      path: '/zhfxpt/getOnlineBusNumber',
      mockPath: '/zhfxpt/getOnlineBusNumber',
      params: {
        orgId: ''
      },
      desc: '在线车辆数'
    },
    {
      name: 'getTypeCarNumber',
      method: 'POST',
      path: '/zhfxpt/getOperateBusNumber',
      mockPath: '/zhfxpt/getOperateBusNumber',
      params: {
        orgId: '',
        type: '' // 0：待发 ；1：运营
      },
      desc: '运营待发车辆数'
    },
    {
      name: 'getRealtimeTrips',
      method: 'POST',
      path: '/zhfxpt/getRealtimeTrips',
      mockPath: '/zhfxpt/getRealtimeTrips',
      params: {
        orgId: ''
      },
      desc: '实时趟次'
    },
    {
      name: 'getRealtimeMileage',
      method: 'POST',
      path: '/zhfxpt/getRealtimeMileage',
      mockPath: '/zhfxpt/getRealtimeMileage',
      params: {
        orgId: '',
        lineId: ''
      },
      desc: '实时里程'
    },
    {
      name: 'getRealtimeClasses',
      method: 'POST',
      path: '/zhfxpt/getRealtimeClasses',
      mockPath: '/zhfxpt/getRealtimeClasses',
      params: {
        orgId: ''
      },
      desc: '实时班次'
    },
    {
      name: 'getBusToStationInfo',
      method: 'POST',
      path: '/zhfxpt/getBusToStationInfo',
      mockPath: '/zhfxpt/getBusToStationInfo',
      params: {
        orgId: '',
        dateTime: ''
      },
      desc: '车辆到站时刻信息(获取前一天数据)(运营线路比)'
    }
  ]
}
