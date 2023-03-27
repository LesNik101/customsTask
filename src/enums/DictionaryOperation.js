const DictionaryOperation = {
  ADD: {
    modalOptions: {
      title: {
        text: "Сохранение записи",
      },
      body: {
        hide: false,
        component: "NewDictionary",
      },
      actions: {
        hide: false,
        okButton: {
          text: "Сохранить",
        },
        cancelButton: {
          text: "Отменить",
        },
      },
    },
  },
  UPDATE: {
    modalOptions: {
      title: {
        text: "Редактирование записи",
      },
      body: {
        hide: false,
        component: "NewDictionary",
      },
      actions: {
        hide: false,
        okButton: {
          text: "Обновить",
        },
        cancelButton: {
          text: "Отменить",
        },
      },
    },
  },
  DELETE: {
    modalOptions: {
      title: {
        text: "Удалить запись?",
      },
      body: {
        hide: true,
      },
      actions: {
        hide: false,
        okButton: {
          text: "Да",
        },
        cancelButton: {
          text: "Нет",
        },
      },
    },
  },
}

export default DictionaryOperation
