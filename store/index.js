export const state = () => ({
  tasks: [
    // {
    //   content: "Get milk",
    //   done: true
    // }
  ]
})
// vuex mutations definitions for tasks 
export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks]
    // state.tasks.push({ content: task, done: false})
    // // Add task to start of array 
    // state.tasks.unshift({ content: task, done: false })
  },
  REMOVE_TASK (state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  TOGGLE_TASK (state, task) {
    task.done = !task.done;
  }
}