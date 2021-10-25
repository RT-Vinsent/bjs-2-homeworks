// Задача №1. Форматтер чисел

function parseCount(value) {
    const parseValue = Number.parseInt(value, 10);
    if (isNaN(parseValue)) {
        throw new Error("Невалидное значение");
    } else {
        return parseValue;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}