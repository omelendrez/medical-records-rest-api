'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('consultations', [{
      petID: 1,
      date: '2020-01-15',
      diagnosis: 'Puñalada en la espalda',
      treatment: 'Hace dos días se cayó de cabeza y creen q desde entonces no ve, además no come ni toma agua, ayer orinó en las piedritas y defecó muy duro (siempre tiene probl de constipación). Vive adentro. Globos oculares parecen aumentados de tamaño, pupilas midriáticas q responden algo a la luz, T 38,6, FC 220 pero está muy asustada, vejiga llena q costó vaciar (obstrucción) y luego defeca duro en la camilla. Canalización y fluidoter con 20 ml dextrosa 5% y resto SF. Dexa 1 ml EV + Enro 0,3 ml y 2 ml Vaselina VO. Tramadol EV y Diaz EV como estimulante apetito. Receto Dorlamida de farmacia, 1 gota/ojo cada 8 hs hasta ver mañana. Indico vaselina VO 1 ml cada 8h.',
      nextConsultation: '2020-03-05',
      observations: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      petID: 2,
      date: '2020-02-25',
      diagnosis: 'Balazo en la oreja',
      treatment: 'Está igual, pero ha comido, tomado agua, orinado y defecado dos veces. Igual está muy quieta en su camita, pupilas midriáticas q responden a la luz, reflejo amenaza negativo en ambos ojos. Enro + Dexa, sigue con Vaselina VO cada 8 hs y Dorzolamida cada 12 hs. Mañana ayuno 8-12 hs para extracción de sangre para rutina básica. DP ',
      nextConsultation: null,
      observations: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      petID: 1,
      date: '2020-03-15',
      diagnosis: 'Puñalada en la espalda',
      treatment: 'La prop cuenta q desde el 21 q la tiene, la desparasitó con Basken susp 1 ml y desde siempre tiene diarrea, y hoy hizo color chocolate y con sectores con sangre roja, toda la caja sanitaria salpicada con mf. Examen clínico normal excepto algo de gas en asas intestinales. T 38,6. Periné sin signos de diarrea, ano sin irritación. PV 0,850 kg. Desparasito igual con Toltrazol Plus susp y coloco PE + toque Dexa. Dieta arroz con pollo. Control WA.',
      nextConsultation: null,
      observations: '',
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('consultations', null, {});
  }
};
