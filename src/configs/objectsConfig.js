export default {
  dirUsers: {
    id: null,
    code: "54012",
    dateActivate: "2023-01-01",
    dateDeactivate: "2023-03-30",
    dateUpdate: "2023-02-01T00:00:00",
    userId: "12345",
    organization: {
      id: 1,
      code: "101",
      dateActivate: "2023-01-01",
      dateDeactivate: "2023-03-30",
      dateUpdate: "2023-02-01T00:00:00",
      userId: "12345",
      name: "Экспертна организация 1",
      unp: "100100100",
      orgBriefName: "ООО 'Экспертная организация'",
      headPositionName: "Начальник лаборатории",
      headFullName: "Иванов Иван Иванович",
      orgAddress: "г. Минск, ул. Ивановская 14",
    },
    department: "Отдел холодного оружия",
    position: "Лаборант",
    fullName: "Сергеев Сергей Сергеевич",
    education: "Высшее образование",
    speciality: "Эксперт в части идентификации холодного оружия",
    workExperience: "15 лет",
    phone: "+375 (44) 8888-00-91",
    fax: "80176097856",
    email: "sergeevss@tks.by",
  },
  dirExpertOrg: {
    id: null,
    code: "101",
    dateActivate: "2023-01-01",
    dateDeactivate: "2023-03-30",
    dateUpdate: "2023-02-01T00:00:00",
    userId: "12345",
    name: "Экспертна организация 1",
    unp: "100100100",
    orgBriefName: "ООО 'Экспертная организация'",
    headPositionName: "Начальник лаборатории",
    headFullName: "Иванов Иван Иванович",
    orgAddress: "г. Минск, ул. Ивановская 14",
  },
  dirExpertiseKind: {
    id: null,
    code: "01",
    dateActivate: "2023-01-01",
    dateDeactivate: "2023-03-30",
    dateUpdate: "2023-02-01T00:00:00",
    userId: "12345",
    name: "Первая вид",
    type: {
      id: 3,
      code: "003",
      dateActivate: "2023-01-01",
      dateDeactivate: "2023-02-10",
      dateUpdate: "2023-02-01T00:00:00",
      userId: "12345",
      name: "Третий тип",
    },
    labRequired: true,
  },
  dirExpertiseType: {
    id: 3,
    code: "003",
    dateActivate: "2023-01-01",
    dateDeactivate: "2023-02-10",
    dateUpdate: "2023-02-01T00:00:00",
    userId: "12345",
    name: "Третий тип",
  },
  dirExpertiseStages: {
    id: 1,
    code: "0001",
    dateActivate: "2023-01-01",
    dateDeactivate: "2023-03-30",
    dateUpdate: "2023-02-01T00:00:00",
    userId: "12345",
    name: "Этап 1",
  },
}