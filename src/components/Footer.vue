<template>
  <div id="footer">
    <div v-for="(list, i) in lists" :key="i + '-footer'">
      <h4>{{ list.label }}</h4>
      <ul v-if="list.listItems">
        <li v-for="(listItem, i) in list.listItems" :key="i + '-footer-listItem'">{{ listItem }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      lists: [
        {
          label: "Main Fabric",
          listItems: [
            "63% Polyester",
            "27% Viiscose",
            "7% Coton",
            "3% Elasthanne"
          ]
        },
        {
          label: "Main Lining",
          listItems: ["67% Acetate", "33% Polyester"]
        },
        {
          label: "Care Instructions",
          listItems: [
            "Delicate wash 30*",
            "Do not bleach",
            "Ironing max 110*",
            "Dryclean using any solvent except Trichloroethylene",
            "Do not tumble dry"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#footer {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
    url("./../../public/black-marble-texture.png");
  background-size: cover;
  background-repeat: none;
  display: flex;
  color: #ffffff;
  grid-row: 7 / 11;
  grid-column: 3 / 14;
  padding: 10rem 6rem 4rem;
  div {
    display: flex;
    flex-direction: column;
    max-width: 12rem;
    margin-right: 12rem;
  }
}
h4 {
  text-transform: uppercase;
  text-align: left;
  margin: 0.5rem 0;
}
ul {
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0.5rem 0;
    text-decoration: none;
    color: #ffffff;
    text-align: left;
  }
}
</style>
