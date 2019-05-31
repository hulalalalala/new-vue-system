import { UserApi } from './user'
import { PlatformApi } from './platform'
import { weatherApi } from './weather'
import { wholeInformationApi } from './wholeInformation'
import { dispatchApi } from './dispatch'
import { passengerFlowApi } from './passengerFlow'
import { homeMapApi } from './homeMap'
import { homeTiredApi } from './homeTired'
import { schedulingAnalysisApi } from './schedulingAnalysis'
import { tiredMonitoringApi } from './tiredMonitoring'
import { PermissionApi } from './permission'

const requireModules = require.context('./', true, /index.js$/)
let modules = {
  ...UserApi,
  ...PlatformApi,
  ...weatherApi,
  ...wholeInformationApi,
  ...dispatchApi,
  ...passengerFlowApi,
  ...homeMapApi,
  ...homeTiredApi,
  ...schedulingAnalysisApi,
  ...tiredMonitoringApi,
  ...PermissionApi
}
requireModules.keys().forEach(moduleName => {
  moduleName = requireModules(moduleName)
  for (let value of Object.values(moduleName)) {
    Object.assign(modules, value)
  }
})

export default modules
