<template>
  <div class="settings container">
    <div class="mb-3">
      <span class="form-label">Шаблон верхнего</span>
      <textarea class="form-control" v-model="data.top"></textarea>
    </div>
    <div class="mb-3">
      <span class="form-label">Быстрая настройка</span>
      <textarea class="form-control" v-model="data.tasklist"></textarea>
    </div>
    <div class="mb-3">
      <span class="form-label">Шаблон нижнего</span>
      <textarea class="form-control" v-model="data.bottom"></textarea>
    </div>
  </div>
  <a class="btn btn-primary " href="#" role="button" @click="setall">Set All</a>
</template>

<script>
export default {
  data() {
    return {
      data: {
        tasklist: "",
        top: "",
        bottom: "",
      },
    };
  },
  methods: {
    setall() {
      this.data.tasklist = this.data.tasklist.split("\n")
      localStorage["data2"] = JSON.stringify(this.data)
    },
  },
  created() {
    window.addEventListener("beforeunload", this.setall);
    this.data = Object.assign(this.data, JSON.parse(localStorage["data2"]||"{}"))
    this.data.tasklist = this.data.tasklist.join("\n")
  },
};
</script>

<style>
</style>
