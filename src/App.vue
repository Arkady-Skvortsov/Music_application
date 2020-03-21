<template>
  <div id="app">
    <Header />
    <Panel />
    <Musicblog />

    <router-view />
  </div>
</template>
<script>
    import Header from "@/components/Header";
    import Panel from "@/components/Panel";
    import Musicblog from "@/components/Music_blog";
    export default {
    	components: {Header, Panel, Musicblog}
    }
</script>
<style>
 ::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}

::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
} /* Для scrollbar */

</style>
