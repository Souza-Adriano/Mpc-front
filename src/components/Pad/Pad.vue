<template>
  <div id="Pad">
      <button @click="emitClick" class="pad-button">
          {{title}}
      </button>
  </div>
</template>

<script>
export default {
    name: 'Pad',
    props: {
        title: {
            type: String,
        }
    },

    methods: {
        emitClick() {
            this.$emit('click')
        }
    }
}
</script>

<style>
#Pad {
    width: 80px;
    height: 80px;
    margin: 4px;
}

.pad-button {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #0D0D0D;
}

.pad-button:focus {
    outline: none;
}
</style>