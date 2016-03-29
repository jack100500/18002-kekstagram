/**
 * @param a
 * @param b
 * @returns {*}
 */
function getMessage(a, b) {
    switch(typeof a) {
        case ('boolean'): {
            return (a
                ? 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров'
                : 'Переданное GIF-изображение не анимировано');
        }
        case ('number'): {
            return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' атрибутов';
        }
        case ('object'): {
            var sum = 0, i = 0;
            
            if (Array.isArray(a) && Array.isArray(b)) {
                for (i = 0; i < a.length; i++) {
                    sum += a[i] * b[i];
                }
                
                return 'Общая площадь артефактов сжатия: ' + sum + ' пикселей';
            }
            for (i = 0; i < a.length; i++) {
                sum += a[i];
            }

            return 'Количество красных точек во всех строчках изображения: ' + sum;
        }
        default: {
            return 'Неизвестный тип файла';
        }
    }
}