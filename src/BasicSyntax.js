import { ReadStream } from 'fs';

export function romanToInteger(str) {
    let result = 0;
    let i = 3;
    let first = 0;
    let second = 0;
    switch (str[str.length - 1]) {
        case 'I':
            first = 1;
            break;
        case 'V':
            first = 5;
            break;
        case 'X':
            first = 10;
            break;
        case 'L':
            first = 50;
            break;
        case 'C':
            first = 100;
            break;
        case 'D':
            first = 500;
            break;
        case 'M':
            first = 1000;
            break;
    }
    switch (str[str.length - 2]) {
        case 'I':
            second = 1;
            break;
        case 'V':
            second = 5;
            break;
        case 'X':
            second = 10;
            break;
        case 'L':
            second = 50;
            break;
        case 'C':
            second = 100;
            break;
        case 'D':
            second = 500;
            break;
        case 'M':
            second = 1000;
            break;
    }
    result = first;
    if (second < first) {
        result -= second;
    } else {
        result += second;
    }
    while (i < str.length + 1) {
        first = second;
        switch (str[str.length - i]) {
            case 'I':
                second = 1;
                break;
            case 'V':
                second = 5;
                break;
            case 'X':
                second = 10;
                break;
            case 'L':
                second = 50;
                break;
            case 'C':
                second = 100;
                break;
            case 'D':
                second = 500;
                break;
            case 'M':
                second = 1000;
                break;
        }
        if (second < first) {
            result -= second;
        } else {
            result += second;
        }
        i++;
    }
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    return result;
}
