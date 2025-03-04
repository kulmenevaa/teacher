<template>
    <v-responsive class="border rounded" max-height="300">
        <v-app :theme="theme">
            <v-app-bar title="App bar">
                <v-spacer/>
                <v-btn @click="onClick" slim :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"/>
            </v-app-bar>

            <v-navigation-drawer>
                <v-list>
                <v-list-item title="Navigation drawer"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <v-container>
                <h1>Main Content</h1>
                </v-container>
            </v-main>
        </v-app>
  </v-responsive>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>