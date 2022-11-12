console.log("OK");

const tag_list = $(".nav-item");
const change = $(".tab-line"); //TO CHANGE THE TAG LINE POSITION

const form_toggle = $(".form-toogle"); // THIS IS THE FORMS LIST, WE WOULD USE IT TO SWITCH BETWEEN FORMS ON CLICK

console.log(form_toggle, "TOGGLE");

console.log(change);
$(".nav-item").click(function () {
  for (let i = 0; i < tag_list.length; i++) {
    tag_list[i].className = "nav-item";

    // we want to remove all the forms
    //Then we listen to the tab being clicked and show the approriate form
    // This is because we don't want to overload the class when we use jquery to add or remover
    // So we clear the class name to only be 'form-toggle' then we can change it in the switch statement

    form_toggle[i].className = "form-toogle";
  }
  console.log(this, "THIS");
  this.className += " nav__item--active";

  //   FIRST REVERT THE TAB LINE ACTIVE ELEMENT
  change[0].className = "tab-line";

  switch (this.innerText) {
    case "Personal Info":
      change[0].className += " modify-left";
      form_toggle[1].className += " insert";
      form_toggle[0].className += " remove";
      form_toggle[2].className += " remove";
      break;
    case "Billing Info":
      change[0].className += " modify-center";
      form_toggle[1].className += " remove";
      form_toggle[0].className += " insert";
      form_toggle[2].className += " remove";

      break;
    case "Confirm Payment":
      change[0].className += " modify-right";
      form_toggle[1].className += " remove"
      form_toggle[0].className += " remove"
      form_toggle[2].className += " insert"

      break;
    default:
      change[0].className += " modify-center";
  }
});

console.log(change);
