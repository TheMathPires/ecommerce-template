<template>
  <v-card height="250" width="250">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vuetify Ecommerce
          </v-list-item-title>
          <v-list-item-subtitle> Navigation </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Navigation",
  data: () => {
    return {
      items: [
        { title: "Products", icon: "mdi-view-dashboard" },
        { title: "Contact", icon: "mdi-image" },
        { title: "About us", icon: "mdi-help-box" },
      ],
    };
  },
};
</script>
