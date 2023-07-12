<template>
  <div class="container-center-horizontal">
    <div class="iphone-14-pro-max-1 screen">
      <div class="frame-10-4">
        <h1 class="title-4">{{ title }}</h1>
        <p class="address-4 valign-text-middle" v-html="address"></p>
        <group2 />
      </div>
      <div class="overlap-group-2" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
        <img class="vector-4" :src="vector4" alt="Vector 4" />
      </div>
    </div>
  </div>
</template>

<script>
import Group2 from "./Group2";
export default {
  name: "IPhone14ProMax1",
  components: {
    Group2,
  },
  props: ["title", "address", "overlapGroup", "vector4"],
};
</script>

<style>
.iphone-14-pro-max-1 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 19px;
  height: 932px;
  padding: 33px 21px;
  width: 430px;
}

.frame-10-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 82px;
  margin-top: 56px;
  position: relative;
  width: 387px;
}

.title-4 {
  color: var(--black);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xl);
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-right: -11.94px;
  margin-top: -0.8px;
  position: relative;
  width: 398.94px;
}

.address-4 {
  color: var(--onyx);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xs);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 33.4px;
  margin-right: -43px;
  position: relative;
  width: 430px;
}

.overlap-group-2 {
  align-items: flex-end;
  align-self: center;
  background-size: 100% 100%;
  display: flex;
  height: 365px;
  margin-right: 1px;
  min-width: 305px;
  padding: 24px 24px;
}

.vector-4 {
  height: 311px;
  object-fit: cover;
  width: 208px;
}
</style>
