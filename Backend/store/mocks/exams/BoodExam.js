const templateBloodExam = [
  {
    name: 'Glucosa',
    max: 106,
    min: 17,
    value: null,
    unit: 'mg/dL'
  },
  {
    name: 'Urea',
    max: 49,
    min: 17,
    value: null,
    unit: 'mg/dL'
  },
  {
    name: 'Ácido úrico',
    max: 8,
    min: 4.2,
    value: null,
    unit: 'mg/dl'
  },
  {
    name: 'Creatinina',
    max: 1.3,
    min: 0.7,
    value: null,
    unit: 'mg/dl'
  },
  {
    name: 'Colesterol',
    max: 130,
    min: 0,
    value: null,
    unit: 'mg/dL'
  },
  {
    name: 'Triglicéridos',
    max: 150,
    min: 0,
    value: null,
    unit: 'mg/dl'
  },
  {
    name: 'Transaminasas',
    max: 55,
    min: 0,
    value: null,
    unit: 'unidades/litro'
  },
  {
    name: 'Hierro',
    max: 170,
    min: 65,
    value: null,
    unit: 'mg/dL'
  },
  {
    name: 'Calcio',
    max: 10.2,
    min: 8.6,
    value: null,
    unit: 'mg/dL'
  },
  {
    name: 'Potasio',
    max: 3.5,
    min: 5.1,
    value: null,
    unit: 'mEq/litro'
  },
  {
    name: 'Sodio',
    max: 146,
    min: 136,
    value: null,
    unit: 'mEq/litro'
  },
  {
    name: 'Bilirrubina',
    max: 1.2,
    min: 0.8,
    value: null,
    unit: 'mg/dL'
  }
]
const BloodExam = {
  types: [
    {
      id: 121,
      name: 'Examen de general saguineo',
      desc: 'Examen para el analisis general de la sangre',
      template_cont: templateBloodExam
    }
  ]
}

module.exports = BloodExam
