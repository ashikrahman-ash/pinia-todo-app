<script setup>

import { useTasks } from '../store/TaskStore.js'

const store = useTasks()

</script>

<template>
    <div class="flex justify-end text-gray-500 border-t border-gray-200 pt-4 ">
        <div class="flex space-x-2 gap-3 align-middle items-center">
            <label for="all-item" class="inline-flex items-center align-middle gap-2">
                <input type="radio" name="" class="h-4 w-4 text-blue-500" id="all-item">
                <span class="text-sm">All ({{ store.countAllTasks }})</span>
            </label>
            <label for="completed-item" class="inline-flex items-center align-middle gap-2">
                <input type="radio" name="" class="h-4 w-4 text-blue-500" id="completed-item">
                <span class="text-sm">Completed ({{ store.countDoneTasks }})</span>
            </label>
            <label for="pending-item" class="inline-flex items-center align-middle gap-2">
                <input type="radio" name="" class="h-4 w-4 text-blue-500" id="pending-item">
                <span class="text-sm">Pending ({{ store.countNotDoneTasks }})</span>
            </label>
        </div>
    </div>
</template>