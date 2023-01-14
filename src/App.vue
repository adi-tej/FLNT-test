<template>
  <v-app>
    <v-main>
      <v-form v-model="valid" ref="form" @submit.prevent="add">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                      v-model="name"
                      :rules="nameRules "
                      :counter="10"
                      label="Item Name"
                      required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                      v-model="quantity"
                      :rules="quantityRules"
                      :counter="10"
                      label="Quantity"
                      required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn
                type="submit"
                color="success"
                class="mr-4"
                size="x-large"
                :disabled="!valid"
              >
                {{submitButton}}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <h2 class="text-center">Groceries</h2>
      <v-divider></v-divider>
        <v-table fixed-header density="compact">
          <thead>
            <tr>
              <th class="text-center">
                Item Name
              </th>
              <th class="text-center">
                Quantity
              </th>
              <th class="text-center">
                Click to remove
              </th>
            </tr>
          </thead>
          <tbody>
          <tr
            v-for="(item,index) in groceries"
            :key="index"
            :item="item"
          >
            <td class="text-center">
              {{ item.name }}
            </td>
            <td class="text-center">
              {{ item.quantity }}
            </td>
            <td class="text-center">

              <v-btn
                class="ma-2"
                variant="text"
                icon="mdi-pencil"
                color="blue"
                @click="edit"
              ></v-btn>
              <v-btn
                class="ma-2"
                variant="text"
                icon="mdi-close"
                color="error"
                @click="remove(index)"
              ></v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      submitButton: 'Add',
      editForm: false,
      groceries: [{
        name: 'apple',
        quantity: 5
      },{
        name: 'ball',
        quantity: 4
      }],
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Item name is required',
        v => this.editForm || (!this.groceries.find(o => o.name === v) || 'Item already exists')
      ],
      quantity: '',
      quantityRules: [
        v => !!v || 'Quantity is required',
        v => /^-?\d+$/.test(v) || 'Quantity should be integer',
      ],
    }
  },
  methods: {
    add (e) {
      if(this.editForm){

      }else{
        this.groceries.push({
          name: this.name,
          quantity: this.quantity
        })
      }
      this.$refs.form.reset();
    },
    remove (index) {
      console.log(index)
      this.groceries.splice(index,1)
    },
    edit (index) {
      this.submitButton = 'Update'
      this.editForm = true
      const item = this.groceries.at(index)
      this.name = item.name
      this.quantity = item.quantity
      console.log('editing')
    }
  },
  watch: {
    dialog() {
      this.$refs.form.reset()
    }
  }
}
</script>
