<template>
    <div :class="classes">
    <label
      :for="'checked' + task.id"
      :aria-label="'archiveTask-' + task.id"
      class="checkbox"
    >
      <input
        type="checkbox"
        :checked="isChecked"
        disabled
        :name="'checked' + task.id"
        :id="'archiveTask-' + task.id"
      />
      <span class="checkbox-custom" @click="archiveTask" />
    </label>
    <label :for="'title-' + task.id" :aria-label="task.title" class="title">
      <input
        type="text"
        readonly
        :value="task.title"
        :id="'title-' + task.id"
        name="title"
        placeholder="Input title"
      />
    </label>
    <button
      v-if="!isChecked"
      class="pin-button"
      @click="pinTask"
      :id="'pinTask-' + task.id"
      :aria-label="'pinTask-' + task.id"
    >
      <span class="icon-star" />
    </button>
  </div>
</template>

<script>
    export default {
        props: {
            task: {
                type: Object,
    required: true,
    default: () => ({ id: "", state: "", title: "" }),
    validator: (task) =>
      ["id", "state", "title"].every((key) => key in task),
            },
        },

        computed: {
            classes() {
    return {
      "list-item TASK_INBOX": this.task.state === "TASK_INBOX",
      "list-item TASK_PINNED": this.task.state === "TASK_PINNED",
      "list-item TASK_ARCHIVED": this.task.state === "TASK_ARCHIVED",
    };
  },
  isChecked() {
    return this.task.state === "TASK_ARCHIVED";
  }
        },
        methods: {
            archiveTask() {
    this.$emit("archive-task", this.task.id);
  },
  pinTask() {
    this.$emit("pin-task", this.task.id);
  }
        },
    }
</script>

<style scoped>

    .list-item input {
      background: rgb(212, 212, 232);
    }
</style>