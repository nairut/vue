<template>
  <div :class="[`group-3`, className || ``]">
    <div class="talk-to-an-expert valign-text-middle manrope-light-white-20px">TALK TO AN EXPERT</div>
  </div>
</template>

<script>
export default {
  name: "Group2",
  props: ["className"],
};
</script>

<style>
.group-3 {
  background-color: var(--international-klein-blue);
  height: 55px;
  min-width: 335px;
  position: relative;
}

.talk-to-an-expert {
  height: 9px;
  left: 63px;
  letter-spacing: 1px;
  line-height: 13px;
  position: absolute;
  text-align: center;
  top: 22px;
  white-space: nowrap;
  width: 209px;
}

.group-3.group-3-1 {
  height: 69px;
  min-width: 256px;
}

.group-3.group-3-1 .talk-to-an-expert {
  height: 11px;
  left: 48px;
  line-height: 25.5px;
  top: 28px;
  width: 160px;
}
</style>
