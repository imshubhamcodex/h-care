<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body{
  font-family: 'Roboto';
}
body::-webkit-scrollbar {
    width: 8px;
}
body::-webkit-scrollbar-track {
    background-color: lightgrey;
    border-radius: 100px;
}
body::-webkit-scrollbar-thumb {
    background-color: #00ffd3;
    border-radius: 100px;
}
body{
    overflow: auto;
    overflow-x: hidden;
}
</style>