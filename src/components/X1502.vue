<template>
  <div class="x1502 screen">
    <div class="frame-11">
      <frame10 />
      <img class="group-1-2" :src="group12" alt="group-1 2" />
    </div>
  </div>
</template>

<script>
import Frame10 from "./Frame10";
export default {
  name: "X1502",
  components: {
    Frame10,
  },
  props: ["group12"],
};
</script>

<style>
.x1502 {
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

.frame-11 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.group-1-2 {
  height: 321px;
  min-width: 268.23px;
  object-fit: cover;
  position: relative;
}
</style>
