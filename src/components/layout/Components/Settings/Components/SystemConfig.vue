<template>
  <div class="system-config">
      <el-form v-model="systemCfgForm" label-width="120px">
          <el-form-item label="启用侧边栏">
              <el-switch v-model="systemCfgForm.isShowSidebar" ></el-switch>
          </el-form-item>
      </el-form>
  </div>
</template>
<script>
import { Form, FormItem, Switch } from 'element-ui'
import { mapGetters } from 'vuex'
export default {
  name: 'SystemConfig',
  data () {
    return {
      systemCfgForm: {
        isShowSidebar: true
      }
    }
  },
  computed: {
    ...mapGetters(['sidebarState'])
  },
  watch: {
    'systemCfgForm.isShowSidebar': {
      handler: function (isHidden) {
        this.$store.dispatch('hideSidebar', !isHidden)
      }
    }
  },
  beforeMount () {
    this.systemCfgForm.isShowSidebar = !this.sidebarState.isHidden
  },
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-switch': Switch
  }
}
</script>
