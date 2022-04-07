export interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

/*
Найдите и исправьте ошибку в данных, возвращаемых функцией getPerson.
 */
export function getPerson(): IPersonData {
    return {
        name: 'Petr',
        secondName: 'Smith',
        age: 7,
    };
}

/*
Допишите функцию `getStudentsData` так, чтобы она возвращала массив из указанных в комментарии данных.
Данные должны храниться в объектах, соответствующих интерфейсу `IStudentData`.
 */
export interface IStudentData {
    name: string;
    secondName: string;
    age: number;
    phone?: string;
}

export function getStudentsData(): IStudentData[] {
    /**
     * Данные студентов которые нужно передать:
     *
     * 1. Ivan Petrov 20 лет +7(555)555-55-50
     * 2. Stepan Petrov 19 лет +7(555)555-55-51
     * 3. Petr Ivanov 19 лет
     *
     */
    let first: IStudentData, second: IStudentData, third: IStudentData;
    first = {
        name: 'Ivan',
        secondName: 'Petrov',
        age: 20,
        phone: '+7(555)555-55-50',
    };
    second = {
        name: 'Stepan',
        secondName: 'Petrov',
        age: 19,
        phone: '+7(555)555-55-51',
    };
    third = {
        name: 'Petr',
        secondName: 'Ivanov',
        age: 19,
    };

    return [first, second, third];
}
