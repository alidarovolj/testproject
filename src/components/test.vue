<template>
    <div>
        <h1 v-if="status === 1">{{ transfer }}</h1>
        <p v-else>{{ heading }}</p>
        <button @click="changeStatus()">Click me!</button>
    </div>
</template>

<script>
export default {
    name: "Test",
    data () {
        return {
            heading: 'Hello Vue!',
            status: 1
        }
    },
    props: [ 'transfer' ],
    methods: {
        changeStatus() {
            if (this.status === 1) {
                this.status = 0
            } else {
                this.status = 1
            }
        }
    },
}
</script>