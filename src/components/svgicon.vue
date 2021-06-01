

<script>
import { defineComponent } from 'vue';
import Icon from '@ant-design/icons-vue';
import MessageSvg from '@/assets/logo.svg'; // '*.svg' 文件的路径

export default defineComponent({
  setup() {
    return () => <Icon type={MessageSvg} />;
  },
});
</script>
