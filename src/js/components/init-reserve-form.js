import { validateForms } from '../functions/validate-forms';
import modal from "./init-modals.js"
import GraphModal from 'graph-modal';

const rules = [
  {
    ruleSelector: '.form__input--name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.form__input--tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.form__input--guest',
    rules: [
      {
        rule: 'number',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните количество гостей!'
      }
    ]
  },
  {
    ruleSelector: '.custom-checkbox__field',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Согласитесь с обработкой данных!'
      }
    ]
  },
  {
    ruleSelector: '.form__input--date',
    date: true,
    dateError: 'Введите корректную дату и время',
    rules: [
      {
        rule: 'minLength',
        value: 12,
        errorMessage: 'Введите корректную дату и время'
      }
    ]
  },
];
const rules1 = [
  {
    ruleSelector: '.form__input--name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.form__input--tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.form__input--guest',
    rules: [
      {
        rule: 'number',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните количество гостей!'
      }
    ]
  },
  {
    ruleSelector: '.custom-checkbox__field',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Согласитесь с обработкой данных!'
      }
    ]
  },
  {
    ruleSelector: '.form__input--date',
    date: true,
    dateError: 'Введите корректную дату и время',
    rules: [
      {
        rule: 'minLength',
        value: 12,
        errorMessage: 'Введите корректную дату и время'
      }
    ]
  },
];

const afterForm = () => {
  modal.close();
  new GraphModal().open('thankyou');

  setTimeout(() => {
    modal.close();
  }, 5000);
};

validateForms('.reserve__form', rules, afterForm);
validateForms('.modal__form', rules1, afterForm);
