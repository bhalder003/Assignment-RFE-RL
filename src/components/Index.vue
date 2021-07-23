<template>
<div class="container div-row">
  <div class="row">
    <div class="col">
      <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-3 col-form-label">Add Color</label>
        <div class="col-sm-5">
          <input type="email" class="form-control" id="colFormLabel" placeholder="color">
        </div>
        <div class="col-sm-3">
          <button type="button" class="btn btn-primary">Add Color</button>
        </div>
</div>
    </div>
    <div class="col-6 order-5 align-self-end">
      <b-list-group>
        <div class="color_tabular rounded"
          v-for="color in colorTag" :key="color">
            <b-list-group-item v-bind:style="{ backgroundColor: color}">{{color}}</b-list-group-item>
        </div>
    </b-list-group>
    </div>
  </div>
</div> 
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String,
    options: Array,
    selected: String,
    colorTag: Array
  },
  mounted() {
    var tagString = (window.location.hash)
    try {
      var tags = tagString.split('=')[1]
      var tagArray = tags.split(',')
      console.log(tagArray)
      this.colorTag = tagArray
    } catch (e) {
      console.error("error in parsging tag from url")
    }
    console.log(tagString)
  }
}
</script>

<style scoped>
.div-row {
 width: 100% 
}
.color_tabular{
  font-size: 25px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  width: 50%;
}

.output {
  width: 80%;
}

</style>