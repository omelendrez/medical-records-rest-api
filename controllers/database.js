const Sequelize = require('sequelize')
const TableHints = Sequelize.TableHints

const Status = require("../models").status
const Profile = require("../models").profile
const Company = require("../models").company
const User = require("../models").user

const { ReS, ReE, updateOrCreate } = require("../helpers")

const STATUS = { ACTIVE: 'Activo', INACTIVE: 'Inactivo' }
const PROFILES = { ADMIN: 'Administrator', USER: 'User', READONLY: 'Readonly' }
const COMPANY = "Test Veterinaria"

const status = [{ name: STATUS.ACTIVE }, { name: STATUS.INACTIVE }]
const profiles = [{ name: PROFILES.ADMIN }, { name: PROFILES.USER }, { name: PROFILES.READONLY }]
const companies = [
  {
    name: COMPANY,
    address: "Calle falsa 123",
    mobile: "123456789",
    city: "Madrid",
    state: "Madrid",
    observations: "Esta es una cuenta de tests"
  },
]
const users = [
  {
    profileId: PROFILES.ADMIN,
    name: "Omar",
    password: "Master1*",
  },
  {
    profileId: PROFILES.USER,
    name: "Jorge",
    password: "123456",
  },
  {
    profileId: PROFILES.READONLY,
    name: "Visitante",
    password: "695379",
  },
]

const seedStatus = () => {
  return new Promise((resolve, reject) => {
    status.forEach((r) => {
      updateOrCreate(Status, {}, r)
        .then(() => {
          Status.findOne({ where: { name: STATUS.ACTIVE } })
            .then((r) => {
              resolve(r.id)
            })
        })
    })
  })
}

const seedProfiles = () => {
  return new Promise((resolve, reject) => {
    profiles.forEach((r) => {
      updateOrCreate(Profile, {}, r)
        .then(() => resolve())
    })
  })
}

const getProfileId = (profileName) => {
  return new Promise((resolve, reject) => {
    Profile.findOne({ where: { name: profileName } })
      .then((r) => {
        resolve(r.id)
      })
  })
}

const seedCompanies = (statusId) => {
  return new Promise((resolve, reject) => {
    companies.forEach((r) => {
      const newR = { ...r, statusId }
      updateOrCreate(Company, {}, newR)
        .then(() => {
          Company.findOne({ where: { name: COMPANY } })
            .then((r) => {
              resolve(r.id)
            })
        })
    })
  })
}

const seedUsers = (profiles, statusId, companyId) => {
  return new Promise((resolve, reject) => {
    users.forEach(async (r) => {
      const profileId = await getProfileId(r.profileId)
      const newRecord = { ...r, statusId, companyId, profileId }
      updateOrCreate(User, {}, newRecord)
        .then(() => resolve())
    })
  })
}

const getUsers = () => {
  return new Promise((resolve, reject) => {
    User.findAndCountAll({
      tableHint: TableHints.NOLOCK,
      attributes: [
        'name',
        'companyId',
        'profileId'
      ]
    })
      .then((r) => {
        resolve(r)
      })
  })
}

const seed = async (_, res) => {
  const existingUsers = await getUsers()
  if (existingUsers.count > 0) {
    return ReE(res, { message: 'Database already seeded' }, 400)
  }
  const statusId = await seedStatus()
  const profiles = await seedProfiles()
  const companyId = await seedCompanies(statusId)
  await seedUsers(profiles, statusId, companyId)

  const resp = {
    message: "Datos guardados satisfactoriamente"
  }

  return ReS(res, resp, 201)
}
module.exports.seed = seed
