<template>
  <v-app>
    <div class="h-100">
      <v-row align="start h-100" no-gutters>
        <v-col class="form-container h-100 v-col-sm">
          <v-img class="logo" src="./assets/logo.png" height="150px" />
          <ItemForm submit-button="Add" />
        </v-col>
        <v-col class="table-container h-100 v-col-sm ma-auto">
          <GroceriesTable ref="table" />
        </v-col>
      </v-row>
    </div>

    <v-footer class="pa-0 ma-0">
      <div class="bg-black text-center w-100">
        © {{ new Date().getFullYear() }} — <strong> Adi Teja Dasari</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import ItemForm from "@/components/ItemForm";
import GroceriesTable from "@/components/GroceriesTable";
export default {
  name: "App",
  components: { GroceriesTable, ItemForm },
  data() {
    return {
      submitButton: "Add",
      editForm: false,
      editIndex: 0,
      groceries: [],
    };
  },
  mounted() {
    // create groceries local storage
    if (!localStorage.groceries) {
      localStorage.setItem("groceries", JSON.stringify(this.groceries));
    }
  },
};
</script>
<style scoped>
.logo {
  margin-bottom: 30%;
}
.form-container {
  background-color: #426e5e;
}
.table-container {
  background-color: #fdf6e1;
}
.h-100 {
  height: 100%;
}
</style>
