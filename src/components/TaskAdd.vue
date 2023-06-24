<script setup>

import { ref } from 'vue'
const task = ref('')

import { useTasks } from '../store/TaskStore.js'
const store = useTasks()

const addTask = () => {
    let newTask = {
        id: Date.now(),
        name: task.value,
        status: false,
    }

    store.addTask(newTask)
}

</script>


<template>
    <form @submit.prevent="addTask" class="mb-6 flex space-x-4">
        <input v-model="task" type="text" placeholder="Enter your value" name="" class="w-full text-lg bg-gray-100 rounded border border-gray-300 py-2 px-3 outline-none focus:border-indigo-500" id="">
        <button type="submit" class="text-white text-lg font-medium bg-indigo-500 border-0 py-2 px-8 hover:bg-indigo-700 transition-all duration-150 rounded">Add</button>
    </form>
</template>