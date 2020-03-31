<template>
  <div id="footer">
    <div v-for="(list, i) in lists" :key="i + '-footer'">
      <h4>{{ list.label }}</h4>
      <ul v-if="list.listItems">
        <li
          v-for="(listItem, i) in list.listItems"
          :key="i + '-footer-listItem'"
          class="text-light-weight"
        >
          {{ listItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      lists: [
        {
          label: 'Main Fabric',
          listItems: [
            '63% Polyester',
            '27% Viiscose',
            '7% Coton',
            '3% Elasthanne'
          ]
        },
        {
          label: 'Main Lining',
          listItems: ['67% Acetate', '33% Polyester']
        },
        {
          label: 'Care Instructions',
          listItems: [
            'Delicate wash 30*',
            'Do not bleach',
            'Ironing max 110*',
            'Dryclean using any solvent except Trichloroethylene',
            'Do not tumble dry'
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
#footer {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
    url('./../../public/black-marble-texture.png');
  background-size: cover;
  background-repeat: none;
  display: flex;

  grid-row: 7 / 11;
  grid-column: 3 / 14;
  padding: 10rem 6rem 4rem;

  div {
    display: flex;
    flex-direction: column;
    max-width: 19rem;
    margin-right: 9rem;
  }
}
h4 {
  text-transform: uppercase;
  text-align: left;
  margin: 0.5rem 0;
  color: $light-text-color;
  font-weight: 500;
  font-size: 0.5rem;
}
ul {
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0.5rem 0;
    text-decoration: none;
    color: $light-text-color;
    text-align: left;
    font-size: 0.5rem;
    line-height: 1.5rem;
  }
}
</style>
