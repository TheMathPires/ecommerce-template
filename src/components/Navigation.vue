<template>
  <v-card height="180" width="200">
    <v-navigation-drawer>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.link">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
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
        { title: "Products", icon: "mdi-view-dashboard", link: "/" },
        { title: "Contact", icon: "mdi-image", link: "/" },
        { title: "About us", icon: "mdi-help-box", link: "/" },
      ],
    };
  },
};
</script>

<style>
.v-list-item__content > a {
  text-decoration: none;
  color: #777;
}
</style>