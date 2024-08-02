const validateEmail = (email) => {
  const parts = email.split("@");

  if (parts.length !== 2) return false;

  const user = parts[0];
  const domain = parts[1];

  if (user.length === 0 || domain.length === 0) return false;
  if (!domain.includes(".")) return false;
  if (domain.includes("..")) return false;

  return true;
};

const form = document.getElementById("contact-form");
const input = document.getElementById("floatingInput");
const successModal = new bootstrap.Modal(document.getElementById("success-modal"));
const errorModal = new bootstrap.Modal(document.getElementById("error-modal"));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    if (validateEmail(input.value)) {
      successModal.show();
    }
  }
  else {
    errorModal.show();
  }
  input.value = "";
});
