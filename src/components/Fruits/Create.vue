<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            data-test="add-button"
          >
            <v-icon>mdi-plus</v-icon>Ajouter un fruit
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Nouveau fruit</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    label="Nom du fruit*"
                    required
                    v-model="fruit.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Image url*"
                    type="string"
                    required
                    v-model="fruit.image"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Prix*"
                    type="text"
                    required
                    v-model="fruit.price"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-switch
                    v-model="fruit.isFruit"
                    class="ma-2"
                    label="Est-ce un fruit ?"
                  ></v-switch>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Couleur*"
                    type="color"
                    required
                    v-model="fruit.color"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    outlined
                    required
                    name="description-7-4"
                    label="Description"
                    v-model="fruit.description"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Goût*"
                    type="string"
                    required
                    v-model="fruit.taste"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Fermer</v-btn
            >
            <v-btn color="primary" text @click="sendForm()">Ajouter</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "@vue/composition-api";
import { Fruit } from "~~/types/fruit";

export default defineComponent({
  name: "CreateFruit",
  setup(props, ctx) {
    const dialog = ref(false);

    const fruit = ref({
      name: "",
      image: "",
      price: 0,
      isFruit: true,
      color: "#000000",
      description: "",
      taste: ""
    });

    const sendForm = async () => {
      const response = await ctx.root.$store.dispatch(
        "fruit/addFruit",
        fruit.value
      );
      if (response.result[0].status === 201) {
        await ctx.root.$store.dispatch("fruit/getFruitsData");
        dialog.value = false;
      }
    };

    return { dialog, fruit, sendForm };
  }
});
</script>
