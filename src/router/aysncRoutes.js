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
  // {
  //   path: '/comprehensive',
  //   component: Layout,
  //   meta: {
  //     title: '综合运营分析',
  //     icon: 'nocturne icon-dash',
  //     roles: ['/chart-analysis/all']
  //   },
  //   children: [{
  //     path: 'comprehensive-analysis',
  //     component: _import_('comprehensiveAnalysis/index'),
  //     meta: {
  //       title: '综合运营分析',
  //       icon: 'nocturne icon-dash',
  //       roles: ['/chart-analysis/all']
  //     }
  //   }]
  // },
  {
    path: '/newBigScreen',
    component: Layout,
    meta: {
      title: '监控分析大屏',
      icon: 'nocturne icon-dash',
      roles: ['/chart-analysis/all']
    },
    children: [{
      path: 'newBigScreen-analysis',
      component: _import_('newBigScreen/index'),
      meta: {
        title: '监控分析大屏',
        icon: 'nocturne icon-dash',
        roles: ['/chart-analysis/all']
      }
    }]
  },
  // {
  //   path: '/chart-analysis',
  //   component: Layout,
  //   meta: {
  //     title: '运营监控',
  //     icon: 'nocturne icon-dash',
  //     roles: ['/chart-analysis/all', '/chart-analysis/passenger-flow', '/chart-analysis/fatigue-alarm']
  //   },
  //   children: [{
  //     path: 'chart-analysis/all',
  //     component: _import_('operationMonitoring/index'),
  //     name: 'chartAnalysis',
  //     meta: {
  //       title: '运营监控',
  //       icon: 'nocturne icon-dash',
  //       roles: ['/chart-analysis/all']
  //     }
  //   },
  //   {
  //     path: 'chart-analysis/passenger-flow',
  //     component: _import_('operationMonitoring/index'),
  //     name: 'chartAnalysis',
  //     meta: {
  //       title: '客流运营监控',
  //       icon: 'nocturne icon-dash',
  //       roles: ['/chart-analysis/passenger-flow']
  //     }
  //   },
  //   {
  //     path: 'chart-analysis/fatigue-alarm',
  //     component: _import_('operationMonitoring/index'),
  //     name: 'chartAnalysis',
  //     meta: {
  //       title: '疲劳运营监控',
  //       icon: 'nocturne icon-dash',
  //       roles: ['/chart-analysis/fatigue-alarm']
  //     }
  //   }]
  // },
  {
    path: '/operation',
    component: Layout,
    meta: {
      title: '运营分析',
      icon: 'nocturne icon-dash',
      roles: ['/operation-analysis', '/safety-supervision', '/fatigue-monitoring']
    },
    children: [{
      path: '/operation-analysis',
      name: 'dispatchingOperationAnalysis',
      component: _import_('operationAnalysis/dispatchingOperationAnalysis/index'),
      meta: {
        title: '调度运营分析',
        icon: 'nocturne icon-dash',
        path: 'runtime-analysis',
        roles: ['/timeTable-analysis', '/passenger-home', '/realtime-passenger-flow', 'search-passenger', '/section-analysis', '/trip-order', '/full-load-rate', '/landing-volume', '/runtime-analysis', '/passenger-transport-capacity', '/simple-passenger-flow', '/bus-passenger', '/line-passenger-flow', '/comprehensive-query', '/hot-map', '/line-od']
      },
      children: [
        {
          path: 'passenger-home',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/passengerHome/index'),
          name: 'passengerHome',
          meta: {
            title: '客流首页',
            icon: 'nocturne icon-dash',
            roles: ['/passenger-home']
          }
        },
        {
          path: 'realtime-passenger-flow',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/realtimePassengerFlow/index'),
          name: 'realtimePassengerFlow',
          meta: {
            title: '客流实时统计',
            icon: 'nocturne icon-dash',
            roles: ['/realtime-passenger-flow']
          }
        },
        {
          path: 'timeTable-analysis',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/timeTableAnalysis/index'),
          name: 'timeTableAnalysis',
          meta: {
            title: '客流高峰时刻分析',
            icon: 'nocturne icon-dash',
            roles: ['/timeTable-analysis']
          }
        },
        {
          path: 'section-analysis',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/sectionAnalysis/index'),
          name: 'sectionAnalysis',
          meta: {
            title: '客流高峰断面分析',
            icon: 'nocturne icon-dash',
            roles: ['/section-analysis']
          }
        },
        {
          path: 'trip-order',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/tripOrder/index'),
          name: 'tripOrder',
          meta: {
            title: '发车趟次时序图',
            icon: 'nocturne icon-dash',
            roles: ['/trip-order']
          }
        },
        {
          path: 'simple-passenger-flow',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/simplePassengerFlow/index'),
          name: 'simplePassengerFlow',
          meta: {
            title: '单车客流详情分析',
            icon: 'nocturne icon-dash',
            roles: ['/simple-passenger-flow']
          }
        },
        {
          path: 'full-load-rate',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/fullLoadRate/index'),
          name: 'fullLoadRate',
          meta: {
            title: '区间满载率查询',
            icon: 'nocturne icon-dash',
            roles: ['/full-load-rate']
          }
        },
        {
          path: 'landing-volume',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/landingVolume/index'),
          name: 'landingVolume',
          meta: {
            title: '站点登降量查询',
            icon: 'nocturne icon-dash',
            roles: ['/landing-volume']
          }
        },
        {
          path: 'runtime-analysis',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/runtimeAnalysis/index'),
          name: 'runtimeAnalysis',
          meta: {
            title: '站间运行时间分析',
            icon: 'nocturne icon-dash',
            roles: ['/runtime-analysis']
          }
        },
        {
          path: 'passenger-transport-capacity',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/passengerTransportCapacity/index'),
          name: 'passengerTransportCapacity',
          meta: {
            title: '客流运力运量分析',
            icon: 'nocturne icon-dash',
            roles: ['/passenger-transport-capacity']
          }
        },
        {
          path: 'search-passenger-flow',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/searchPassengerFlow/index'),
          name: 'searchPassengerFlow',
          meta: {
            title: '客流数据查询',
            icon: 'nocturne icon-dash',
            roles: ['/search-passenger-flow']
          }
        },
        {
          path: 'search-passenger',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/searchPassenger/index'),
          name: 'searchPassenger',
          meta: {
            title: '客流数据明细查询',
            icon: 'nocturne icon-dash',
            roles: ['/search-passenger']
          }
        },
        {
          path: 'bus-passenger',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/busPassenger/index'),
          name: 'busPassenger',
          meta: {
            title: '单车客流统计',
            icon: 'nocturne icon-dash',
            roles: ['/bus-passenger']
          }
        },
        {
          path: 'line-passenger-flow',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/linePassengerFlow/index'),
          name: 'linePassengerFlow',
          meta: {
            title: '线路客流查询',
            icon: 'nocturne icon-dash',
            roles: ['/line-passenger-flow']
          }
        },
        {
          path: 'comprehensive-query',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/comprehensiveQuery/index'),
          name: 'comprehensiveQuery',
          meta: {
            title: '线路站点客流查询',
            icon: 'nocturne icon-dash',
            roles: ['/comprehensive-query']
          }
        },
        {
          path: 'hot-map',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/hotMap/index'),
          name: 'hotMap',
          meta: {
            title: '客流热力分析',
            icon: 'nocturne icon-dash',
            roles: ['/hot-map']
          }
        },
        {
          path: 'line-od',
          component: _import_('operationAnalysis/dispatchingOperationAnalysis/lineOD/index'),
          name: 'lineOD',
          meta: {
            title: '线路OD',
            icon: 'nocturne icon-dash',
            roles: ['/line-od']
          }
        }
      ]
    },
    // {
    //   path: '/safety-supervision',
    //   component: _import_('operationAnalysis/safetySupervision/index'),
    //   name: 'safetySupervision',
    //   meta: {
    //     title: '安全监管',
    //     icon: 'nocturne icon-dash',
    //     roles: ['/vehicle-fault-alarm', '/real-time-dashboard']
    //   },
    //   children: [{
    //     path: 'vehicle-fault-alarm',
    //     component: _import_('operationAnalysis/safetySupervision/vehicleFaultAlarm/index'),
    //     name: 'vehicleFaultAlarm',
    //     meta: {
    //       title: '车辆故障报警',
    //       icon: 'nocturne icon-dash',
    //       roles: ['/vehicle-fault-alarm']
    //     }
    //   },
    //   {
    //     path: 'real-time-dashboard',
    //     component: _import_('operationAnalysis/safetySupervision/realtimeDashboard/index'),
    //     name: 'realTimeDashboard',
    //     meta: {
    //       title: '实时仪表盘',
    //       icon: 'nocturne icon-dash',
    //       roles: ['/real-time-dashboard']
    //     }
    //   }
    //   ]
    // },
    {
      path: '/fatigue-monitoring',
      component: _import_('operationAnalysis/fatigueMonitoring/index'),
      name: 'fatigueMonitoring',
      meta: {
        title: '疲劳监测',
        icon: 'nocturne icon-dash',
        roles: ['/alarm-center', '/alarm-content', '/device-status', 'alarm-analysis', 'alarm-management', '/alarm-home', '/alarm-drive', '/alarm-type', '/alarm-speed', '/status-management']
      },
      children: [
        {
          path: 'alarm-home',
          component: _import_('operationAnalysis/fatigueMonitoring/alarmHome/index'),
          name: 'alarmHome',
          meta: {
            title: '安全运营首页',
            icon: 'nocturne icon-dash',
            roles: ['/alarm-home']
          }
        },
        {
          path: 'alarm-drive',
          component: _import_('operationAnalysis/fatigueMonitoring/alarmDriver/index'),
          name: 'alarmDriver',
          meta: {
            title: '司机排行分析',
            icon: 'nocturne icon-dash',
            roles: ['/alarm-drive']
          }
        },
        {
          path: 'alarm-type',
          component: _import_('operationAnalysis/fatigueMonitoring/alarmType/index'),
          name: 'alarmType',
          meta: {
            title: '报警类型分析',
            icon: 'nocturne icon-dash',
            roles: ['/alarm-type']
          }
        },
        {
          path: 'alarm-speed',
          component: _import_('operationAnalysis/fatigueMonitoring/alarmSpeed/index'),
          name: 'alarmSpeed',
          meta: {
            title: '报警速度分析',
            icon: 'nocturne icon-dash',
            roles: ['/alarm-speed']
          }
        },
        {
          path: 'alarm-center',
          component: _import_('operationAnalysis/fatigueMonitoring/alarmCenter/index'),
          name: 'alarmCenter',
          meta: {
            title: '驾驶行为监测',
            icon: 'nocturne icon-dash',
            roles: ['/alarm-center']
          }
        },
        {
          path: 'alarm-content',
          component: _import_('operationAnalysis/fatigueMonitoring/alarmCenter/alarmContent/index'),
          name: 'alarmContent',
          hidden: true,
          meta: {
            title: '驾驶行为监测详情',
            icon: 'nocturne icon-dash',
            roles: ['/alarm-center']
          }
        },
        {
          path: 'device-status',
          component: _import_('operationAnalysis/fatigueMonitoring/deviceStatus/index'),
          name: 'deviceStatus',
          meta: {
            title: '设备状态',
            icon: 'nocturne icon-dash',
            roles: ['/device-status']
          }
        },
        {
          path: 'alarm-analysis',
          component: _import_('operationAnalysis/fatigueMonitoring/alarmAnalysis/index'),
          name: 'alarmAnalysis',
          meta: {
            title: '报警分析',
            icon: 'nocturne icon-dash',
            roles: ['/alarm-analysis']
          }
        },
        {
          path: 'alarm-management',
          component: _import_('operationAnalysis/fatigueMonitoring/alarmManagement/index'),
          name: 'alarmManagement',
          meta: {
            title: '报警类型管理',
            icon: 'nocturne icon-dash',
            roles: ['/alarm-management']
          }
        },
        {
          path: 'status-management',
          component: _import_('operationAnalysis/fatigueMonitoring/statusManagement/index'),
          name: 'statusManagement',
          meta: {
            title: '数据质量排查',
            icon: 'nocturne icon-dash',
            roles: ['/status-management']
          }
        }
      ]
    }
    ]
  },
  {
    path: '/system-admin',
    component: Layout,
    name: 'systemAdmin',
    meta: {
      title: '系统管理',
      icon: 'nocturne icon-dash',
      roles: ['/channel-management']
    },
    children: [
      {
        path: 'channel-management',
        component: _import_('systemAdmin/channelManagement/index'),
        name: 'channelManagement',
        meta: {
          title: '通道配置',
          icon: 'nocturne icon-dash',
          roles: ['/channel-management']
        }
      }
    ]
  },
  {
    path: '/data-analysis',
    component: Layout,
    name: 'dataAnalysis',
    meta: {
      title: '数据分析',
      icon: 'nocturne icon-dash',
      roles: ['/data-overview-page', '/line-condition', 'repeatability-index', 'repeatability-detail', 'comprehensive-query', 'line-network-core', 'line-netWork-core-Detail', 'flow-comprehensive-query', 'line-od']
    },
    children: [
      // {
      //   path: 'big-home-screen',
      //   component: _import_('dataAnalysis/visualScreen/index'),
      //   name: 'bigHomeScreen',
      //   meta: {
      //     title: '可视化大屏',
      //     icon: 'nocturne icon-dash',
      //     roles: ['/chart-analysis/all']
      //   }
      // },
      {
        path: 'data-overview-page',
        component: _import_('dataAnalysis/dataOverviewPage/index'),
        name: 'dataOverviewPage',
        meta: {
          title: '数据总览页',
          icon: 'nocturne icon-dash',
          roles: ['/data-overview-page']
        }
      },
      {
        path: 'line-condition',
        component: _import_('dataAnalysis/lineCondition/index'),
        name: 'lineCondition',
        meta: {
          title: '线路情况',
          icon: 'nocturne icon-dash',
          roles: ['/line-condition']
        }
      },
      {
        path: 'repeatability-index',
        component: _import_('dataAnalysis/repeatability/index'),
        name: 'repeatability',
        meta: {
          title: '重复度指标',
          icon: 'nocturne icon-dash',
          roles: ['/repeatability-index']
        }
      },
      {
        path: 'repeatability-detail',
        component: _import_('dataAnalysis/repeatDetail/index'),
        name: 'repeatabilityDetail',
        meta: {
          title: '重复度指标详情',
          icon: 'nocturne icon-dash',
          roles: ['/repeatability-detail']
        }
      },
      {
        path: 'comprehensive-query',
        component: _import_('dataAnalysis/comprehensiveQuery/index'),
        name: 'comprehensiveQuery',
        meta: {
          title: '数据综合查询',
          icon: 'nocturne icon-dash',
          roles: ['/comprehensive-query']
        }
      },
      {
        path: 'line-network-core',
        component: _import_('dataAnalysis/lineNetworkCore/index'),
        name: 'lineNetworkCore',
        meta: {
          title: '线网评分',
          icon: 'nocturne icon-dash',
          roles: ['/line-network-core']
        }
      },
      {
        path: 'line-netWork-core-Detail',
        component: _import_('dataAnalysis/lineNetWorkDetail/index'),
        name: 'lineNetWorkDetail',
        meta: {
          title: '线网评分详情',
          icon: 'nocturne icon-dash',
          roles: ['/line-netWork-core-Detail']
        }
      },
      {
        path: 'flow-comprehensive-query',
        component: _import_('dataAnalysis/flowComprehensiveQuery/index'),
        name: 'flowComprehensiveQuery',
        meta: {
          title: '线路客流综合查询',
          icon: 'nocturne icon-dash',
          roles: ['/flow-comprehensive-query']
        }
      },
      {
        path: 'line-od',
        component: _import_('dataAnalysis/lineOD/index'),
        name: 'lineOD',
        meta: {
          title: '线路OD',
          icon: 'nocturne icon-dash',
          roles: ['/line-od']
        }
      }
      // {
      //   path: 'od-matrix',
      //   component: _import_('dataAnalysis/ODMatrix/index'),
      //   name: 'ODMatrix',
      //   meta: {
      //     title: 'OD矩阵',
      //     icon: 'nocturne icon-dash',
      //     roles: ['/chart-analysis/all']
      //   }
      // }
    ]
  },
  {
    path: '/permission-management',
    component: Layout,
    name: 'permissionManagement',
    meta: {
      title: '用户管理',
      icon: 'nocturne icon-dash',
      roles: ['/management-list', '/role-list']
    },
    children: [
      {
        path: 'management-list',
        component: _import_('permissionManagement/managementList/index'),
        name: 'managementList',
        meta: {
          title: '用户列表',
          icon: 'nocturne icon-dash',
          roles: ['/management-list']
        }
      },
      {
        path: 'role-list',
        component: _import_('permissionManagement/roleList/index'),
        name: 'roleList',
        meta: {
          title: '角色列表',
          icon: 'nocturne icon-dash',
          roles: ['/role-list']
        }
      }
      // {
      //   path: 'source-list',
      //   component: _import_('permissionManagement/sourceList/index'),
      //   name: 'sourceList',
      //   meta: {
      //     title: '资源列表',
      //     icon: 'nocturne icon-dash'
      //   }
      // }
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
