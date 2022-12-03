<template>
  <div class="task-list container">
    <div class="mb-3">
        <textarea class="form-control" v-model="data.tops[day]"></textarea>
    </div>
    <div class="task-list-item" v-for="i in data.tasklist" :key="i">
        <label class="form-check top">
            <input class="form-check-input" type="checkbox" v-model="data.tasks[day][i].isdone">
            <span class="form-check-label" v-text="i"></span>
        </label>
        <textarea class="form-control" rows="1" v-model="data.tasks[day][i].result"></textarea>
    </div>
    <div v-if="!data.tasklist.length">
        Нет задач
    </div>
    <div class="mb-3">
        <textarea class="form-control" v-model="data.bottoms[day]"></textarea>
    </div>
  </div>


</template>

<script>
export default {
    data() {
        return {
            data: {
                tasklist: [],
                top: "",
                bottom: "",
                tasks: {},
                tops: {},
                bottoms: {},
            },
            day: "2022-12-03",
        }
    },
    computed: {
        jsonstr: {
            get: vm => JSON.stringify(vm.data),
            set(val) { Object.assign(this.data, JSON.parse(val || "{}"))
            }
        },
    },
    methods: {
        save() {
            localStorage["data2"] = this.jsonstr;
        },
    },
    created() {
        window.addEventListener("beforeunload", this.save);
        this.jsonstr = localStorage["data2"]
        if (!this.data.tasks[this.day]) {
            this.data.tasks[this.day] = {}
            this.data.tasklist.forEach(i => {
                this.data.tasks[this.day][i] = {
                    isdone: false,
                    result: "", 
                }
            })
            this.data.tops[this.day] = this.data.top;
            this.data.bottoms[this.day] = this.data.bottom;       
        }
    }
}
</script>

<style>
    .form-check {
        text-align: left;
    }
    .task-list {
        margin: auto;
        border: 1px solid var(--bs-gray);
        border-radius: 10px;
        padding: 10px;
    }
    .task-list-item {
        margin: 10px 0;
    }
</style>