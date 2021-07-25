export default {
    name: 'Index',
    props: {
      color: String,
      colorList: Array,
      error: Boolean
    },
    mounted() {
      try {
        console.log(window.location.url)
        this.colorList = this.getColorsListArrayFromUrl(window.location.hash)
        this.error=false
      } catch (e) {
      console.error("error in parsging tag from url")
      }
    },
    methods: {
      updateUrl: function() {
        const colorList = this.addColorToColorListArrray(this.color)
        if (colorList.length != 0) {
          const url = this.formUrl(colorList)
          this.refreshComponent(url)
        }
      },
      addColorToColorListArrray: function(color) {
        var colorList = this.getColorsListArrayFromUrl(window.location.hash) 
        if (color !== undefined && color.trim() != '' && !color.includes("=")) {
            colorList.push(color)
            this.color = ''
        } else {
            this.error = true
        }
        this.colorList= colorList
        return colorList
      },
      getColorsListArrayFromUrl: function(tagString) {
        try {
          var tags = tagString.split('=')[1]
          var tagArray = tags.split(',')
          var filtered = tagArray.filter(Boolean);
          console.log(filtered)
          return filtered
        } catch (e) {
          console.error("error in parsging tag from url")
          return []
        }
      },
      formUrl: function(colorList) {
        if (colorList === undefined || colorList.length == 0){
          return ''
        } else {
          const urlTagString = colorList.join(",")
          return "#tags=" + urlTagString
        }
      },
      removeItem:function(event) {
        const targetId = event.currentTarget.id;
        var colorList = this.getColorsListArrayFromUrl(window.location.hash)      
        var newColorList = []
        for (let i = 0; i < colorList.length; i++) {
          if(i != targetId) {
            newColorList.push(colorList[i])
          }
        }
        this.colorList= newColorList
        this.error = false
        const url = this.formUrl(newColorList)
        this.refreshComponent(url)
      },
      refreshComponent: function (url) {
        this.$router.push(url)
        this.$forceUpdate()
      },
      clearError: function(){
        this.error = false
      },
      enterkeyPressed: function(event) {
        if (event.keyCode  == 13) {
          this.updateUrl()
          this.color = ''
        }
      }
    }
  }