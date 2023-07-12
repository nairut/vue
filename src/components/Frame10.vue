<template>
  <div class="frame-10">
    <h1 class="title lato-bold-black-55px">Professional Translation Services</h1>
    <p class="address valign-text-middle lato-bold-onyx-21px">
      120 languages that fits in your budget<br />11,000+ translators<br />Easy, Technological, Professional
    </p>
    <group2 />
  </div>
</template>

<script>
import Group2 from "./Group2";
export default {
  name: "Frame10",
  components: {
    Group2,
  },
};
</script>

<style>
.frame-10,
.frame-10-1,
.frame-10-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 27px;
  position: relative;
  width: 486px;
}

.title,
.title-1,
.title-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: -15px;
  margin-top: -1px;
  position: relative;
  width: 501px;
}

.address,
.address-1,
.address-2 {
  letter-spacing: 0;
  line-height: 42px;
  margin-right: -54px;
  position: relative;
  width: 540px;
}
</style>
