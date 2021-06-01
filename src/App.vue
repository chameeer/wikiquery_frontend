<template>
  <a-layout class="layout">
<!--    <a-layout-header theme="light">-->
<!--      <div class="logo" />-->
<!--&lt;!&ndash;      <a-menu&ndash;&gt;-->
<!--&lt;!&ndash;          theme="light"&ndash;&gt;-->
<!--&lt;!&ndash;          mode="horizontal"&ndash;&gt;-->
<!--&lt;!&ndash;          v-model:selectedKeys="selectedKeys"&ndash;&gt;-->
<!--&lt;!&ndash;          :style="{ lineHeight: '64px' }"&ndash;&gt;-->
<!--&lt;!&ndash;      >&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        <a-menu-item key="1">nav 1</a-menu-item>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        <a-menu-item key="2">nav 2</a-menu-item>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        <a-menu-item key="3">nav 3</a-menu-item>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;      </a-menu>&ndash;&gt;-->
<!--    </a-layout-header>-->

    <a-layout-content style="text-align: center">
<!--      <a-breadcrumb style="margin: 16px 0">-->
<!--        <a-breadcrumb-item>Home</a-breadcrumb-item>-->
<!--        <a-breadcrumb-item>List</a-breadcrumb-item>-->
<!--        <a-breadcrumb-item>App</a-breadcrumb-item>-->
<!--      </a-breadcrumb>-->
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="搜索">
          <div :style="{ background: '#fff', padding: '24px', minHeight: '180px', width: '300px' ,margin: 'auto' }">WikiQuery</div>

          <div>
            <a-input-search
                v-model:value="value"
                placeholder="input search text"
                style="width: 80%"
                enter-button
                @search="onSearch"
            />
            <br />
            <br />
          </div>
          <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' , margin: 'auto'}">Content</div>
        </a-tab-pane>

        <a-tab-pane key="2" tab="发现" force-render>
          <a-result
              status="success"
              title="以下是搜索返回的结果"
              sub-title="从前有座山山上有座庙庙里有个老和尚老和尚教小和尚……"
          >
            <template #extra>
              <a-button key="console" type="primary">Go Console</a-button>
              <a-button key="buy">Buy Again</a-button>
            </template>
          </a-result>

        </a-tab-pane>
        <a-tab-pane key="3" tab="我的">
          <a-avatar :size="64" style="position: relative; right: 100px">
            <template #icon><UserOutlined /></template>
          </a-avatar>
          <a-card style="width: 180px; position: relative; left: 180px; bottom: 70px" >
            <p>他还没有个人简介</p>
          </a-card>
          <div :style="{ background: '#fff', padding: '24px', minHeight: '180px', width: '300px' ,margin: 'auto' }">搜索历史</div>
        </a-tab-pane>
      </a-tabs>
    </a-layout-content>

    <a-layout-footer style="text-align: center">
      WikiQuery ©2021 Created by Q.Chen, ZP.Ding, SZ.Hou, Y.Ren, RM.Tang and QC.Zhou
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
import Icon from '@ant-design/icons-vue';


export default defineComponent({
  setup() {
    const value = ref('');

    const onSearch = searchValue => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };
    return {
      selectedKeys: ref(['2']),
      activeKey: ref(['1']),
      value,
      onSearch,
      Icon,
    };
  },
});
</script>
<style scoped>


</style>
