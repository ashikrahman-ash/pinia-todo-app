<script setup>
    import { useTasks } from '../store/TaskStore.js'
    import Task from './Task.vue'

    const store = useTasks()

</script>

<template>
    <div 
    
    v-for="task in store.tasks"
    :key="task.id"

    class="flex items-center align-middle border-t border-gray-200 py-2"
    >
        <Task :task='task' />
    </div>
</template>