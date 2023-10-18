<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 En el componente formativo relacionado con el #[b Plan de mercadeo en la empresa pecuaria], se resaltan temas como el plan de mercadeo con sus elementos, áreas y variables de estudio del mercado, en el cual se destacan el perfil del cliente, comportamiento del consumidor y segmentación del mercado, también es importante el entorno organizacional, incluyendo el diagnóstico interno y análisis del sector. De la misma forma, se destaca el tema de la estructura del plan de mercadeo, con los objetivos, estrategias, tácticas y plan de acción, igual el cronograma y presupuesto, evaluación y control de la empresa pecuaria con los indicadores de gestión y el informe de resultado.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la figura con la síntesis se resaltan temas importantes como el plan de mercadeo, áreas y variables de estudio del mercado; perfil del cliente, comportamiento del consumidor y segmentación del mercado; el entorno organizacional, diagnóstico interno y análisis del sector, estructura del plan de mercadeo, objetivos, estrategias, tácticas y plan de acción; cronograma y presupuesto, evaluación y control de la empresa pecuaria, indicadores de gestión y el informe de resultado.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
