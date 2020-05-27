const { rolesEnum } = require('./RolesMock')
const auths = [
  {
    id: '018a5472-bf8e-4889-a3a2-ebdd4722d6b2',
    id_number: 1767,
    username: 'leodora.crouch.1767',
    password: '$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G',
    role_id: rolesEnum.ADMINISTRATOR.id,
    isDeleted: false,
    created_at: '2020-01-22 14:00:18',
    updated_at: '2020-02-27 20:11:39'
  },
  {
    id: '832b0c00-7b1e-4a4d-8c0d-39bdfb40f05c',
    id_number: 3469,
    username: 'hayden.haseman.3469',
    password: '$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G',
    role_id: rolesEnum.MEDIC.id,
    isDeleted: false,
    created_at: '2020-02-03 08:45:34',
    updated_at: '2019-12-31 18:44:32'
  },
  {
    id: '795b5699-7ca9-4344-8fe5-4a4f501678a9',
    id_number: 5582,
    username: 'basile.matteini.5582',
    password: '$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G',
    role_id: rolesEnum.BACTERIOLOGIST.id,
    isDeleted: true,
    created_at: '2019-10-10 02:05:12',
    updated_at: '2020-02-03 00:16:37'
  },
  {
    id: '1cffa615-e1d8-4113-b585-60603f0854fb',
    id_number: 3123,
    username: 'hersh.oloman.3123',
    password: '$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G',
    role_id: rolesEnum.PACIENT.id,
    isDeleted: false,
    created_at: '2019-10-18 22:22:15',
    updated_at: '2019-10-27 06:28:39'
  },
  {
    id: '0a96b420-ba2b-4741-b290-c916d92abdc0',
    id_number: 1011,
    username: 'ursula.cowen.1011',
    password: '$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G',
    role_id: rolesEnum.ADMINISTRATOR.id,
    isDeleted: true,
    created_at: '2019-05-23 01:10:13',
    updated_at: '2019-11-11 16:03:54'
  },
  {
    id: 'b9df98a3-f23d-4711-b710-59efe5387921',
    id_number: 7897,
    username: 'norry.vockins.7897',
    password: '$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G',
    role_id: rolesEnum.MEDIC.id,
    isDeleted: false,
    created_at: '2020-02-02 06:11:16',
    updated_at: '2019-08-20 00:41:38'
  },
  {
    id: 'ec8b28a6-d23b-42c3-a7bd-c9921c55d6cc',
    id_number: 5839,
    username: 'hort.mantram.5839',
    password: '$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G',
    role_id: rolesEnum.BACTERIOLOGIST.id,
    isDeleted: true,
    created_at: '2019-10-12 12:44:17',
    updated_at: '2020-04-14 12:24:05'
  },
  {
    id: '9d7f71ff-49fe-4819-859c-727ce7f44be3',
    id_number: 6214,
    username: 'christie.baelde.6214',
    password: '$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G',
    role_id: rolesEnum.PACIENT.id,
    isDeleted: false,
    created_at: '2019-12-08 08:22:59',
    updated_at: '2020-05-12 06:13:23'
  },
  {
    id: 'c0f557a2-da71-4974-930f-17e52935bc7a',
    id_number: 1325,
    username: 'byram.doblin.1325',
    password: '$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G',
    role_id: rolesEnum.PACIENT.id,
    isDeleted: true,
    created_at: '2020-01-02 01:26:33',
    updated_at: '2020-02-27 09:26:02'
  },
  {
    id: '5a12fd8d-24f5-4327-a40a-3b1ff02c8d55',
    id_number: 1382,
    username: 'dniren.pidwell.1382',
    password: '$2b$10$ZpVyOQe2bRJFYC3NujyBg.CyRcytVp.d6UmNYJ/A7CN9jacsRJ05G',
    role_id: rolesEnum.PACIENT.id,
    isDeleted: false,
    created_at: '2019-09-16 09:43:44',
    updated_at: '2019-06-21 00:51:37'
  }
]

module.exports = auths
