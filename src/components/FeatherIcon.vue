<script>
import * as icons from 'vue-feather-icons';
export default {
  functional: true,
  props: {
    icon: { type: String, required: true },
    size: { type: String, default: '1x' }
  },
  render (h, ctx) {
    return h(icons[ctx.props.icon]);
  }
};
</script>
