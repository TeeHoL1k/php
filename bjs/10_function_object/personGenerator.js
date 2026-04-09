const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Анастасия",
            "id_2": "Анна",
            "id_3": "Алена",
            "id_4": "Мария",
            "id_5": "Ольга",
            "id_6": "Галина",
            "id_7": "Светлана",
            "id_8": "Наталья",
            "id_9": "Елена",
            "id_10": "Оксана"
        }
    }`,
    months: [
        {name: "января", days: 31 },
        {name: "февраля", days: 28 },
        {name: "марта", days: 31 },
        {name: "апреля", days: 30 },
        {name: "мая", days: 31 },
        {name: "июня", days: 30 },
        {name: "июля", days: 31 },
        {name: "августа", days: 31 },
        {name: "сентября", days: 30 },
        {name: "октября", days: 31 },
        {name: "ноября", days: 30 },
        {name: "декабря", days: 31 },
    ],
    ProfessionMaleJson: `{
        "count": 4,
        "list": {
            "id_1": "слесарь",
            "id_2": "шахтёр",
            "id_3": "программист",
            "id_4": "водитель"
        }
    }`,
    ProfessionFemaleJson: `{
        "count": 4,
        "list": {
            "id_1": "медсестра",
            "id_2": "учительница",
            "id_3": "дизайнер",
            "id_4": "бухгалтер"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson)
        } else {
            return this.randomValue(this.firstNameFemaleJson)
        };
    },


     randomSurname: function() {
        const surname = this.randomValue(this.surnameJson);

        if (this.person.gender === this.GENDER_FEMALE) {
            return surname + 'а'
        } else {
            return surname;
        };
    },

     randomPatronymic: function() {
        const name = this.randomValue(this.firstNameMaleJson);
        let base = name;

        if (name.slice(-1) === 'й') {
            base = name.slice(0, -1) + 'е';
        } else if (name.slice(-1) === 'а') {
            base = name.slice(0, -1);
        } else if (name.slice(-1) === 'ь') {
            base = name.slice(0, -1);
        }

        if (this.person.gender === this.GENDER_MALE) {
            return base + 'ович';
        } else {
            return base + 'овна';
        }
    },
    randomGender: function() {
        const gender = this.randomIntNumber(1, 0) ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;
    },

    randomBirthDate: function() {
        const randomIndex = this.randomIntNumber(11, 0);
        const month = this.months[randomIndex];
        const day = this.randomIntNumber(month.days, 1);
        const birthYear = this.randomIntNumber(2005, 1950);
        return day + ' ' + month.name + ' ' + birthYear;
    },

    randomProfession: function() {

         if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.ProfessionMaleJson)
        } else {
            return this.randomValue(this.ProfessionFemaleJson)
        };
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthDate = this.randomBirthDate();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};