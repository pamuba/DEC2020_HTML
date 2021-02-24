<template>

   <div id="app">
     <div>{{greet}}{{name}}</div>
     <div v-text="channel">Hello</div>
     <h2 v-bind:id="headingId">Heading</h2>
     <button v-bind:disabled="isDisabled">Bind</button>
     <h2 class="underline">Underlined text</h2>
     <h2 class="underline" v-bind:class="status">Status</h2>
     <h2 v-bind:class="isPromoted && 'promoted'">Promoted</h2>
     <h2 v-bind:class="isSoldout ?'sold-out':'new'">Soldout?movie</h2>
     <h2 v-bind:class="['new', 'promoted']">Newly Promoted movie</h2>
     <h2 v-bind:class="[isPromoted && 'promoted', isSoldout ?'sold-out':'new']">Newly Promoted movie</h2>
     <h2 v-bind:class="{
       promoted:isPromoted,
       new:!isSoldout,
       'sold-out':isSoldout
     }">Conditional</h2>
     <h2 v-bind:style="{
       color:highlightColor,
       fontSize : headerSize + 'px',
       padding:'20px',
       }">
      Inline Style</h2>
      <h2 v-bind:style="headerStyleObject">Style Object</h2>
   </div>
 
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      greet:"Hello",
      name:"Batman",
      channel:"Webinar",
      headingId:'heading',
      isDisabled:false,
      status:'danger',
      isPromoted:true,
      isSoldout:true,
      headerSize:50,
      highlightColor:'orange',
      headerStyleObject:{
        color:'orange',
        fontSize:'50px',
        padding:'20px'
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.underline{
  text-decoration: underline;
}
.promoted{
  font-style: italic;
}
.new{
  color:olivedrab;
}
.sold-out{
  color:red;
}
</style>
