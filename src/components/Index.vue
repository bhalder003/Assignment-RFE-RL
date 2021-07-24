<template>
<div class="container div-row">
  <div class="row">
    <div class="col">
      <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-3 col-form-label">Add Color</label>
        <div class="col-sm-5">
          <input v-on:focus="clearError" v-model="color" class="form-control" id="colFormLabel" placeholder="color">
        </div>
        <div class="col-sm-3">
            <button v-on:click="formatUrl" class="btn btn-primary">Add color</button>
        </div>
      </div>
      <div  class="row" role="alert"> 
        <div class="col-sm-9 col-form-label alert alert-light font-red"><span  v-show="error" >Sorry! Color {{color}} is already present in the list.</span></div>
      </div>
    </div>
    
    <div class="col-6">
      <b-list-group>
        <div class="color_tabular rounded" v-for="(color, index) in colorTag" :key="color">
            <b-list-group-item :id="index" v-on:click="removeItem" v-bind:style="{ backgroundColor: color}">{{color}}</b-list-group-item>
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
    error: Boolean,
    options: Array,
    selected: String,
    colorTag: Array,
    color: String
  },
  mounted() {
    try {
      console.log(window.location.url)
      this.colorTag = this.getColorsFromUrl(window.location.hash)
      this.color=this.$route.query.color
    } catch (e) {
      console.error("error in parsging tag from url")
    }
  },
  methods: {
    getColorsFromUrl: function(tagString) {
      try {
        var tags = tagString.split('=')[1]
        var tagArray = tags.split(',')
        console.log(tagArray)
        return tagArray
      } catch (e) {
        console.error("error in parsging tag from url")
        return []
      }
    },
    formatUrl: function() {
      this.addColorToUrl(this.color)
      const url = this.formUrl()
      this.$router.push(url)
      this.$forceUpdate()
    },
    addColorToUrl: function(color) {
      if (this.colorTag !== null) {  
        const colorIsPresent = this.colorTag.includes(color)
        if (colorIsPresent) {
          this.error = false
        } else {
          this.error = false 
        }
        if (color !== undefined) {
          this.colorTag.push(color)
        }
      }
    },
    formUrl: function() {
      if (this.colorTag === undefined || this.colorTag.length == 0){
        return ''
      } else {
        const urlTag = this.colorTag.join(",")
        return "#tags=" + urlTag
      }
    },
    clearError: function() {
      this.error = false
    },
    removeItem:function(event) {
      const targetId = event.currentTarget.id;
      var newColorTag = []
      for (let i = 0; i < this.colorTag.length; i++) {
        if(i != targetId) {
          newColorTag.push(this.colorTag[i])
        }
      }
      this.colorTag = newColorTag
      console.log(newColorTag)
      const url = this.formUrl()
      this.$router.push(url)
      this.$forceUpdate()
    }
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

.font-red {
  color: red;
  text-align: left;
  margin-left: 20px;
}
</style>