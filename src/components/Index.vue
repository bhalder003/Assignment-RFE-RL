<template>
    <div class="div-row">
      
      <h1 class = "select-dropdown">Color</h1>

      <v-select 
        class = "select-dropdown" 
        v-model="selected" 
        :options="options"
        placeholder="select a color">
      </v-select>
      
      <h1 :style="{color: selected}">{{ msg }} {{selected}}</h1>
    </div>  
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String,
    options: Array,
    selected: String
  }
}
</script>

<style scoped>
.div-row {
 width: 1000px 
}
.select-dropdown {
  width: 250px;
  display: inline-block; 
}

h1 {
  width: 450px;
  display: inline-block; 
}
</style>