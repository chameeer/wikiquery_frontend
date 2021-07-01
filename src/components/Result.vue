<template>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination"
    :data-source="listData"
  >
    <template #footer>
      <div>
        By
        <b>WikiQuery </b>
        @ 2021
      </div>
    </template>

    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
          <span v-for="{ type, text } in actions" :key="type">
            <component v-bind:is="type" style="margin: auto" />
            {{ text }}
          </span>
        </template>
        <!--        <template #extra>-->
        <!--          <img-->
        <!--            width="272"-->
        <!--            alt="logo"-->
        <!--            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"-->
        <!--          />-->
        <!--        </template>-->
        <a-list-item-meta :description="item.description">
          <template #title>
            <a :href="item.href">{{ item.title }}</a>
          </template>
          <!--          <template #avatar><a-avatar :src="item.avatar"/></template>-->
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </template>
  </a-list>
</template>
<script>
import {
  StarOutlined,
  LikeOutlined,
  MessageOutlined
} from "@ant-design/icons-vue";
import { defineComponent, toRefs, ref } from "vue";
import axios from "axios";



// for (let i = 0; i < 1; i++) {
//   listData.push({
//     href:
//       "https://zh.wikipedia.org/wiki/%E4%B8%AD%E6%96%87%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91",
//     title: `搜索结果标题 ${i}`,
//     // avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     description: "本文档与关键词话题重合率 85.032033435%"
//     // content:
//     //   "英语中的“Wikipedia”是“wiki”（一种可供多人协同写作的网络技术）和“encyclopedia”（百科全书）结合而成的混成词，网站初期时仅以“中文Wikipedia”为名，直到2003年10月21日，“Wikipedia”的中文名，经过13人讨论及投票后，确定为“维基百科”"
//   });
// }

export default defineComponent({
  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined
  },
  props: {
    /** 传入的搜索字串 */
    q: { type: String, required: true }
  },
  setup(props) {
    const { q } = toRefs(props);
    let listData = ref([]);
    const instance = axios.create({
      baseURL: "http://210.16.187.147:20609"
      // baseURL: "http://localhost:5000"
    });

    instance
      .post("/result", {
        query: q.value
      })
      .then(function(response) {
        // listData = response.data;
        console.log(response);
        console.log(response.data.res1);
        listData.value.push({
          href: response.data.res1.href,
          title: response.data.res1.title,
          description: response.data.res1.description
        });
        listData.value.push({
          href: response.data.res2.href,
          title: response.data.res2.title,
          description: response.data.res2.description
        });
        listData.value.push({
          href: response.data.res2.href,
          title: response.data.res2.title,
          description: response.data.res2.description
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    const pagination = {
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
      position: "bottom",
      simple: "true",
      style: "text-align: center"
    };
    const actions = [
      {
        type: "StarOutlined",
        text: "156"
      },
      {
        type: "LikeOutlined",
        text: "156"
      },
      {
        type: "MessageOutlined",
        text: "2"
      }
    ];
    return {
      listData,
      pagination,
      actions
    };
  }
});
</script>
