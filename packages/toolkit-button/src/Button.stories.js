import { storiesOf } from '@storybook/vue';

import MyButton from './Button.vue';

storiesOf('Components|Button', module)
  .add('Default', () => ({
    components: { MyButton },
    template: '<MyButton></MyButton>'
  }))
