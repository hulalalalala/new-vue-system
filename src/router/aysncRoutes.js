import Layout from '@/components/layout'

const _import_ = file => () => import('@/views/' + file + '.vue')

/**
 * 静态路由表配置
 *
 * 可根据{role}字段来模拟权限访问. 用户登录后必须含有{role}字段, 与之匹配的路由会被最终过滤出来供访问.
 * 不匹配的则不会包含在内.
 * 具体字段表说明可以访问平台文档查看详细资料.
 */
export const aysncRoutesMap = [
  {
    path: '/homepage',
    component: Layout,
    meta: { title: 'Homepage', icon: 'iconfont icon-yunzhuomian', role: ['admin', 'user'] },
    children: [
      {
        path: 'home',
        name: 'Homepage',
        component: _import_('Homepage/index'),
        meta: { title: '首页', icon: 'nocturne icon-home', isHome: true }
      }
    ]
  },
  {
    path: '/chart-analysis',
    component: Layout,
    meta: {
      title: '运营监控',
      icon: 'nocturne icon-dash',
      role: ['admin', 'user']
    },
    children: [{
      path: 'chart-analysis',
      component: _import_('operationMonitoring/index'),
      name: 'chartAnalysis',
      meta: {
        title: '运营监控',
        icon: 'nocturne icon-dash'
      }
    }]
  },
  {
    path: '/operation',
    component: Layout,
    meta: {
      title: '运营分析',
      icon: 'nocturne icon-dash',
      role: ['admin', 'user']
    },
    children: [{
      path: '/operation-analysis',
      name: 'dispatchingOperationAnalysis',
      component: _import_('operationAnalysis/dispatchingOperationAnalysis/index'),
      meta: {
        title: '调度运营分析',
        icon: 'nocturne icon-dash'
      },
      children: [{
        path: 'timeTable-analysis',
        component: _import_('operationAnalysis/dispatchingOperationAnalysis/timeTableAnalysis/index'),
        name: 'timeTableAnalysis',
        meta: {
          title: '客流高峰时刻分析',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'section-analysis',
        component: _import_('operationAnalysis/dispatchingOperationAnalysis/sectionAnalysis/index'),
        name: 'sectionAnalysis',
        meta: {
          title: '客流高峰断面分析',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'trip-order',
        component: _import_('operationAnalysis/dispatchingOperationAnalysis/tripOrder/index'),
        name: 'tripOrder',
        meta: {
          title: '发车趟次时序图',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'full-load-rate',
        component: _import_('operationAnalysis/dispatchingOperationAnalysis/fullLoadRate/index'),
        name: 'fullLoadRate',
        meta: {
          title: '区间满载率查询',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'landing-volume',
        component: _import_('operationAnalysis/dispatchingOperationAnalysis/landingVolume/index'),
        name: 'landingVolume',
        meta: {
          title: '站点登降量查询',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'runtime-analysis',
        component: _import_('operationAnalysis/dispatchingOperationAnalysis/runtimeAnalysis/index'),
        name: 'runtimeAnalysis',
        meta: {
          title: '站间运行时间分析',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'passenger-transport-capacity',
        component: _import_('operationAnalysis/dispatchingOperationAnalysis/passengerTransportCapacity/index'),
        name: 'passengerTransportCapacity',
        meta: {
          title: '客流运力运量分析',
          icon: 'nocturne icon-dash'
        }
      }
      ]
    },
    {
      path: '/safety-supervision',
      component: _import_('operationAnalysis/safetySupervision/index'),
      name: 'safetySupervision',
      meta: {
        title: '安全监管',
        icon: 'nocturne icon-dash'
      },
      children: [{
        path: 'vehicle-fault-alarm',
        component: _import_('operationAnalysis/safetySupervision/vehicleFaultAlarm/index'),
        name: 'vehicleFaultAlarm',
        meta: {
          title: '车辆故障报警',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'real-time-dashboard',
        component: _import_('operationAnalysis/safetySupervision/realtimeDashboard/index'),
        name: 'realTimeDashboard',
        meta: {
          title: '实时仪表盘',
          icon: 'nocturne icon-dash'
        }
      }
      ]
    },
    {
      path: '/fatigue-monitoring',
      component: _import_('operationAnalysis/fatigueMonitoring/index'),
      name: 'fatigueMonitoring',
      meta: {
        title: '疲劳监测',
        icon: 'nocturne icon-dash'
      },
      children: [{
        path: 'alarm-center',
        component: _import_('operationAnalysis/fatigueMonitoring/alarmCenter/index'),
        name: 'alarmCenter',
        meta: {
          title: '报警中心',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'alarm-content',
        component: _import_('operationAnalysis/fatigueMonitoring/alarmCenter/alarmContent/index'),
        name: 'alarmContent',
        hidden: true,
        meta: {
          title: '报警中心详情',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'device-status',
        component: _import_('operationAnalysis/fatigueMonitoring/deviceStatus/index'),
        name: 'deviceStatus',
        meta: {
          title: '设备状态',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'alarm-analysis',
        component: _import_('operationAnalysis/fatigueMonitoring/alarmAnalysis/index'),
        name: 'alarmAnalysis',
        meta: {
          title: '报警分析',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'alarm-management',
        component: _import_('operationAnalysis/fatigueMonitoring/alarmManagement/index'),
        name: 'alarmManagement',
        meta: {
          title: '报警类型管理',
          icon: 'nocturne icon-dash'
        }
      }
      ]
    }
    ]
  },
  {
    path: '/permission-management',
    component: Layout,
    name: 'permissionManagement',
    meta: {
      title: '权限管理',
      icon: 'nocturne icon-dash'
    },
    children: [
      {
        path: 'management-list',
        component: _import_('permissionManagement/managementList/index'),
        name: 'managementList',
        meta: {
          title: '管理员列表',
          icon: 'nocturne icon-dash'
        }
      },
      {
        path: 'role-list',
        component: _import_('permissionManagement/roleList/index'),
        name: 'roleList',
        meta: {
          title: '角色列表',
          icon: 'nocturne icon-dash'
        }
      }
    ]
  }
  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   meta: { title: 'dashboard', role: ['admin', 'user'] },
  //   children: [
  //     {
  //       path: 'dash',
  //       name: 'Dashboard',
  //       component: _import_('Dashboard/index'),
  //       meta: { title: 'Dashboard', icon: 'nocturne icon-dash', isHome: false }
  //     }
  //   ]
  // }
  // {
  //   path: '/map',
  //   component: Layout,
  //   meta: { title: 'Maps', icon: 'nocturne icon-map1', role: ['user'] },
  //   children: [
  //     {
  //       path: 'bmap',
  //       name: 'BaiduMapCom',
  //       component: _import_('Map/BaiduMap/index'),
  //       meta: { title: 'Baidu Map', icon: 'nocturne icon-map2' }
  //     }
  //   ]
  // },
  // {
  //   path: '/utils',
  //   component: Layout,
  //   meta: { title: 'Utils', icon: 'nocturne icon-tools', role: ['user'] },
  //   children: [
  //     {
  //       path: 'nextpage',
  //       name: 'NextPage',
  //       component: _import_('Utils/NextPage/index'),
  //       meta: { title: 'NextPage', icon: 'nocturne icon-next-page' }
  //     },
  //     {
  //       path: 'beauti-context',
  //       name: 'BeautiContextComp',
  //       component: _import_('Utils/BeautiContext/index'),
  //       meta: { title: 'BeautiContext', icon: 'nocturne icon-menu' }
  //     }
  //   ]
  // }
]
