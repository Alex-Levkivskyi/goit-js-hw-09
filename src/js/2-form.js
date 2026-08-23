
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
let formData = {
  email: "",
  message: "",
};




const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;

  try {
    const parsedData = JSON.parse(savedData);
    formData = parsedData;
    
    Object.keys(formData).forEach((key) => {
      if (form.elements[key]) {
        form.elements[key].value = formData[key];
      }
    });
  } catch (error) {
    console.error("Error parsing data from localStorage", error);
  }
};

populateForm();



form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (!emailValue || !messageValue) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
});