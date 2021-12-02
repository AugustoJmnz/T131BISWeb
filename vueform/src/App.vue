<template>
    <v-app>
<v-navigation-drawer app></v-navigation-drawer>
    <v-app-bar app>
      <router-link to="/">Home</router-link> |
      <router-link to="/vform1">Form</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/List1">Lista 1</router-link>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app>Universidad Tecnologica de la Riviera Maya</v-footer>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
