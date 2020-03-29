<template>
  <div id="header">
    <h1>maje</h1>
    <ul>
      <li>pre-collection</li>
      <li>collection</li>
      <li>accessories</li>
      <li>lookbook</li>
      <li>stores</li>
      <li>bag</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    text-align: right;
    font-weight: 400;
    margin-bottom: 5rem;
  }
  ul {
    align-self: center;
    margin: 0 2rem;
    list-style: none;
    justify-content: space-evenly;
    li {
      text-transform: uppercase;
      letter-spacing: 0.25rem;
      font-size: 0.75rem;
      font-weight: 700;
      display: inline-block;
      margin-right: 6rem;
    }
  }
}
</style>
