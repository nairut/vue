<template>
  <div class="container-center-horizontal">
    <div class="iphone-14-pro-max-2 screen">
      <div class="frame-10-3">
        <h1 class="title-3">{{ title }}</h1>
        <p class="address-3 valign-text-middle" v-html="address"></p>
        <group2 :className="group2Props.className" />
      </div>
      <img class="group-1-1" :src="group11" alt="group-1 1" />
    </div>
  </div>
</template>

<script>
import Group2 from "./Group2";
export default {
  name: "IPhone14ProMax2",
  components: {
    Group2,
  },
  props: ["title", "address", "group11", "group2Props"],
};
</script>

<style>
.iphone-14-pro-max-2 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 640px;
  padding: 20px 31px;
  width: 360px;
}

.frame-10-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 59.17px;
  margin-top: 33px;
  position: relative;
  width: 279px;
}

.title-3 {
  color: var(--black);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-l);
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-right: -8.62px;
  margin-top: -0.57px;
  position: relative;
  width: 287.85px;
}

.address-3 {
  color: var(--onyx);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xxs);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 24.1px;
  margin-right: -31.03px;
  position: relative;
  width: 310.26px;
}

.group-1-1 {
  align-self: center;
  height: 183px;
  margin-left: 1px;
  object-fit: cover;
  width: 153px;
}
</style>
