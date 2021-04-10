<template>
  <div class="bg-blue-400 flex flex-col lg:flex-row lg:flex-wrap">
    <Header class="bg-red-400 p-3 lg:flex-initial w-screen h-5vh" />

    <Sidebar class="bg-white p-3 lg:flex-initial lg:w-80 h-90vh" />

    <Nuxt class="bg-green-400 p-3 lg:flex-auto h-90vh lg:overflow-y-auto" />

    <Footer class="bg-purple-400 p-3 lg:flex-initial w-screen h-5vh" />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

@media (min-width: 1024px) {
  .h-5vh {
    height: 5vh;
  }
  .h-90vh {
    height: 90vh;
  }
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
