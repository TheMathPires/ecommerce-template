<template>
  <v-container>
    <v-row>
      <v-col md="3">
        <v-card height="250" width="100%" class="mx-auto">
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Vuetify Ecommerce
                </v-list-item-title>
                <v-list-item-subtitle>
                  Navigation
                </v-list-item-subtitle>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => {
      return {
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard' },
            { title: 'Photos', icon: 'mdi-image' },
            { title: 'About', icon: 'mdi-help-box' },
        ], 
        right: null,
      }
    }
  }
</script>
