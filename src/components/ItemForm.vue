<template>
    <v-form v-model="valid" ref="form" @submit.prevent="submit">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <v-text-field
                            v-model="name"
                            :rules="nameRules "
                            :counter="10"
                            label="Item Name"
                            required
                            bg-color="#FDF6E1"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <v-text-field
                            v-model="quantity"
                            :rules="quantityRules"
                            :counter="10"
                            label="Quantity"
                            required
                            bg-color="#FDF6E1"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col md="auto">
                    <v-btn
                            type="submit"
                            class="mr-4 add-btn"
                            color="#FDF6E1"
                            size="x-large"
                            :disabled="!valid"
                    >
                        {{submitButton}}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
    export default {
        name: "ItemForm",
        props: {
            submitButton: String,
            updateIndex: Number
        },
        emits: ['update:groceries'],
        methods: {
            submit() {
                this.$props.submitButton === 'Add'? this.add() : this.update()
            },
            add () {
                this.groceries.push({
                    name: this.name,
                    quantity: this.quantity
                })
                window.location.reload()
            },
            update() {
                this.groceries[this.$props.updateIndex].name = this.name
                this.groceries[this.$props.updateIndex].quantity = this.quantity
                window.location.reload()
            },
            ifExists(v) {
                for(const [index, item] of this.groceries.entries()){
                    if(index !== this.$props.updateIndex && item.name === v){
                        return true
                    }
                }
                return false
            }
        },
        data () {
            return {
                name: '',
                quantity: '',
                groceries: [],
                valid: false,
                nameRules: [
                    v => !!v || 'Item name is required',
                    v => !this.ifExists(v) || 'Item already exists'
                ],
                quantityRules: [
                    v => !!v || 'Quantity is required',
                    v => /^-?\d+$/.test(v) || 'Quantity should be integer',
                ],
            }
        },
        mounted() {
            if (localStorage.groceries) {
                this.groceries = JSON.parse(localStorage.groceries)
            }
            if(this.$props.updateIndex !== undefined){
                this.name = this.groceries.at(this.$props.updateIndex).name
                this.quantity = this.groceries.at(this.$props.updateIndex).quantity;
            }
        },
        watch: {
            groceries: {
                handler() {
                    localStorage.setItem('groceries',JSON.stringify(this.groceries))
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
</style>
