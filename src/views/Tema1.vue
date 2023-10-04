<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de mercadeo
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1.	Elementos del plan de mercadeo

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2.	Áreas del plan de mercadeo

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3.	Variables del estudio de mercadeo

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4.	Entorno organizacional
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
