<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de mercadeo
    .row.justify-content-center.align-items-center 
      .col-md-5
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/1.jpg', alt='Texto que describa la imagen')
            
      .col-md-7
        p(data-aos="fade-left") Se resume en un documento escrito en el que se recoge la información del estudio de mercado diseñado por la empresa, así como los objetivos, la planeación, el presupuesto y las estrategias, que se deben diseñar por la organización como ruta para alcanzar las metas establecidas, lograr el posicionamiento y reconocimiento en el mercado.
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Las 4 P del marketing que debes conocer
                  p.text-small Para profundizar el diseño del plan de mercadeo se sugiere revisar el siguiente video denominado:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="link_1_1" target="_blank")
                    span.text-small(data-aos="fade-left") Link 
                    i.fas.fa-link


    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1.	Elementos del plan de mercadeo

    p(data-aos="fade-left") Un plan de mercadeo debe establecer las metas desde el inicio de operaciones, deben ser de fácil lectura e interpretación y  estar pensado para funcionar en periodos anuales, ya que permite evaluar y medir de forma precisa el impacto en la organización, de esta manera cada nuevo año debe tener un nuevo plan de mercadeo, la medición se centra en las actividades desarrolladas, la satisfacción del cliente y la planeación de actividades para responder a las necesidades actuales del mercado y la comunicación con clientes, consumidores y clientes futuros. Estos elementos son:

    .titulo-sexto.color-acento-contenido.offset-1.mt-5.offset-2
      h5 Figura 1
      span #[i Importancia y objetivos del plan de mercadeo]

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-8.desktop
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/3.svg', alt='Importancia:Conoce a fondo el sector económico y define la participación deseada en el mercado. Permite definir las estrategias de comunicación acertadas para llegar a los clientes. Define el presupuesto con antelación para asignar a las actividades.Permite realizar evaluaciones periódicas y hacer ajustes en su implementación. Objetivos: Definir objetivos para la organización a corto y mediano plazo. Definir fecha de cumplimiento de cada objetivo. Los objetivos del plan deben formularse bajo la metodología SMART: específicos, medibles, alcanzables, tiempo definido.Texto que describa la imagen')

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-8.movil
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/4.svg', alt='Importancia:Conoce a fondo el sector económico y define la participación deseada en el mercado. Permite definir las estrategias de comunicación acertadas para llegar a los clientes. Define el presupuesto con antelación para asignar a las actividades.Permite realizar evaluaciones periódicas y hacer ajustes en su implementación. Objetivos: Definir objetivos para la organización a corto y mediano plazo. Definir fecha de cumplimiento de cada objetivo. Los objetivos del plan deben formularse bajo la metodología SMART: específicos, medibles, alcanzables, tiempo definido.Texto que describa la imagen')

    .row.justify-content-center.mb-5.mt-5(data-aos="flip-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/5.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#DBF9BD")
            .text.p-4
              h2.text-center Análisis
              p Se debe analizar todo el contexto que rodea la organización tanto externa como internamente, de esta manera se pueden crear estrategias acertadas que respondan a cada una de las necesidades y oportunidades del mercado, además realizar este análisis permitirá a la dirección la toma de decisiones adecuadas.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#DBF9BD")
            .text.p-4
              h2.text-center Meta o fin
              p El fin del plan de mercadeo se traza a partir de los objetivos, ya que son los que definen el fin o la meta a la que se desea llegar, por ello este elemento es uno de los más importantes, pues es  el que define el camino a recorrer para llegar a donde se desea, los objetivos son superiores a las estrategias, primero se decide a dónde se quiere llegar y después el cómo se va a llegar, estos deben ser claros, medibles y tener un horizonte en el tiempo.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/7.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#DBF9BD")
            .text.p-4
              h2.text-center Segmentación
              p Es demasiado importante saber específicamente a quién va dirigido los productos o servicios de la organización, entre más se delimite el público al que se debe llegar, mayor efectividad tendrán las estrategias diseñadas.


    .row.justify-content-center.mb-5.mt-5(data-aos="flip-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/8.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#DBF9BD")
            .text.p-4
              br
              h2.text-center Estrategias
              p Son la forma de alcanzar los objetivos propuestos por la organización, previo a estas se debe definir el mercado y a partir de allí, se formulan las estrategias para llegar al público objetivo.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/9.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#DBF9BD")
            .text.p-4
              br
              h2.text-center Presupuesto
              p Para lograr las metas de la organización se deben asignar diferentes recursos entre humanos y financieros, siendo estos últimos de vital importancia, ya que el saber con cuánto se cuenta facilita la planeación de actividades y la puesta en marcha de las estrategias.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/10.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#DBF9BD")
            .text.p-4
              h2.text-center Control y evaluación
              p Este elemento se hace necesario para comprobar si se han logrado las metas establecidas a partir de las estrategias diseñadas, esta evaluación se puede hacer el cualquier momento de la puesta en marcha del plan de mercadeo, de esta manera se pueden tomar acciones correctivas en caso de que se presenten irregularidades, esto hace que el seguimiento se haga efectivo y el plan se cumpla según lo planeado.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2.	Áreas del plan de mercadeo

    p(data-aos="fade-left") Para que el plan de mercadeo pueda desarrollarse correctamente se debe considerar la siguiente estructura, la cual está dividida en 3 grandes áreas, de esta manera será más fácil el cumplimiento de los objetivos:

    .row.justify-content-center
      .col-lg-10(data-aos="flip-up")
        .cajon.p-4.mb-4.color-primario
          li 
            i.fas.fa-check
            |  #[b Marketing analítico]:  se debe hacer la investigación y análisis de información de la empresa, el mercado y la competencia.
      .col-lg-10
        p(data-aos="fade-left") Este primer paso del estudio de mercado es el más importante, ya que entrega información clara y objetiva de la situación actual de la empresa en el mercado respecto a la competencia y a la situación socioeconómica, ver figura.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 2
      span #[i Marketing analítico]

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-10.desktop
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/11.svg', alt='Marketing analítico: Análisis interno: Se debe analizar todas las variables que influyen en el desarrollo de la actividad comercial internamente como: Planeación estratégica Capacidad financiera Recursos económicos. Análisis externo: Se debe analizar todas las variables que influyen en el desarrollo de la actividad comercial que están presentes en el entorno Socioeconómico y legal Análisis de los consumidores Análisis de la competencia. Estudio de mercado: Se debe hacer un estudio minucioso respecto a la necesidad que tienen los clientes (mercado objetivo) del producto o servicio. Atributos del producto o servicio. Análisis de definición de precio Estudio y definición del proceso de mercado Canal de distribución Análisis FODA: Con los puntos analizados anteriormente se da paso a realizar la matriz FODA, que abarca todos los aspectos necesarios para el diseño de las estrategias. ANÁLISIS FODA Positivos Fortalezas Oportunidades. Origen interno. Negativo Debilidades Amenazas. Origen externo')

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-10.movil
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/12.svg', alt='Marketing analítico: Análisis interno: Se debe analizar todas las variables que influyen en el desarrollo de la actividad comercial internamente como: Planeación estratégica Capacidad financiera Recursos económicos. Análisis externo: Se debe analizar todas las variables que influyen en el desarrollo de la actividad comercial que están presentes en el entorno Socioeconómico y legal Análisis de los consumidores Análisis de la competencia. Estudio de mercado: Se debe hacer un estudio minucioso respecto a la necesidad que tienen los clientes (mercado objetivo) del producto o servicio. Atributos del producto o servicio. Análisis de definición de precio Estudio y definición del proceso de mercado Canal de distribución Análisis FODA: Con los puntos analizados anteriormente se da paso a realizar la matriz FODA, que abarca todos los aspectos necesarios para el diseño de las estrategias. ANÁLISIS FODA Positivos Fortalezas Oportunidades. Origen interno. Negativo Debilidades Amenazas. Origen externo')

    .row.justify-content-center
      .col-lg-10(data-aos="flip-up")
        .cajon.p-4.mb-4.color-primario
          li 
            i.fas.fa-check
            |  #[b #[i Marketing] estratégico]:  para desarrollar este paso del estudio de mercado se debe tener en cuenta que no será siempre lo mismo para todas las empresas, poder plasmar las estrategias depende de la naturaleza de las empresas y del objetivo que se quiera alcanzar, ver figura.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 3
      span #[i #[i Marketing] estratégico]

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-10.desktop
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/13.svg', alt='Marketing estratégico: Estrategia de marketing: Definir. Objetivos Ventas competitivas Segmentación del plan de marketing: Define. Perfil del cliente para Centrar acciones y estrategias que se traduzcan en la decisión de compra final. Posicionamiento: Identifica ¿Cuál es la participación del mercado actual? Define: A dónde desea llegar y cuál es el mercado que se desea abarcar.')

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-10.movil
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/14.svg', alt='Marketing estratégico: Estrategia de marketing: Definir. Objetivos Ventas competitivas Segmentación del plan de marketing: Define. Perfil del cliente para Centrar acciones y estrategias que se traduzcan en la decisión de compra final. Posicionamiento: Identifica ¿Cuál es la participación del mercado actual? Define: A dónde desea llegar y cuál es el mercado que se desea abarcar.')


    .row.justify-content-center
      .col-lg-10(data-aos="flip-up")
        .cajon.p-4.mb-4.color-primario
          li 
            i.fas.fa-check
            |  #[b #[i Marketing] operativo]: en este punto se desarrolla el grueso del plan, aquí se debe concentrar el diseño, la implementación y el costo de las estrategias para lograr lo que se planteó al inicio del plan, se identifican las necesidades de los recursos y se determina si debe existir financiación externa, ver figura.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 4
      span #[i #[i Marketing] operativo]

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-10.desktop
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/15.svg', alt='Marketing operativo: Se definen las estrategias de mercadeo: el diseño, el presupuesto y la manera de comunicarlo, puede ser a través del marketing tradicional o del marketing digital. Paso 3: presupuesto, permite conocer la viabilidad para la implementación del plan según los recursos asignados. Se define el presupuesto, se identifican las necesidades de financiación, se asigna el talento humano y se identifica la tercerización de las actividades. Paso 4: puesta en marcha, organizar las actividades propuestas. Se define el cronograma de actividades a desarrollar con fechas de inicio y finalización. Se evalúa la puesta en marcha en diferentes momentos para la toma de decisiones.')

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-10.movil
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/16.svg', alt='Marketing operativo: Se definen las estrategias de mercadeo: el diseño, el presupuesto y la manera de comunicarlo, puede ser a través del marketing tradicional o del marketing digital. Paso 3: presupuesto, permite conocer la viabilidad para la implementación del plan según los recursos asignados. Se define el presupuesto, se identifican las necesidades de financiación, se asigna el talento humano y se identifica la tercerización de las actividades. Paso 4: puesta en marcha, organizar las actividades propuestas. Se define el cronograma de actividades a desarrollar con fechas de inicio y finalización. Se evalúa la puesta en marcha en diferentes momentos para la toma de decisiones.')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3.	Variables del estudio de mercadeo

    .row.justify-content-center.align-items-center 
      .col-md-8.mb-3
        p(data-aos="fade-left") El estudio de mercadeo dará como resultado un plan de mercadeo o marketing, el cual está enfocado en cumplir los objetivos de una organización relacionados con la participación en el mercado y diseñar estrategias para poder captar la atención de los clientes, los consumidores finales y los futuros clientes.
        .cajon.p-4.mb-3.color-primario
          p(data-aos="fade-left") Es importante conocer al consumidor al que se quiere llegar, identificar las características, atributos y cualidades que debe tener el cliente de cada empresa para formular un buen plan de mercadeo, de lo contrario servirá muy poco el trabajo adelantado desde la investigación, la obtención de la información y la formulación de estrategias.
        p(data-aos="fade-left") Las variables que se deben identificar son las siguientes:
      .col-md-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/17.png', alt='')

    .titulo-tercero.color-acento-contenido
      h3 1.3.1.	Perfil del cliente

    .row.justify-content-center.mb-5.mt-5(data-aos="flip-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/18.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#DBF9BD")
            .text.p-4
              h2.text-center Perfilar el consumidor
              p Para elaborar el perfil del cliente se deben tener en cuenta las necesidades del consumidor y las variables del mercado al cual se está ingresando.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/19.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#DBF9BD")
            .text.p-4
              h2.text-center Diseñar estrategias
              p El perfil se elabora con el fin de diseñar las estrategias correctas para lograr la aceptación de los clientes.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/20.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#DBF9BD")
            .text.p-4
              h2.text-center Segmentar el mercado
              p Finalmente se debe realizar una investigación de mercados que permita segmentarlo.
    
    p.mb-5(data-aos="fade-left") Perfilar a los clientes o consumidores permite entender y conocer el mercado objetivo más a fondo, de esta manera se puede responder a necesidades específicas y alcanzar expectativas con productos o servicios que realmente sean consumidos y que enfoquen las estrategias para incentivar la decisión de compra y finalmente, todo se vea reflejado en las utilidades de la organización.

    .titulo-tercero.color-acento-contenido
      h3 1.3.2.	Comportamiento del consumidor

    .row.justify-content-center.align-items-center 
      .col-md-8.mb-3
        p(data-aos="fade-left") La toma de decisión de compra del cliente o consumidor viene influenciada por un deseo, un impulso o una necesidad, siendo esta última la más común al momento de influir en la decisión final.
        p(data-aos="fade-left") #[b El mercadeo se encarga de investigar las motivaciones y necesidades de los clientes para traducir los deseos de los clientes y poder identificar qué es exactamente lo que buscan.]
        p(data-aos="fade-left") Teniendo en cuenta lo anterior, no se puede seguir adelante sin hacer referencia a la pirámide de las necesidades de Abraham Maslow quien, desde su primera aparición en 1943, se esforzó por hacer entender que las necesidades del ser humano están jerarquizadas en distintos niveles, en los cuales se va avanzando a medida que se suple el nivel anterior. De esta manera, los sectores económicos centran sus esfuerzos en las personas que logran cubrir las necesidades sociales, ya que son aquellos que por poder adquisitivo podrán tomar una decisión de compra o no, ver figura.
      .col-md-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/21.svg', alt='')

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 5
      span #[i Pirámide de las necesidades de Maslow]

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-12.desktop
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/22.svg', alt='Autorrealización. Objetivos personales, moral. Estima. Éxito, reconocimiento, respeto, confianza. Sociales. Amistad, afecto, intimidad. Seguridad. Seguridad física, de empleo, de recursos, moral, familiar y de salud. Fisiológicas. Respirar, alimentación, descanso, sexo, homeóstasis.')
          figcaption Nota. Tomado de https://economipedia.com/definiciones/piramide-de-maslow.html

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-12.movil
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/23.svg', alt='Autorrealización. Objetivos personales, moral. Estima. Éxito, reconocimiento, respeto, confianza. Sociales. Amistad, afecto, intimidad. Seguridad. Seguridad física, de empleo, de recursos, moral, familiar y de salud. Fisiológicas. Respirar, alimentación, descanso, sexo, homeóstasis.')
          figcaption Nota. Tomado de https://economipedia.com/definiciones/piramide-de-maslow.html

    .row.justify-content-center.mb-5
      .col-md-10 
        .cajon.p-4.mb-3.color-primario 
          p(data-aos="fade-left") El comportamiento del consumidor se da a partir de la carencia que pueda tener, esta se debe convertir en necesidad, allí gracias a las estrategias de mercadeo se genera una motivación y dependiendo de ella se genera una aceptación que termina en el proceso de compra.

    p.mb-5(data-aos="fade-left") Finalmente, las variables que influencian la decisión del consumidor son vistas desde un punto de vista psicológico que ayuda al mercadeo a generar estrategias para que se concrete el proceso de compra, por eso la referencia anterior de la pirámide de #[i Maslow]; sin embargo, estas no son las únicas variables que influyen, existen otras influencias que intervienen en el proceso, que son:

    .titulo-sexto.color-acento-contenido.mt-5.offset-2
      h5 Figura 6
      span #[i Variables influyentes en la decisión del consumidor]

    .row.justify-content-center(data-aos="flip-up") 
      .col-md-10.desktop
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/24.svg', alt='El  entorno. Influenciadas por las tradiciones familiares, los gustos de los grupos sociales (amigos, trabajo, estudio) que frecuenta, la cultura a la cual pertenece y los líderes de opinión que siga según sus gustos. Preferencias individuales. La forma como ha crecido cada ser humano influye en las decisiones que toma a lo largo de la vida, por ello para el mercadeo no debe ser ajeno conocer a su cliente o consumidor desde aspectos como la personalidad, las creencias, los valores y su estilo de vida.')
          
    .row.justify-content-center(data-aos="flip-up") 
      .col-md-10.movil
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/25.svg', alt='El  entorno. Influenciadas por las tradiciones familiares, los gustos de los grupos sociales (amigos, trabajo, estudio) que frecuenta, la cultura a la cual pertenece y los líderes de opinión que siga según sus gustos. Preferencias individuales. La forma como ha crecido cada ser humano influye en las decisiones que toma a lo largo de la vida, por ello para el mercadeo no debe ser ajeno conocer a su cliente o consumidor desde aspectos como la personalidad, las creencias, los valores y su estilo de vida.')

    .titulo-tercero.color-acento-contenido
      h3 1.3.3.	Segmentación del mercado.

    p.mb-3(data-aos="fade-left") Es la división del mercado en grupos homogéneos respecto a algunos criterios como la edad, el género, los gustos, la ubicación geográfica, entre otros, con el fin de implementar posteriormente una investigación de mercado para conocer sus preferencias y gustos a la hora de tomar la decisión de compra, para finalizar con el diseño de un plan de mercadeo.
    p.mb-3(data-aos="fade-left") Aplicar la investigación al segmento de mercado definido por la empresa, permite que las estrategias que se planeen desarrollar puedan satisfacer las necesidades de los clientes y del consumidor final. Ahora bien, se debe tener en cuenta que en la actualidad los clientes no satisfacen sus necesidades únicamente con los atributos del producto o calidad del servicio, sino que buscan vivir una experiencia, encontrar valor agregado e identificar los beneficios y ventajas que ofrecen las empresas del sector. En palabras de Kotler y otros (2006):
    p.mb-5(data-aos="fade-left") La puesta en práctica de la #[b segmentación del mercado] supone el desarrollo de un proceso que consta de 3 fases fundamentales:

    .tarjeta--container.row.mb-5(data-aos="flip-up").mb-5
      .col-md.tarjeta.p-5(style="background-color:#E6E9E3") 
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/26.svg', alt='Texto que describa la imagen')
          
        h2.text-center Segmentación del mercado propiamente dicha
        p Etapa en la que se identifican criterios y variables que permiten dividir el mercado en grupos o segmentos de consumidores y definir el perfil de cada uno de estos grupos.

      .col-md.tarjeta.p-5.color-secundario
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/27.svg', alt='Texto que describa la imagen')
          
        h2.text-center Definición del público objetivo
        p  Posterior a la segmentación, realiza una valoración de cada segmento, selecciona el segmento al cual se va a dirigir y decide la estrategia para este.

      .col-md.tarjeta.color-secundario.p-5(style="background-color:#DEE4F0") 
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/28.svg', alt='Texto que describa la imagen')
          
        h2.text-center Posicionamiento del producto en el mercado
        p Finalmente la empresa decide cuál es el posicionamiento adecuado para el producto del mercado objetivo elegido y diseña el plan de mercadeo con el que lo comercializará.

    P.mb-5(data-aos="fade-left") Para complementar el tema sobre variables del estudio del mercadeo, se invita a ver el siguiente vídeo:

    figure(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jjt4rYt9A4M?si=ETRTyy1x43E9AXV2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4.	Entorno organizacional

    p.mb-5(data-aos="fade-left") #[b Comprende todos los factores y variables que influyen de manera positiva y negativa en las decisiones tomadas por la organización], estas variables pueden ser del entorno interno o externo, de esta manera se entiende que toda decisión de mercado viene soportada en el análisis de información y de estudios previos desarrollados por la organización. Para dar inicio al análisis del entorno organizacional se hace necesario conocer el sector económico al cual se va a ingresar, su comportamiento y tendencias, con el fin de establecer metas que sean alcanzables en el corto y mediano plazo.

    .row.justify-content-center.align-items-center.mb-5 
      .col-md-2.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/29.svg', alt='Texto que describa la imagen')
      .col-md-10
        .titulo-tercero.color-acento-contenido
          h3 1.4.1.	Diagnóstico interno
        p Consiste en analizar cada una de las áreas que conforman la empresa tales como: mercadeo, producción, finanzas, talento humano, entre otras, de manera que identifiquen las fortalezas y debilidades. Para realizar el análisis interno se recomienda construir matrices que le permitan identificar, analizar y evaluar los factores internos de la empresa, una de las matrices más utilizada es la Matriz de Factores Internos (MEFI), como se puede apreciar en la información que se muestra a continuación:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 1
      span #[em Matriz MEFI]

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10
        .tabla-a.mb-5(data-aos="flip-up") 
          table.text-center
            thead.text-white(style="background-color:#1B3F5E")
              tr
                th Área a evaluar
                th Importancia
                th Factor interno
                th Ponderación
                th Evaluación
                th Total
            tbody
              tr
                <td rowspan="3">Mercadeo</td> 
                <td rowspan="3">40 %</td> 
                td Distribución
                td 20 %
                td 4
                td 0,8
              tr
                td Marca
                td 10 %
                td 3
                td 0,3
              tr
                td Comunicación
                td 10 %
                td 2
                td 0,2
    .row.justify-content-center
      .col 
        .tarjeta.p-4.mb-3(style="background-color:#F9FEF5")(data-aos="flip-up")
          <li>#[b  Área a evaluar]: aquí debe colocar el área que se va evaluar: mercadeo, producción, talento humano y finanzas.</li>
          br
          <li>#[b  Importancia] en este ítem se debe asignar en porcentajes la importancia de cada una de las áreas, de manera que sumen un 100 %.</li>
          br
          p Ejemplo: para le empresa Punta de anca que está compuesta por 3 áreas, producción, mercadeo y finanzas. La empresa considera la importancia de las áreas de la siguiente manera: mercadeo 40 %, finanzas 35 % y producción 25 %.
          br
          .row.justify-content-center.align-items-center 
            .col-md-8.mb-3
              <li>#[b Ponderación y factor interno]: para entender este ítem, primero se debe llenar el factor interno, es decir, si está en el área de mercadeo se debe indicar las variables que se va a evaluar para este caso se tiene en cuenta la marca, distribución y comunicación, cuando estén listos los factores internos se procede a ponderar, en esta es colocar el peso o la relevancia de las variables teniendo en cuenta el porcentaje que colocamos en el área, es importante recordar que el peso es una decisión muy íntima de cada organización, no necesariamente se van a encontrar los mimos valores en todas las empresas así sean del mismo sector. </li>
              br
              p Ejemplo: la empresa punta de anca desea hacer un análisis interno y escogió el área de mercadeo para iniciar, se asignó el 40 % y se definieron tres variables a ponderar: marca, distribución y comunicación y se ponderaron de la siguiente manera: marca 10 %, distribución 20 % y comunicación 10 % para un total del 40 %.
              <li>#[b Evaluación]:se debe calificar de uno 1 a 4, donde 1 es debilidad mayor, 2 debilidad menor, 3 fortaleza menor y 4 fortaleza mayor. </li>
              br
              <li>#[b Total]: se debe realizar multiplicando la ponderación y la evaluación, de esta manera se puede identificar cuál es el factor interno de cada área más débil o más fuerte, todo depende del ejercicio que desee realizar la empresa.</li>
              br
              p Ejemplo analizado: permite evidenciar que la comunicación es el factor más débil del área del mercadeo de la empresa Punta de anca, lo que hace tomar decisiones de inmediato, ya que la comunicación debe ser uno de los factores fuertes del área.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/30.svg', alt='Texto que describa la imagen')

      .titulo-tercero.color-acento-contenido
        h3 1.4.2.	Análisis del sector
      p(data-aos="fade-left").mb-5 Para dar inicio a cualquier actividad económica las organizaciones deben realizar una investigación informativa, es decir, deben saber algunos datos base que les permitirá funcionar de la mejor manera y sortear aquellos momentos de crisis, por ello antes de iniciar operaciones es necesario tener claro cuáles son las características del sector económico al que se va a ingresar, cómo funciona, cuántos actores hay, quién lidera el mercado, qué restricciones existen y en fin todas las inquietudes que surjan previas al inicio; entre más información se pueda obtener con datos de calidad y fuentes de información confiables, mayor veracidad tendrá el análisis del sector y esto permitirá un éxito mayor de las estrategias diseñadas por la organización.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/31.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para realizar un análisis del sector pecuario apropiado es importante tener en cuenta la información real del sector y su comportamiento, puesto que este es un sector sensible a los cambios constantes del mercado, lo impactan variables como la investigación, la tecnología agropecuaria y su adaptación a los diferentes entornos, la tasa de cambio, la capacitación constante del talento humano, los riesgos sanitarios y enfermedades que afecten a las especies con las que se desarrolla la actividad económica.
          br
          br
          | 
    p.mb-5(data-aos="fade-left") El análisis del sector en un estudio de mercado debe hacerse desde dos perspectivas que son el macroentorno y microentorno.

    .row.justify-content-center
      .col-md-10
        .cajon.p-4.mb-3.color-secundario 
          h4 ✔	Análisis del macroentorno
          p Las variables que integran el macroentorno no tienen ninguna relación con la actividad económica de las empresas; pero son aquellas que las afectan de forma directa sin importar el sector económico, de esta manera el macroentorno se puede dividir en varios entornos diferenciados, estos son:

    .row 
      TabsB.color-acento-contenido.mb-5(data-aos="flip-up")
        .py-4.py-md-5(titulo="Entorno demográfico" :icono="require('@/assets/curso/temas/tema1/32.svg')")
          .row
            .col-md-12.mb-4.mb-md-0
              p Se debe analizar todo lo relacionado con el país o la región donde se desarrolla la actividad económica y se tienen en cuenta para la segmentación del producto o el servicio: edad, sexo, densidad y población total.

        .py-4.py-md-5(titulo="Entorno geográfico" :icono="require('@/assets/curso/temas/tema1/33.svg')")
          .row
            .col-md-12.mb-4.mb-md-0
              p Se debe hacer un análisis de los recursos disponibles en el país o región, como por ejemplo, recursos naturales, acceso a servicios, calidad de las vías.

        .py-4.py-md-5(titulo="Entorno económico" :icono="require('@/assets/curso/temas/tema1/34.svg')")
          .row
            .col-md-12.mb-4.mb-md-0
              p Se debe revisar la legislación vigente, normas aplicables, resoluciones y todos los requisitos necesarios para el funcionamiento de la empresa.

        .py-4.py-md-5(titulo="Entorno legal y político" :icono="require('@/assets/curso/temas/tema1/35.svg')")
          .row
            .col-md-12.mb-4.mb-md-0
              p Se debe analizar los indicadores más importantes y relevantes del país como la inflación, el PIB (Producto interno bruto) PIB Per cápita (por habitante).

        .py-4.py-md-5(titulo="Entorno tecnológico" :icono="require('@/assets/curso/temas/tema1/36.svg')")
          .row
            .col-md-12.mb-4.mb-md-0
              p Se debe estudiar y revisar el acceso a la tecnología, conectividad en las diferentes regiones y posibilidades de innovación.

        .py-4.py-md-5(titulo="Entorno cultural" :icono="require('@/assets/curso/temas/tema1/37.svg')")
          .row
            .col-md-12.mb-4.mb-md-0
              p El estudio de este entorno debe estar basado en todos los aspectos relacionados, propios del consumidor o de la región a la cual se pretende llegar especialmente la religión, ética y tradiciones propias.

        .py-4.py-md-5(titulo="Entorno Medioambiental" :icono="require('@/assets/curso/temas/tema1/38.svg')")
          .row
            .col-md-12.mb-4.mb-md-0
              p Se deben estudiar los aspectos relacionados con la legislación ambiental, manejo de residuos, procesos ambientales y todos los componentes del medio natural donde está ubicada la empresa.
      
      .row.justify-content-center
        .col-md-10
          .cajon.p-4.mb-3.color-primario 
            h4 ✔	Análisis del microentorno
            p Cuando se habla del microentorno no se hace referencia a variables sino a actores que se involucran en el proceso, que, aunque no dependen de la empresa sí tienen relación directa e impactan positiva o negativamente su funcionamiento y pueden ser influenciados por el actuar de las organizaciones. Estos actores son:

      .row.justify-content-center.mb-5.mt-5(data-aos="flip-up")
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/39.svg' alt='AvatarTop')
            .tarjeta(style="background-color:#DBF9BD")
              .text.p-4
                h2.text-center Los clientes
                p Son los actores más importantes del entorno, son quienes finalmente tienen la decisión de compra, por eso los estudios que se hagan siempre deben esta enfocados en ellos, es importante desde el inicio tener muy claro quiénes serán los clientes de la organización, ya que es diferente dirigirse a personas, hogares o empresas y así mismo, deberán diseñarse las estrategias para llegar a ellos.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/40.svg' alt='AvatarTop')
            .tarjeta(style="background-color:#DBF9BD")
              .text.p-4
                h2.text-center La competencia
                p Uno de los actores con mayor relevancia del microentorno es la competencia, pues es la referencia de los clientes y con quienes se comparte la participación en el mercado, esto hace que se deba estudiar con cuidado para poder contrarrestarla, se debe identificar los competidores directos e indirectos y estudiar cuidadosamente el ingreso de una nueva organización en el mercado.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/41.svg' alt='AvatarTop')
            .tarjeta(style="background-color:#DBF9BD")
              .text.p-4
                h2.text-center Los proveedores
                p Se debe estudiar la calidad y cantidad de proveedores disponibles en el mercado, se deben escoger aquellos que respondan a las necesidades de la empresa, teniendo en cuenta la política de pagos, tiempos de entrega y calidad de productos.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/42.svg' alt='AvatarTop')
            .tarjeta(style="background-color:#DBF9BD")
              .text.p-4
                h2.text-center Canales de distribución
                p Debe ser estudiado desde la importancia de reconocer cuál es el canal acertado para llegar al consumidor final, teniendo en cuenta costos y tiempo de entrega, no todos los canales son apropiados para poder llegar al consumidor, depende de la naturaleza de la organización y a quién se quiere llegar.
          

              
            
              
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    link_1_1: 'https://www.youtube.com/embed/6mCapY1j6jY?si=q0vZHkfi4kWk7E26',
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
