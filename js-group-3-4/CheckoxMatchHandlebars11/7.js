"use strict";
  const laptops = [
    {
      size: 13,
      color: "white",
      price: 28000,
      releaseDate: 2015,
      name: 'Macbook Air White 13',
      img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
    },
    {
      size: 13,
      color: "gray",
      price: 32000,
      releaseDate: 2016,
      name: 'Macbook Air Gray 13',
      img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
    },
    {
      size: 13,
      color: "black",
      price: 35000,
      releaseDate: 2017,
      name: 'Macbook Air Black 13',
      img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
    },
    {
      size: 15,
      color: "white",
      price: 45000,
      releaseDate: 2015,
      name: 'Macbook Air White 15',
      img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
    },
    {
      size: 15,
      color: "gray",
      price: 55000,
      releaseDate: 2016,
      name: 'Macbook Pro Gray 15',
      img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
    },
    {
      size: 15,
      color: "black",
      price: 45000,
      releaseDate: 2017,
      name: 'Macbook Pro Black 15',
      img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
    },
    {
      size: 17,
      color: "white",
      price: 65000,
      releaseDate: 2015,
      name: 'Macbook Air White 17',
      img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
    },
    {
      size: 17,
      color: "gray",
      price: 75000,
      releaseDate: 2016,
      name: 'Macbook Pro Gray 17',
      img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
    },
    {
      size: 17,
      color: "black",
      price: 80000,
      releaseDate: 2017,
      name: 'Macbook Pro Black 17',
      img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
    }
  ];
  let filter = {
    size: [],
    color: [],
    releaseDate: []
  };
  let calculateLaptops = [];

  const form = document.querySelector(".js-form");
  const inputs = [...form.querySelectorAll("input")];
  const searchBtn = document.querySelector(".js-filter");
  const resetBtn = document.querySelector(".js-clear");
  console.log('inputs',inputs);

  const out = document.querySelector(".out");
  const source = document.querySelector("#laptop-tpl").innerHTML.trim();
  const template = Handlebars.compile(source);
  
  function filterInputs() {
  //   Заполняется 3 массива кликнутыми инпутами
  // !!!Числа в виде строки!!! size price
  // В массиве объектов laptops числа - это числа
  //   let filter = {
  //   size: [],
  //   color: [],
  //   releaseDate: [] 
  // };
  //   Потом используется в след функции
    inputs.forEach(input => {
      if (input.checked) {
        filter[input.name].push(input.value);
        console.log('filter[input.name]',filter[input.name])
        console.log('filter[filterInputs()]',filter)
        // return filter;
      }
    });
  }

  function findByParameters(parameter) {
  // На входе findExecuteNow() при выполнении 
  // этой функции findByParameters(parameter), массиву
  // calculateLaptops присваивается весь массив laptops,
  // после этого выполняется эта функция 3 раза с разными
  // параметрами, если они есть.
  // ============================================
    let insideArrCalc = [];
    if (filter[parameter].length > 0) {
      console.log('filter[parameter]',filter[parameter]);
      filter[parameter]
        .forEach(searchParam => {insideArrCalc = insideArrCalc
        .concat(calculateLaptops
        .filter(laptop => String(laptop[parameter]) === searchParam,
        // в объекте ноутбука число хранится, а значение value у чекбокса это строка. 
          console.log('!!!calculateLaptops',calculateLaptops)
          )
        )
      });
      calculateLaptops = insideArrCalc;
      console.log ('insideArrCalc',insideArrCalc)
    }
    return calculateLaptops;
  }
  function findExecuteNow() {
    calculateLaptops = laptops;
    findByParameters("size");
    findByParameters("color");
    findByParameters("releaseDate");
  }

  function render() {
    const markup = template(calculateLaptops);
    out.insertAdjacentHTML("afterbegin", markup);
  }

  function clear() {
    out.innerHTML = "";
    calculateLaptops = [];
    filter = {
      size: [],
      color: [],
      releaseDate: []
    };
  }

  searchBtn.addEventListener("click", event => {
    event.preventDefault();
    clear();
    filterInputs();
    findExecuteNow();
    render();
  });

  resetBtn.addEventListener("click", event => {
    event.preventDefault();
    clear();
    form.reset();
  });
