// Задача 1. Усовершенствуйте кэширующий декоратор

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");

    let index = cache.findIndex((item) => item.hash === hash);

    if (index !== -1) {
      console.log("Из кэша: " + cache[index].value);
      return ("Из кэша: " + cache[index].value);
    } else {
      let value = func(...args);
      
      cache.push({hash, value})

      if (cache.length > 5) {
        cache.shift();
      }

      console.log("Вычисляем: " + value);
      return ("Вычисляем: " + value);
    }
  }
  return wrapper;
}

// Задача 2. Фильтрация и преобразование массива
function debounceDecoratorNew(func, ms) {
  
  let timeout;
  let flag = false;

  function wrapper(...args) {

    if (!flag) {
      func.apply(this, args);
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => { 
        func.apply(this, args);
        flag = false
      }, ms);
      
      //setTimeout(() => {console.log('проигнорировано')}, ms);
    }
  }
  return wrapper;
}

// Задача 3. Усовершенствуйте debounceDecoratorNew
function debounceDecorator2(func, ms) {
  
  let timeout;
  let flag = false;
  let counter = 0;

  function wrapper(...args) {
    counter++;
    console.log(counter)
    if (!flag) {
      func.apply(this, args);
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => { 
        func.apply(this, args);
        flag = false
      }, ms);
    }
  }
  return wrapper;
}