<template>
  <footer>
   <span> Feito com $carinho$ por <a href="https://instagr.am/fsantoxjr" target="_blank">Fabao</a> & <a href="https://instagr.am/gsouza.me" target="_blank">Guizo</a></span>
   <span>Em caso de problemas visite <a href="https://github.com/FSantosx/tse-project">Github</a></span>
  </footer>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  footer {
    background-color: color(fjord);
    color: #fff;
    font-size: rem(16);
    padding: rem(30) rem(40);
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;

    a {
      color: color(robin-egg-blue);

      @include hover-active-states {
        background: darken(color(robin-egg-blue), 20%);
      }
    }
  }
</style>
