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
    PatronymicMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александрович",
            "id_2": "Владимирович",
            "id_3": "Андреевич",
            "id_4": "Иванович",
            "id_5": "Николаевич",
            "id_6": "Петрович",
            "id_7": "Сергеевич",
            "id_8": "Тимофеевич",
            "id_9": "Юрьевич",
            "id_10": "Яковлевич"
        }
    }`,
    PatronymicFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александровна",
            "id_2": "Алексеевна",
            "id_3": "Андреевна",
            "id_4": "Ивановна",
            "id_5": "Николаевна",
            "id_6": "Петровна",
            "id_7": "Сергеевна",
            "id_8": "Тимофеевна",
            "id_9": "Юрьевна",
            "id_10": "Яковлевна"
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
        
        // return this.randomValue(this.firstNameMaleJson);
    },


     randomSurname: function() {
        const surname = this.randomValue(this.surnameJson);

        if (this.person.gender === this.GENDER_FEMALE) {
            return surname + 'а'
        } else {
            return surname;
        };

       // return this.randomValue(this.surnameJson);

    },

     randomPatronymic: function() {

         if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.PatronymicMaleJson)
        } else {
            return this.randomValue(this.PatronymicFemaleJson)
        };

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