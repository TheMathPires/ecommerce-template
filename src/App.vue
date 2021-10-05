<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <Navigation />
          <v-col md="9">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "App",

  components: {
    Navigation,
  },
};
</script>
