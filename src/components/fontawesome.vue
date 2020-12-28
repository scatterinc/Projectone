<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'MyComponent',

  data () {
    return {
      myIcon: faSpinner
    };
  },

  components: {
    FontAwesomeIcon
  }
};
</script>
