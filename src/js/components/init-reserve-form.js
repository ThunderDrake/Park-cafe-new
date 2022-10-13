import { validateForms } from '../functions/validate-forms';
import modal from "./init-modals.js"
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
];

const afterForm = () => {
  modal.close();
};

validateForms('.reserve__form', rules, afterForm);
validateForms('.modal__form', rules1, afterForm);
