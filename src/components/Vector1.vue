<template>
  <div :class="[`vector-1`, className || ``]" :style="{ 'background-image': 'url(' + src + ')' }"></div>
</template>

<script>
export default {
  name: "Vector1",
  props: ["src", "className"],
};
</script>

<style>
.vector-1 {
  background-position: 50% 50%;
  background-size: cover;
  height: 311px;
  left: 24px;
  position: absolute;
  top: 31px;
  width: 208px;
}

.vector-1.vector-1-1 {
  top: 42px;
}
</style>
