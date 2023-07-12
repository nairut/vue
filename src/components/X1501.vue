<template>
  <div class="x1501 screen">
    <div class="frame-11-2">
      <frame10 />
      <div class="group-1-3">
        <div class="overlap-group-1">
          <img class="rectangle-5-1" :src="rectangle5" alt="Rectangle 5" /><vector1
            :src="vector1Props.src"
            :className="vector1Props.className"
          />
          <img class="rectangle-2-1" :src="rectangle2" alt="Rectangle 2" /><img
            class="rectangle-3-1"
            :src="rectangle3"
            alt="Rectangle 3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame10 from "./Frame10";
import Vector1 from "./Vector1";
export default {
  name: "X1501",
  components: {
    Frame10,
    Vector1,
  },
  props: ["rectangle5", "rectangle2", "rectangle3", "vector1Props"],
};
</script>

<style>
.x1501 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 1200px;
  padding: 100px 174px 100px 85px;
  position: relative;
}

.frame-11-2 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.group-1-3 {
  height: 365px;
  min-width: 305px;
  position: relative;
}

.overlap-group-1 {
  height: 365px;
  position: relative;
  width: 305px;
}

.rectangle-5-1 {
  height: 341px;
  left: 24px;
  position: absolute;
  top: 0;
  width: 281px;
}

.rectangle-2-1 {
  height: 244px;
  left: 0;
  position: absolute;
  top: 121px;
  width: 24px;
}

.rectangle-3-1 {
  height: 24px;
  left: 0;
  position: absolute;
  top: 341px;
  width: 254px;
}
</style>
