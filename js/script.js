const navigation = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navigation.classList.add("scrolled");
  } else {
    navigation.classList.remove("scrolled");
  }
});

// Получаем ссылку на форму по её ID
const form = document.getElementById("myForm");

// Обработчик события отправки формы
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  // Получаем значения полей формы
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const product = document.getElementById("product").value;
  const message = document.getElementById("message").value;
  const agreement = document.getElementById("agreement").checked;

  if (!agreement) {
    alert("Пожалуйста, согласитесь с условиями перед отправкой формы.");
    return;
  }

  form.reset();

  alert("Форма успешно отправлена!");
});

// const navContainer = document.querySelector(".nav-container"); // Add the dot before "nav-container"
// const links = document.querySelectorAll(".link");
// console.log(links);

// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active", "");
//     this.className += " active";
//   });
// }

const arr = [
  "../img/img1-min.jpg",
  "../img/img2-min.jpg",
  "../img/img3-min.jpg",
  "../img/img4-min.jpg",
  "../img/img5-min.jpg",
];
let counter = -1;

function updateImageCounter() {
  let counterElement = document.getElementById("image-counter");
  counterElement.textContent = "0" + counter + 1 + "/" + "0" + arr.length;
  counterElement.textContent = `0${counter + 1}     /     0${arr.length}`;
}
function right_arrow() {
  let obj = document.getElementById("img");
  obj.style.opacity = 0;
  setTimeout(function () {
    if (counter < arr.length - 1) counter++;
    else counter = 0;
    obj.src = arr[counter];
    obj.style.opacity = 1;
    updateImageCounter();
  }, 300);
}

function left_arrow() {
  let obj = document.getElementById("img");
  obj.style.opacity = 0;
  setTimeout(function () {
    if (counter > 0) counter--;
    else counter = arr.length - 1;
    obj.src = arr[counter];
    obj.style.opacity = 1;
    updateImageCounter();
  }, 300);
}

right_arrow();

// const formInputs = document.querySelectorAll(
//   ".contact-form input, .contact-form textarea"
// );

// formInputs.forEach((input) => {
//   input.addEventListener("input", () => {
//     if (input.value.trim() !== "") {
//       input.classList.add("active");
//     } else {
//       input.classList.remove("active");
//     }
//   });
// });

let customInput = document.querySelectorAll(".custom-input");
let hold = document.querySelectorAll(".my-placeholder");

for (let i = 0; i < customInput.length; i++) {
  customInput[i].addEventListener("input", function () {
    hold[i].style.display = this.value === "" ? "inline" : "none";
  });

  customInput[i].addEventListener("blur", function () {
    if (this.value === "") {
      hold[i].style.display = "inline";
    }
  });
}
document.querySelector("form").addEventListener("submit", function (event) {
  // Отменяем перезагрузку страницы
  event.preventDefault();

  // Дополнительные действия по отправке формы (например, AJAX-запрос)
  // ...
});
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 2;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset - animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        animItem.classList.remove("_active");
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
      (scrollTop = window.pageYOffset || document.documentElement.scrollTop);
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}

setTimeout(() => {
  animOnScroll();
}, 300);
