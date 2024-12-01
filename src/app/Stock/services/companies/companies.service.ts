import { Injectable } from '@angular/core';
import { ICompany } from '../../models/company.models';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private items: ICompany[] = [
    {
      logoName: 'NL000980552.png',
      externalLinks: {
        main: 'https://yandex.ru/company/',
      },
      name: 'Yandex',
      brandInfo:
        'Яндекс — ведущая российская технологическая компания, которая создает инновационные продукты и сервисы на основе машинного обучения и нейронных сетей.\n\nОсновные бизнес-направления компании — поиск и портальные сервисы, электронная коммерция, сервисы объявлений, сервисы онлайн-заказа такси и заказа еды, автономные автомобили, роботы-доставщики и сервисы развлечений. Яндекс также предлагает продукты для рекламодателей и владельцев бизнеса, развивает образовательные и научные проекты.',
      logoBaseColor: '#ff0000',
      country: 'RUS',
      sector: 'IT',
      id: 1,
      tickers: ['YDEX', 'YNDX@US'],
    },
    {
      id: 1,
      name: 'Норильский никель',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/nornikelx160.png',
      sector: 'Materials',
      externalLinks: {
        main: 'https://yandex.ru/company/',
      },
      brandInfo:
        'Яндекс — ведущая российская технологическая компания, которая создает инновационные продукты и сервисы на основе машинного обучения и нейронных сетей.\n\nОсновные бизнес-направления компании — поиск и портальные сервисы, электронная коммерция, сервисы объявлений, сервисы онлайн-заказа такси и заказа еды, автономные автомобили, роботы-доставщики и сервисы развлечений. Яндекс также предлагает продукты для рекламодателей и владельцев бизнеса, развивает образовательные и научные проекты.',
      logoBaseColor: '#ff0000',
      country: 'RUS',
      tickers: ['GMKN'],
    },
    {
      logoName: 'https://invest-brands.cdn-tinkoff.ru/US42207L1061x160.png',
      externalLinks: {},
      name: 'HeadHunter Group PLC',
      brandInfo:
        'HeadHunter является ведущей российской HR-Tech компанией, которой пользуются свыше 50 млн пользователей и 600 тыс. компаний. Помимо лидирующей онлайн-платформы для поиска работы и сотрудников, компания развивает интегрированную экосистему продуктов в области развития, обучения и нетворкинга, а также в области комплексной автоматизации HR.',
      logoBaseColor: '#d1151a',
      country: 'RUS',
      sector: 'IT',
      id: 5,
      tickers: ['HHR', 'HEAD', 'US42207L1061', 'HHRU'],
    },
    {
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU0008926258x160.png',
      externalLinks: {
        main: 'http://www.surgutneftegas.ru/',
      },
      name: 'Сургутнефтегаз',
      brandInfo:
        'Сургутнефтегаз занимал 12-ю строчку в рейтинге крупнейших компаний-инвесторов России по версии Forbes в 2022 году, у компании одно из крупнейших нефтегазовых производств в стране. Ведет деятельность по разведке и добыче углеводородного сырья. Месторождения расположены в трех нефтегазоносных провинциях — Западно-Сибирской, Восточно-Сибирской и Тимано-Печорской. На компанию приходится более 11% добытой нефти в России, и производство более 6,5% отечественных нефтепродуктов.',
      logoBaseColor: '#dde0e4',
      description:
        'Сургутнефтегаз занимал 12-ю строчку в рейтинге крупнейших компаний-инвесторов России по версии Forbes в 2022 году, у компании одно из крупнейших нефтегазовых производств в стране. Ведет деятельность по разведке и добыче углеводородного сырья. Месторождения расположены в трех нефтегазоносных провинциях — Западно-Сибирской, Восточно-Сибирской и Тимано-Печорской. На компанию приходится более 11% добытой нефти в России, и производство более 6,5% отечественных нефтепродуктов.',
      country: 'RUS',
      sector: 'Energy',
      id: 8,
      tickers: ['SNGSP', 'SNGS'],
    },
    {
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU000A0JR4A1x160.png',
      externalLinks: {
        main: 'http://www.moex.com/',
      },
      name: 'Московская Биржа',
      brandInfo:
        'Московская биржа — крупнейший российский биржевой холдинг. Является организатором торгов акциями, облигациями, производными инструментами, валютой, инструментами денежного рынка,  углеродными единицами, драгоценными металлами, зерном и сахаром. В состав холдинга также входят центральный депозитарий (НКО АО «Национальный расчетный депозитарий», сокращённо — НРД) и клиринговый центр (НКО «Национальный клиринговый центр», сокращённо — НКЦ).\n\nКомпания опубликовала результаты деятельности за второй квартал 2023 года:\nкомиссионные доходы выросли на 48% г/г, до 11,9 млрд рублей за счет роста оборотов на фондовом рынке и низкой базы прошлого года. Показатель EBITDA вырос на 44% г/г, до 16,3 млрд рублей. Чистая прибыль увеличилась на 46% г/г до 12,1, млрд рублей.',
      logoBaseColor: '#FE0002',
      country: 'RUS',
      sector: 'Financial',
      id: 7,
      tickers: ['MOEX'],
    },
    {
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU0009084396x160.png',
      externalLinks: {
        main: 'http://www.mmk.ru/',
      },
      name: 'Магнитогорский металлургический комбинат',
      brandInfo:
        'ММК входит в число крупнейших мировых производителей стали, является одним из лидеров среди предприятий черной металлургии в России. Активы компании представляют собой крупный металлургический комплекс с полным производственным циклом, при этом в структуре производства преобладает продукция с высокой добавленной стоимостью.\n\nКомпания ориентирована на реализацию своей продукции в основном на внутреннем рынке и в странах СНГ. На страны Ближнего Востока и Азии приходится около 19%, на страны Европы — 7%. В числе крупнейших проектов, реализуемых в настоящее время на ММК, — строительство комплекса коксовой батареи №12, производительность которой составит 2,5 млн тонн сухого кокса в год, стоимость реализации проекта — около 67 млрд рублей.',
      logoBaseColor: '#2c499a',
      country: 'RUS',
      sector: 'Materials',
      id: 9,
      tickers: ['MAGN'],
    },
    {
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU000A0JKQU8x160.png',
      externalLinks: {
        main: 'http://magnit-info.ru/',
      },
      name: 'Магнит',
      brandInfo:
        'Магнит — одна из ведущих розничных сетей по торговле продуктами питания в России. Работает по мультиформатной модели, которая включает в себя магазины «у дома», супермаркеты, аптеки и дискаунтеры. Компания также занимается производством продуктов питания под собственными торговыми марками и выращиванием овощей на предприятиях. \n\nНа конец июня 2023 года сеть насчитывает более 28 300 торговых точек и покрывает более 75% регионов России. Ежедневно магазины компании принимают около 17 млн посетителей, а в программе лояльности Магнита участвует более 72 млн человек.',
      logoBaseColor: '#EE1A24',
      country: 'RUS',
      sector: 'Consumer',
      id: 6,
      tickers: ['MGNT', 'RU000A105KQ8', 'RU000A105TP1'],
    },
    {
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU000A102RX6x160.png',
      externalLinks: {
        main: 'https://samoletgroup.ru',
      },
      name: 'ГК Самолет',
      brandInfo:
        'ГК Самолет — одна из крупнейших федеральных корпораций в сфере PropTech и девелопмента. Портфель компании включает 43 проекта, а земельный банк составляет более 28 млн кв. м. Группа входит в число системообразующих организаций российской экономики и занимает первое место в Москве по объемам текущего строительства и второе место в России. Компания активно развивает свою онлайн-платформу, фонды коммерческой и арендной недвижимости и другие.',
      logoBaseColor: '#000000',
      sector: 'RealEstate',
      country: 'RUS',
      id: 4,
      tickers: [
        'RU000A104JQ3',
        'RU000A104YT6',
        'RU000A109874',
        'RU000A107RZ0',
        'RU000A100QA0',
        'SMLT',
      ],
    },
    {
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU0009062285x160.png',
      externalLinks: {
        main: 'http://www.aeroflot.ru/ru-ru',
      },
      name: 'Aeroflot',
      brandInfo:
        'Аэрофлот — крупнейшая авиакомпания России, одна из старейших в мире, основанная в 1923 году. За свою историю 9 раз выигрывала премию лучшей авиакомпании Восточной Европы от Skytrax World Airline Awards. По итогам 2021 года компания перевезла 21,4 млн пассажиров на 356 воздушных судах.\n\nГосударство оказывает существенную помощь компании: на поддержку лизинга самолетов будет выделено 175 млрд рублей в 2023 году, также активно ведется работа по импортозамещению — в сентябре 2022 года ОАК и Аэрофлот подписали соглашение на поставку 339 самолетов. ',
      logoBaseColor: '#014a99',
      country: 'RUS',
      sector: 'Industrials',
      id: 10,
      tickers: ['RU000A103943', 'AFLT'],
    },
    {
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU0009046452x160.png',
      externalLinks: {
        main: 'http://nlmk.com/ru/',
      },
      name: 'Новолипецкий металлургический комбинат',
      brandInfo:
        'НЛМК — одна из крупнейших в мире металлургических компаний, производящая 19% мировых стальных заготовок. Компания добывает сырье и производит сталь в низкозатратных регионах, изготовление готовой продукции осуществляется в непосредственной близости от основных потребителей в России, Северной Америке и странах ЕС.\n\nОбщие мощности по производству продукции превышают 17 млн тонн, на собственных активах перерабатывается до 90% всей производимой стали. Благодаря увеличению цен реализации и повышению доли готовой продукции в портфеле продаж НЛМК за 2021 год увеличил выручку на 75% относительно предыдущего года — до $16 млрд. Чистая прибыль компании выросла в 4 раза, до $5 млрд.',
      logoBaseColor: '#005191',
      description:
        'НЛМК — одна из крупнейших в мире металлургических компаний, производящая 19% мировых стальных заготовок. Компания добывает сырье и производит сталь в низкозатратных регионах, изготовление готовой продукции осуществляется в непосредственной близости от основных потребителей в России, Северной Америке и странах ЕС.\n\nОбщие мощности по производству продукции превышают 17 млн тонн, на собственных активах перерабатывается до 90% всей производимой стали. Благодаря увеличению цен реализации и повышению доли готовой продукции в портфеле продаж НЛМК за 2021 год увеличил выручку на 75% относительно предыдущего года — до $16 млрд. Чистая прибыль компании выросла в 4 раза, до $5 млрд.',
      country: 'RUS',
      sector: 'Materials',
      id: 3,
      tickers: ['NLMK'],
    },
    {
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU000A0DKXV5x160.png',
      externalLinks: {
        main: 'http://www.mechel.ru/',
      },
      name: 'Мечел',
      brandInfo:
        'ПАО «Мечел» крупный промышленный холдинг, объединяющий в единую производственную цепочку более 20 предприятий по производству и реализации угля, стали и сплавов, железной руды, а также электрической и тепловой энергии. Компания является одним из лидеров экспортных поставок и обладает обширной инфраструктурой, которая включает порты и подвижные составы.',
      logoBaseColor: '#51B8F9',
      sector: 'Materials',
      country: 'RUS',
      id: 2,
      tickers: ['MTLRP', 'MTLR'],
    },
  ];

  constructor() {}

  public getItems(): ICompany[] {
    return this.items;
  }

  public getItemById(companyId: ICompany['id']): ICompany | null {
    return this.items.find((item) => item.id === companyId) || null;
  }
}
