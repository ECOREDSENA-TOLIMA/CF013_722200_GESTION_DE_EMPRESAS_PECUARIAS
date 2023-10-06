<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estructura del plan de mercadeo
    .row.justify.content-center.align-items-center
      .col-md-7.mb-3(data-aos="flip-up")
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Según “Philip Kotler” (2006) “Un plan de marketing es un documento escrito en el que se escogen los objetivos, las estrategias y los planes de acción relativos a los elementos del marketing mix, que facilitarán y posibilitarán el cumplimiento de la estrategia a nivel corporativo, año a año, paso a paso”.
            i.fas.fa-quote-right
        .cajon.p-4.mb-3
          p En este punto como resultado del estudio del mercado ya se ha realizado la segmentación del mercado y se ha definido el público objetivo, esto permite iniciar con el diseño de objetivos y estrategias, y empezar a dar estructura al plan de mercadeo.
      .col-md-5
        figure
          img(src='@/assets/curso/temas/tema2/1.jpg', alt='Texto que describa la imagen')

    .row
      .col  
        p(data-aos="fade-left") A continuación, se describe cada una de las partes que debe incluir el plan para alcanzar las metas de la organización.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1.	Objetivos

    p.mb-5(data-aos="fade-left") Para diseñar estrategias se debe tener claro cuál es el objetivo, qué es lo que se quiere alcanzar como empresa. Para ello, es importante recordar que hay objetivos empresariales y objetivos de mercadeo; la siguiente tabla muestra algunos ejemplos:

    .row.justify-content-center
      .col-10
        .row.justify-content-center.align-items-center
          .col-md-2.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')
          .col-md-10.mb-3
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2
              span #[em Clases de objetivos]
            .tabla-a.color-primario.mb-5 
              table
                thead.text-white(style="background-color:#1B3F5E")
                  tr
                    th Objetivos empresariales
                    th Objetivos de mercadeo
                tbody
                  tr
                    td <li>Crecer en el mercado</li>
                       <li>Sobrevivir en el mercado</li>
                       <li>Generar utilidades</li>

                    td <li>Posicionar los productos o servicios</li>
                       <li>Aumentar participación en el mercado</li>
                       <li>Aumentar las ventas</li>
                       <li>Aumentar la recuperación de clientes</li>
    .row.justityf-content-center.mb-5
      .col-md-10
        p(data-aos="fade-left") La metodología #[i SMART] es la adecuada para la construcción de los objetivos del plan de mercadeo, ya que son formulados de manera entendible y aterrizados a la realidad del entorno, ver tabla.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3
      span #[em Metodología SMART]

    .tabla-a.color-primario.mb-5(data-aos="flip-up") 
      table
        thead.text-white(style="background-color:#1B3F5E")
          tr
            th S
            th M
            th A
            th R
            th T
        tbody
          tr.text-center
            td #[b Específico]
            td #[b Medible]
            td #[b Alcanzable]
            td #[b Realista]
            td #[b Tiempo]
          tr
            td El objetivo debe responder a estrategias de la empresa, cómo, dónde, quién, y debe iniciar con un verbo de acción.
            td Su lectura debe permitir verificar si el objetivo se cumplió o no, con cifras, porcentajes, ingresos.
            td Se debe plantear de manera que se pueda cumplir con los recursos disponibles de la organización.
            td Los retos grandes son buenos para las organizaciones, pero al momento de formular los objetivos se deben ajustar a la realidad de la organización.
            td Siempre debe ir acompañado el objetivo con el tiempo en el que se quiere cumplir el objetivo, si este factor es difícil de medir, si se cumplió el objetivo o no.
    .row
      .col 
        p(data-aos="fade-left") Ejemplo: aumentar las ventas (S) de la empresa Punta de anca en un 5 % (M) en la región del Tolima (A-R) para el tercer trimestre del año 2021 (T).
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2.	Estrategias, tácticas y plan de acción
    
    p(data-aos="fade-left") En #[i marketing] uno de los temas más importantes es cómo se va a competir en el mercado y para ello se debe diseñar estrategias rentables y sostenibles. El diseño de las estrategias debe ayudar al cumplimiento de los objetivos y, son vistas como el proceso de comunicación hacia los clientes para describir las virtudes y ventajas de los productos o servicios de la organización frente a su competencia.

    p(data-aos="fade-left") Las estrategias responden a la pregunta ¿cómo se va a lograr el cumplimiento del objetivo? y las tácticas ¿cómo se puede ejecutar las estrategias? Cada objetivo deberá tener mínimo una estrategia para poder cumplirlo y cada estrategia deberá tener 2 o más tácticas que permitan implementarlas en la organización, las tácticas son el soporte de los programas de marketing y básicamente son la menara de implementar la estrategia,  como se aprecia a continuación: 

    .row.justify-content-center.mb-5.mt-5(data-aos="flip-up")
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop')
            .tarjeta(style="background-color:#DBF9BD")
              .text.p-4
                h2.text-center Objetivo
                p Aumentar las ventas de la empresa la vaca lechera en un 5% en la región del Tolima para el tercer trimestre del año 2021.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/4.svg' alt='AvatarTop')
            .tarjeta(style="background-color:#DBF9BD")
              .text.p-4
                h2.text-center Estrategia
                p Implementar la  comunicación de la organización de manera creativa a través de las redes sociales.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/5.svg' alt='AvatarTop')
            .tarjeta(style="background-color:#DBF9BD")
              .text.p-4
                h2.text-center Táctica
                p Analizar el público objetivo en las redes sociales.
                p Crear contenido creativo y de alto valor para el público objetivo.
                .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
    
    .row.justify-content-center
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/6.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Luego de diseñar las estrategias y la táctica se debe construir el plan de acción y este básicamente debe responder a la manera cómo se deben ejecutar las tácticas, para ello se debe tener claro las actividades a corto plazo o las tácticas que permiten cumplir con la estrategia. El plan de acción detalla el paso a paso, los recursos, procesos y actividades de las tácticas, aquí se debe ser muy claro para evitar las fallas y errores en la ejecución.
            br
            br
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3.	Cronograma y presupuesto
    
    .row.justify-content-center.mb-5 
      p(data-aos="fade-left") En el momento en que se han definido las estrategias, las tácticas y el plan de acción se deben asignar tareas, responsables, plazos de cumplimiento y recursos asignados para la ejecución de cada una de las actividades; todas las actividades que se planearon ejecutar se deben presupuestar, este punto define la inversión necesaria para llevar a cabo el plan de #[i marketing]. El cronograma debe compartirse con todas las áreas de la organización para que cada colaborador conozca sus responsabilidades y tareas asignadas. 
      p(data-aos="fade-left") No existe una metodología, programa o software específico para el diseño del cronograma y del presupuesto, todo depende de la naturaleza y los recursos con los que cuente la organización, lo necesario es que sean claros, específicos y que se pueda hacer una lectura por parte de los miembros de la organización, como se aprecia en los siguientes modelos de cronograma, presupuesto y resumen del plan de #[i marketing]:

    .tarjeta.p-4.mb-5(style="background-color:#DBF9BD")
      h4.titulo-cuarto
      SlyderA(tipo="b")
        .row
          .col-md-12.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Tabla 4
              span #[em Cronograma]
        
          .col-md-12
            figure
              img(src='@/assets/curso/temas/tema2/7.svg', alt='Texto que describa la imagen')

        .row
          .col-md-12.mb-4.mb-md-0
            p El presupuesto asigna recursos a cada una de las actividades, de esta manera permite hacer un seguimiento mes a mes del recurso y porcentaje utilizado, así se pueden tomar decisiones de movilizar recursos o congelarlos para ciertas actividades que no estén funcionando.
            .titulo-sexto.color-acento-contenido
              h5 Tabla 5
              span #[em Presupuesto del marketing Punta de anca]
        
          .col-md-12
            .tabla-a.color-primerio.mb-5 
              table
                thead.text-white(style="background-color:#1B3F5E")
                  tr
                    <th colspan="9">Presupuesto del marketing Punta de anca</th> 
                tbody.text-center(style="background-color:#F6F6F6")
                  tr.text-bold.text-center
                    td Categorías
                    td Presupuesto Total
                    td Gastado hasta hoy
                    td Presupuesto restante
                    td % restante
                    td Mes 1
                    td Mes 2
                    td Mes 3
                    td Mes 4
                  tr
                    td.text-bold Relaciones públicas
                    td $ 100.000
                    td $ 20.000
                    td $ 80.000
                    td 80 %
                    td $ 500
                    td $ 10.500
                    td $ 0
                    td $ 9.000
                  tr
                    td.text-bold #[i Publicidad online]
                    td $ 80.000
                    td $ 0
                    td $ 80.000
                    td 100%
                    td $ 0
                    td $ 0
                    td $ 0
                    td $ 0
                  tr
                    td.text-bold Publicidad en radio
                    td $ 50.000
                    td $ 5.000
                    td $ 45.000
                    td 90 %
                    td $ 500
                    td $ 4.000
                    td $ 0
                    td $ 500
                  tr
                    td.text-bold Eventos publicitarios 
                    td $ 65.000
                    td $ 65.000
                    td $ 0
                    td $ 0
                    td $ 900
                    td $ 5.900
                    td $ 50.000
                    td $ 8.200
                  tr
                    td.text-bold Asistencias a eventos
                    td $ 90.000
                    td $ 0
                    td $ 90.000
                    td 100%
                    td $ 0
                    td $ 0
                    td $ 0
                    td $ 0

        .row
          .col-md-12.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Tabla 6
              span #[em Resumen del plan de marketing]
        
          .col-md-12
            figure.mb-4
              img(src='@/assets/curso/temas/tema2/8.svg', alt='Texto que describa la imagen')
            p Esta es la forma de presentar un plan de mercadeo a las diferentes áreas de la organización, si bien el plan es un documento escrito donde se debe evidenciar el alcance, marco teórico, referencias y demás, es un documento que solo debe ser revisado y estar bajo la custodia de la dirección, mientras que las demás áreas y colaboradores deberán conocer las metas de la organización y la mejor manera de hacerlo es esta.
                  

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4.	Evaluación y control en la empresa pecuaria

    p.mb-3(data-aos="fade-left") El plan de mercadeo debe tener un cronograma de actividades según lo establecen los pasos del marketing operativo, en el que se define tiempo de inicio, finalización y responsables, de esta manera el mismo plan se convierte en la hoja de ruta para hacer la evaluación, algunos autores reconocen este proceso como auditoría de marketing. En este proceso se lleva a cabo un monitoreo de las actividades propuestas, con el fin de identificar errores y realizar ajustes, el control da la respuesta si el plan está funcionando o se debe actuar de forma correctiva.
    p.mb-5(data-aos="fade-left") Teniendo en cuenta lo anterior, se hace necesario definir los mecanismos de control, los cuales se clasifican en 3 tipos de controles básicos y en un plan de contingencia:

    .row.justify-content-center 
      .col-md-5
        figure.mb-4
          img(src='@/assets/curso/temas/tema2/9.png', alt='Texto que describa la imagen')
      .col-md-7
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-secundario--borde.p-4(titulo="1")
            h4 Control preventivo
            p Se realiza antes del desarrollo de las actividades, anticipándose de alguna manera a futuros problemas.
          .tarjeta.color-secundario--borde.p-4(titulo="2")
            h4 Control de retroalimentación
            p Se realiza luego de finalizada la actividad, en este caso ya no se puede hacer ningún cambio, ni corregir los problemas presentados, pero abre la puerta para implementar un plan de mejora para el desarrollo de actividades futuras.
          .tarjeta.color-secundario--borde.p-4(titulo="3")
            h4 Plan de contingencia
            p Dentro de la evaluación y seguimiento como parte del control se sugiere diseñar también un plan de contingencia, también conocido como plan de emergencia. El diseño de este plan permitirá reaccionar de forma inmediata ante imprevistos que se presenten en la ejecución del plan de mercado y que pueden afectar en gran medida a la empresa de manera negativa.
          .tarjeta.color-secundario--borde.p-4(titulo="4")
            h4 Control concurrente
            p Se realiza en el momento que se está desarrollando la actividad, permite corregir los errores de forma inmediata antes de que tengan un impacto negativo.
    
    p.mb-5(data-aos="fade-left") Para complementar el tema sobre evaluación y control en la empresa, se invita a ver el siguiente vídeo:

    figure(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LpQhFuXyVVo?si=qJjB3p_tEyyAbLXR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-tercero.color-acento-contenido.mt-5
      h3 2.4.1.	Indicadores de gestión

    p.mb-5(data-aos="fade-left") La manera en la que se debe evaluar y medir si la empresa está cumpliendo las metas y objetivos propuestos es a través de los KPI (indicadores de gestión o indicador de desempeño). Los KPI se convierten en los instrumentos de evaluación que darán paso a la toma de decisiones correctas respecto a la implementación de las estrategias de los indicadores de gestión, como se aprecia e la siguiente información:

    .row.justify-content-center 
      .tarjeta.p-4.mb-3(style="background-color:#DBF9BD")
        SlyderB.mb-5(:datos="datosSlyder")

    p.mb-5(data-aos="fade-left") Por ejemplo, algunos indicadores que se pueden medir en la empresa la vaca lechera son los siguientes:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 7
      span #[em Ejemplo KPI (indicadores de gestión o indicador de desempeño)]

    .col-md-12
      .tabla-a.color-primario.mb-5 
        table
          caption Nota. Tomado de “Propuesta plan de mercadeo para una empresa agroavicola” https://repository.usc.edu.co/bitstream/handle/20.500.12421/3401/PROPUESTA%20DE%20PLAN%20DE%20MERCADEO%20.pdf?sequence=1&isAllowed=y
          thead.text-white(style="background-color:#1B3F5E")
            tr
              <th>Indicador</th> 
              <th>Descripción</th> 
              <th>Ecuación</th> 
              <th>Grado de cumplimiento del objetivo</th> 
          tbody.text-center(style="background-color:#F6F6F6")
            tr
              td Asistencia a eventos agrícolas.
              td Conocer el porcentaje de la población del sector que pertenece a la base de datos de los clientes.
              td Número de clientes potenciales que asistieron al evento / total, personas asistentes al evento.
              td 30 % de cumplimiento esperado.
            tr
              td Cobertura del mercado.
              td Conocer cuál es el incremento porcentual de clientes nuevos en las zonas del Tolima y Huila, partiendo del censo de distribuidoras agropecuarias de cada zona, evidenciando la gestión del equipo comercial.
              td Número de clientes vinculados al mes por cada zona / Número de clientes censados por cada zona.
              td 50 % de cobertura al final del año.
              
    p.mb-5(data-aos="fade-left") Para complementar el tema sobre evaluación y control en la empresa, se invita a ver el siguiente vídeo:

    figure(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nCUYv5oPwJY?si=ipzHOe2hySPiPZ0v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-tercero.color-acento-contenido.mt-5
      h3 2.4.2.	Informe de resultados.

    p.mb-5(data-aos="fade-left") El informe de resultados del plan de mercadeo se traduce en un informe ejecutivo donde se hace una relación del cumplimiento de las tareas, a parir del cronograma de actividades, fecha de inicio y finalización; se evalúa el cumplimiento de los resultados obtenidos durante el año de desarrollo del plan.

    .row.justify-content-center
      .col-10
        .cajon.p-4.mb-3(style="background-color:#DBF9BD")
          .row.justify-content-center
            .col-md-4
              figure.mb-4
                img(src='@/assets/curso/temas/tema2/15.jpg', alt='Texto que describa la imagen')
            .col-md-8
              p De esta manera, debe haber una relación de cada una de las estrategias y el porcentaje de cumplimiento o los logros y objetivos alcanzados, contrarrestando en cada una de estas lo planeado versus lo cumplido. Asimismo, se debe relacionar las ventas al finalizar el tiempo de implementación del plan de mercadeo que normalmente es anual, esto debido a que el plan proyectado va dirigido a impactar directamente los ingresos de la empresa a partir de las estrategias, se debe realizar el análisis de los impactos generados tanto positivos como negativos, incluso de las modificaciones que se tuvieron durante la puesta en marcha.



      
            
            

      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Los KPI (Indicadores de gestión o indicador de desempeño)',
        texto:
          'Los de <i>marketing</i> son necesarios para la empresa, ya que permiten conocer si las estrategias diseñadas en el plan de mercado son las correctas, la adquisición de nuevos clientes y la interacción con los futuros clientes, estos indicadores están divididos en 4 categorías.',
        imagen: require('@/assets/curso/temas/tema2/10.jpg'),
      },
      {
        titulo: 'Indicadores por campaña',
        texto:
          'Estos indicadores miden el comportamiento del público objetivo respecto a la campaña diseñada por la empresa, por ejemplo, costo por lead o prospecto, el lead es un cliente potencial del cual se ha obtenido el contacto.',
        imagen: require('@/assets/curso/temas/tema2/11.jpg'),
      },
      {
        titulo: 'Indicadores de producto',
        texto:
          'Este indicador muestra la aceptación de un producto o servicio de la empresa respecto a la competencia, el indicador más utilizado es el porcentaje de participación del producto en el mercado.',
        imagen: require('@/assets/curso/temas/tema2/12.jpg'),
      },
      {
        titulo: 'Indicadores de <i>marketing</i> digital',
        texto:
          'La tendencia actual es realizar inversión en estrategias de marketing digital, con el fin de tener presencia en la web y poder atraer nuevos clientes por este canal de comunicación. Entre los indicadores más utilizados de esta categoría se encuentran: porcentaje de clientes influenciados por el <i>marketing</i> y el  alcance de las redes sociales.',
        text: '',
        imagen: require('@/assets/curso/temas/tema2/13.jpg'),
      },
      {
        titulo: 'Indicadores generales',
        texto:
          'Estos indicadores se centran en medir la relación que existe entre el esfuerzo de la empresa y la inversión respecto a la adquisición de clientes, por ejemplo, costo de adquisición de un nuevo cliente e índice de satisfacción de los clientes con la marca.',
        imagen: require('@/assets/curso/temas/tema2/14.jpg'),
      },
    ],
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
