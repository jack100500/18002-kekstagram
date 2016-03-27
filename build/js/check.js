/**
 * @param a
 * @param b
 * @returns {*}
 */
function getMessage(a, b) {
    if (typeof a == 'boolean') {
        if (a) {
            return "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
        }
        return "Переданное GIF-изображение не анимировано";
    }
    if (typeof a == 'number') {
        return "Переданное SVG-изображение содержит " + a + " объектов и " + (b * 4) + " атрибутов"
    }
    if (typeof a == 'object' && typeof b == 'object') {
        var sum = 0;
        for (var i = 0; i < a.length; i++) {
            sum += a[i] * b[i];
        }
        return "Общая площадь артефактов сжатия: " + sum + " пикселей";
    }
    if (typeof a == 'object') { // array === object ?
        return "Количество красных точек во всех строчках изображения: " + a.length;
    }
}