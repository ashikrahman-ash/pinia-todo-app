<script setup lang="ts">
    import TaskAdd from './TaskAdd.vue'
    import TaskList from './TaskListFile.vue'
    import TaskFilter from './TaskFilter.vue'


</script>

<template>
    <div class="max-w-xl w-full min-h-[400px] bg-white p-6 rounded-lg shadow-xl shadow-gray-200 flex flex-col justify-between">
        <div class="">
            <TaskAdd />
            <TaskList />
        </div>
        
        <div class="">
            <TaskFilter />
        </div>
        
    </div>
    
</template>