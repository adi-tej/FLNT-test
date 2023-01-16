<template>
  <v-container class="text-center mx-auto bg-custom">
    <v-table class="bg-custom" fixed-header density="compact">
      <thead>
        <tr>
          <th class="text-center text-no-wrap bg-custom">Item Name</th>
          <th class="text-center text-no-wrap bg-custom">Quantity</th>
          <th class="text-center text-no-wrap bg-custom">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in groceries" :key="index" :item="item">
          <td class="text-no-wrap">
            {{ item.name }}
          </td>
          <td class="text-no-wrap">
            {{ item.quantity }}
          </td>
          <td class="text-no-wrap">
            <v-btn
              class="ma-2"
              variant="text"
              icon="mdi-pencil"
              color="#426E5E"
              @click="openModal(index)"
            ></v-btn>
            <v-btn
              class="ma-2"
              variant="text"
              icon="mdi-close"
              color="#426E5E"
              @click="remove(index)"
            ></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-dialog v-model="dialog">
      <v-card class="bg-custom-green">
        <ItemForm v-bind:updateIndex="updateIndex" submit-button="Update" />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ItemForm from "@/components/ItemForm";
export default {
  name: "GroceriesTable",
  components: { ItemForm },
  groceries: [],
  data() {
    return {
      groceries: {},
      dialog: false,
      updateIndex: undefined,
    };
  },
  methods: {
    openModal(index) {
      this.updateIndex = index;
      this.dialog = true;
    },
    remove(index) {
      this.groceries.splice(index, 1);
    },
  },
  mounted() {
    // get groceries from local storage on load
    if (localStorage.groceries) {
      this.groceries = JSON.parse(localStorage.groceries);
    }
  },
  watch: {
    // update local storage when groceries change
    groceries: {
      handler() {
        localStorage.setItem("groceries", JSON.stringify(this.groceries));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.bg-custom {
  background-color: #fdf6e1 !important;
}
.bg-custom-green {
  background-color: rgba(66, 110, 94, 0.9);
}
</style>
