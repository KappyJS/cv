import { IExperience } from './models';
import { Lang } from '../../models';

export const EXPERIENCE_DETAILS:IExperience[] = [
  {
    company: {
      [Lang.ru]: 'Сбербанк',
      [Lang.en]: 'Sberbank',
    },
    grade: {
      [Lang.ru]: 'Руководитель направления',
      [Lang.en]: 'Senior Front-end',
    },
    startDate: new Date('2021-04-01T00:00:00'),
    duties: [{
      [Lang.ru]: 'Ответственность за релизы команды',
      [Lang.en]: 'Responsibility for team releases',
    }, {
      [Lang.ru]: 'Обеспечение единых стандартов разработки',
      [Lang.en]: 'Ensuring uniform development standards',
    }, {
      [Lang.ru]: 'Автоматизация CI/CD процессов',
      [Lang.en]: 'Automation of CI/CD processes',
    }, {
      [Lang.ru]: 'Контроль за придерживанием Agile практик (Scrum master)',
      [Lang.en]: 'Monitoring adherence to Agile practices (Scrum master)',
    }],
    achievements: [{
      [Lang.ru]: 'Автоматизировал процесс авоматического деплоя на тестовые стенды',
      [Lang.en]: 'Automated the process of automatic deployment to test benches',
    }, {
      [Lang.ru]: 'Довел более 20 релизов до пользователей',
      [Lang.en]: 'Brought more than 20 releases to users',
    }, {
      [Lang.ru]: 'Разработал монорепозиторий для общих библиотек',
      [Lang.en]: 'Developed a monorepository for shared libraries',
    }],
  },
  {
    company: {
      [Lang.ru]: 'Сбербанк',
      [Lang.en]: 'Sberbank',
    },
    grade: {
      [Lang.ru]: 'Ведущий разработчик',
      [Lang.en]: 'Middle Front-end',
    },
    startDate: new Date('2020-02-01T00:00:00'),
    endDate: new Date('2021-04-01T00:00:00'),
    duties: [
      {
        [Lang.ru]: 'Проектирование и разработка собственной UI системы',
        [Lang.en]: 'Design and development of own UI system',
      },
      {
        [Lang.ru]: 'Менторство 2 front-end разработчиков',
        [Lang.en]: 'Mentoring 2 front-end developers',
      }, {
        [Lang.ru]: 'Взаимодействие и сотрудничество с командой дизайнеров',
        [Lang.en]: 'Interaction and collaboration with the design team',
      }, {
        [Lang.ru]: 'Разработка канбан доски c использованием react-beutiful-dnd ',
        [Lang.en]: 'Kanban board development using react-beutiful-dnd',
      }],
    achievements: [{
      [Lang.ru]: 'Разработал собственную UI библиотеку (получил благодарность от высшего руководства компании)',
      [Lang.en]: 'Developed my own UI library (received gratitude from the top management of the company)',
    }, {
      [Lang.ru]: 'Разработал модуль для работы с продажами с использованием dnd',
      [Lang.en]: 'Developed a module for working with sales using dnd',
    }, {
      [Lang.ru]: 'Пилотировал выделения нашего модуля в микросевисную архитектуру',
      [Lang.en]: 'Piloted the allocation of our module to the microservice architecture',
    }],
  },
  {
    company: {
      [Lang.ru]: 'Сбербанк',
      [Lang.en]: 'Sberbank',
    },
    grade: {
      [Lang.ru]: 'Младший разработчик',
      [Lang.en]: 'Junior Front-end',
    },
    startDate: new Date('2019-04-01T00:00:00'),
    endDate: new Date('2020-02-01T00:00:00'),
    duties: [{
      [Lang.ru]: 'Разработка  части функционала для внутренних сотрудников компании',
      [Lang.en]: 'Development of a part of the functionality for internal employees of the company',
    }, {
      [Lang.ru]: 'Вертска интерфейсов в соответствии с макетами из Figma',
      [Lang.en]: 'Layout of interfaces in accordance with layouts from Figma',
    }, {
      [Lang.ru]: 'Поставка функционала на тестовые стенды',
      [Lang.en]: 'Delivery of functionality to test benches',
    }],
    achievements: [{
      [Lang.ru]: 'Разработал сервер для заглушки данных (Node & Express + Webpack proxy server)',
      [Lang.en]: 'Developed a data stub server (Node & Express + Webpack proxy server)',
    }, {
      [Lang.ru]: 'Разработал модуль для работы с  клиентами компании',
      [Lang.en]: 'Developed a module for working with company clients',
    }],
  },
];
