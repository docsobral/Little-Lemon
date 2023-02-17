import { render, screen } from '@testing-library/react';
import { Main } from '../components/main/main';

const seededRandom = function(seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        };
        if(random() < 0.5) {
            result.push(i + ':30');
        };
    };
    return result;
};

const submitAPI = function(formData) {
    return true;
};

test('same day returns same seed', () => {
    const seed = seededRandom(1)();
    expect(seed).toBe(0.000005409005102924978);
});

test('same date returns same list', () => {
    const list = fetchAPI(new Date('2023-01-04'));
    expect(list).toStrictEqual(['17:00', '17:30', '19:30', '21:00', '21:30']);
});

test('different date returns different list', () => {
    const list = fetchAPI(new Date('2023-01-01'));
    expect(list).toStrictEqual(['17:00', '17:30', '18:00', '18:30', '21:00', '21:30', '22:00', '23:00']);
});