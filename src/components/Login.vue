<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <a-form
    style="width: 80%; text-align: center; margin: auto;"
    layout="horizontal"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix
          ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-model:value="formState.password"
        type="password"
        placeholder="Password"
      >
        <template #prefix
          ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        style="width: 80%; margin-right: auto; margin-left: auto; margin: auto"
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
      >
        登录
      </a-button>
    </a-form-item>
    <a-form-item>
      <a-button
        style="width: 80%; margin-right: auto; margin-left: auto; margin: auto"
        type="default"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
      >
        注册
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      user: "",
      password: ""
    });

    const handleFinish = values => {
      console.log(values, formState);
    };

    const handleFinishFailed = errors => {
      console.log(errors);
    };

    return {
      formState,
      handleFinish,
      handleFinishFailed
    };
  },

  components: {
    UserOutlined,
    LockOutlined
  }
});
</script>

<style scoped></style>
