<template>
  <!-- <div>Hello, World!</div> -->
  <!-- layout the Application -->
  <main>
    <h1>Task board</h1>
    <p>Create a list of tasks</p>
    <div class="create-new">
      <!-- keypress on Enter key to create a new task-->
      <input type="text" v-model="newTask" placeholder="Add a new task" @keypress.enter="addTask" />
      <!-- add button with @click event  -->
      <button @click="addTask">Add</button>
    </div>
    <div class="tasks">
      <!-- task component -->
      <Task v-for="(task,i) in $store.state.tasks"
      :key="i"
      :task="task" />
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      newTask: ''
    }  
  },
  methods: {
    addTask () {
      if ( this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    }
  }
}
</script>
