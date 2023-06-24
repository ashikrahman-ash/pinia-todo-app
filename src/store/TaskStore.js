import { defineStore } from 'pinia'

export const useTasks = defineStore('task', {
    state: () => {
        return {
            tasks: [
                {
                    id: 1,
                    forid: 'task1',
                    name: 'Task 1',
                    status: false,
                },
                {
                    id: 2,
                    forid: 'task2',
                    name: 'Task 2',
                    status: true
                },
                {
                    id: 3,
                    forid: 'task3',
                    name: 'Task 3',
                    status: false
                },
                {
                    id: 4,
                    forid: 'task4',
                    name: 'Task 4',
                    status: true
                },
                {
                    id: 5,
                    forid: 'task5',
                    name: 'Task 5',
                    status: true
                },
                {
                    id: 6,
                    forid: 'task6',
                    name: 'Task 6',
                    status: false
                },
            ],

            sortable: "all"

        }
    },

    getters: {

        filteredTasks() {

            return this.sortable === 'completed' ? this.completedTasks : this.sortable === 'pending' ? this.pendingTasks : this.allTasks

        },

        allTasks() {
            return this.tasks
        },

        completedTasks() {
            return this.tasks.filter(task => task.status)
        },

        pendingTasks() {
            return this.tasks.filter(task => !task.status)
        },

        countAllTasks() {
            return this.tasks.length
        },

        countDoneTasks() {
            return this.tasks.filter(task => task.status).length
        },

        countPendingTasks() {
            return this.tasks.filter(task => !task.status).length
        }

    },

    actions: {
        addTask(task) {
            this.tasks.push(task)
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter( task => task.id !== id )
        },

        handleToggle(id) {
            const task = this.tasks.find( task => task.id === id )

            task.status = !task.status
        }

    }


});