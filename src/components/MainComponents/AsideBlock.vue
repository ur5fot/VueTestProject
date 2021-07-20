<template>
  <aside class="aside-block">
    <AsideMainButtonsGroup />
    <AsideParametersBlock />
    <QueueCountBlock />
  </aside>
</template>
<script>
import AsideMainButtonsGroup from '../AsideComponents/AsideMainButtonsGroup';
import AsideParametersBlock from '../AsideComponents/AsideParametersBlock';
import QueueCountBlock from '../AsideComponents/QueueCountBlock';
export default {
  name: "AsideBlock",
  components: {
    AsideMainButtonsGroup,
    AsideParametersBlock,
    QueueCountBlock,
  }
}
</script>
<style scoped>
</style>