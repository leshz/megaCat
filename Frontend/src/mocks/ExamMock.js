// Exams
const Exams = [
  {
    id: 'a0108392-00af-4557-865d-fa378789f4cc',
    content: [ { name: 'Leucocitos', reference: '3.5-10.5^3/uL', value: 6.1 }, { name: 'Eritrocitos', reference: '3.5-10.5^3/uL', value: 3.5 }, { name: 'Hemoglobina', reference: '3.5-10.5^3/uL', value: 10.2 }, { name: 'Hematrocrito', reference: '3.5-10.5^3/uL', value: 31.5 } ],
    reservation_date:'',
    status_id: '72a88d3f-933a-4ab5-96ed-70e5bcb0dbbd',
    medic_id: 'bff20d66-b0e7-4eb5-ae2a-da907914a76e',
    pacient_id: '7b07945e-e59f-4261-8b56-d2d80adb3cec',
    bacteriologist_id: 'be910562-e713-43a0-bed6-dd8d9fe2072f',
    type_id: '10b9be0a-db18-448b-98aa-002d53339805',
    is_deleted: false,
    created_at: '2020-05-25 03:48:19.437-05',
    updated_at: '2020-05-25 03:48:19.437-05'
  },
  {
    id: 'a0108392-00af-4557-865d-fa378789f4ca',
    content: [ { name: 'Leucocitos', reference: '3.5-10.5^3/uL', value: 6.1 }, { name: 'Eritrocitos', reference: '3.5-10.5^3/uL', value: 3.5 }, { name: 'Hemoglobina', reference: '3.5-10.5^3/uL', value: 10.2 }, { name: 'Hematrocrito', reference: '3.5-10.5^3/uL', value: 31.5 } ],
    reservation_date: '2020-05-25 03:48:19.437-05',
    status_id: 'c47400b7-9b11-43c4-93ff-c72652e42903',
    medic_id: 'bff20d66-b0e7-4eb5-ae2a-da907914a76e',
    pacient_id: '7b07945e-e59f-4261-8b56-d2d80adb3cec',
    bacteriologist_id: 'be910562-e713-43a0-bed6-dd8d9fe2072f',
    type_id: '10b9be0a-db18-448b-98aa-002d53339805',
    is_deleted: false,
    created_at: '2020-05-25 03:48:19.437-05',
    updated_at: '2020-05-25 03:48:19.437-05'
  },
  {
    id: 'a0108392-00af-4557-865d-fa378789f4cd',
    content: [ { name: 'Leucocitos', reference: '3.5-10.5^3/uL', value: 6.1 }, { name: 'Eritrocitos', reference: '3.5-10.5^3/uL', value: 3.5 }, { name: 'Hemoglobina', reference: '3.5-10.5^3/uL', value: 10.2 }, { name: 'Hematrocrito', reference: '3.5-10.5^3/uL', value: 31.5 } ],
    reservation_date: '2020-05-25 03:48:19.437-05',
    status_id: 'ed7efc9d-1be8-4fc9-b761-4debfb4d547f',
    medic_id: 'bff20d66-b0e7-4eb5-ae2a-da907914a76e',
    pacient_id: '7b07945e-e59f-4261-8b56-d2d80adb3cec',
    bacteriologist_id: 'be910562-e713-43a0-bed6-dd8d9fe2072f',
    type_id: '10b9be0a-db18-448b-98aa-002d53339805',
    is_deleted: false,
    created_at: '2020-05-25 03:48:19.437-05',
    updated_at: '2020-05-25 03:48:19.437-05'
  },
]

// exam_types

const examTypes = [
  {
    id: '',
    name: 'Biometría hemática',
    description: 'lorem ipsum dolor sit amet',
    template_content: [ { name: 'Leucocitos', reference: '3.5-10.5^3/uL', value: null }, { name: 'Eritrocitos', reference: '3.5-10.5^3/uL', value: null }, { name: 'Hemoglobina', reference: '3.5-10.5^3/uL', value: null }, { name: 'Hematrocrito', reference: '3.5-10.5^3/uL', value: null } ],
    is_deleted: false,
    created_at: '2020-05-25 03:48:19.437-05',
    updated_at: '2020-05-25 03:48:19.437-05'
  }
]

// exam_statuses
const examStatus = [
  {
    id: '72a88d3f-933a-4ab5-96ed-70e5bcb0dbbd',
    name: 'Pendiente',
    description: 'Lorem ipsum',
    is_deleted: false,
    created_at: '2020-05-25 03:48:19.437-05',
    updated_at: '2020-05-25 03:48:19.437-05'
  },
  {
    id: 'c47400b7-9b11-43c4-93ff-c72652e42903',
    name: 'Asignado',
    description: 'Lorem ipsum',
    is_deleted: false,
    created_at: '2020-05-25 03:48:19.437-05',
    updated_at: '2020-05-25 03:48:19.437-05'
  },
  {
    id: 'ed7efc9d-1be8-4fc9-b761-4debfb4d547f',
    name: 'Completado',
    description: 'Lorem ipsum',
    is_deleted: false,
    created_at: '2020-05-25 03:48:19.437-05',
    updated_at: '2020-05-25 03:48:19.437-05'
  }
]

module.exports = {
  Exams,
  examTypes,
  examStatus
}