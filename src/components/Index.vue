<template>
  <div class="container div_row">
    <div class="row">
      <div class="col">
        <div class="row mb-3">
          <label for="colFormLabel" class="col-sm-3 col-form-label">Add Tag</label>
          <div class="col-sm-5">
            <input v-model="color" v-on:keyup="clearError" v-on:focus="clearError" v-on:keyup.enter="enterkeyPressed" class="form-control" id="colFormLabel" placeholder="color">
          </div>
          <div class="col-sm-3">
              <button v-on:click="updateUrl" class="btn btn-primary">Add color</button>
          </div>
        </div>
        <div  class="row" role="alert"> 
          <div class="col-sm-9 col-form-label alert error"><span  v-show="error" >Add one valid color.</span></div>
        </div>
      </div>
      <div class="col-6">
        <b-list-group>
          <div class="color_tabular rounded" v-for="(color, index) in colorList" :key="color">
              <b-list-group-item :id="index" v-on:click="removeItem" v-bind:style="{ backgroundColor: color}">{{color}}</b-list-group-item>
          </div>
        </b-list-group>
      </div>
    </div>
  </div> 
</template>

<style src="./Index.css"></style>
<script src="./Index.js"></script>