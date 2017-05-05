function addressValidate(input) {
  if (input.value === "") {
    input.style.background = 'Yellow';
  }
}

let addressForm = document.shippingAddressForm;

addressForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let firstName = addressForm.firstName;
  let lastName = addressForm.lastName;
  let address = addressForm.address;
  let city = addressForm.city;
  let state = addressForm.state;
  let zipCode = addressForm.zipCode;
  let phoneNumber = addressForm.phoneNumber;
  let email = addressForm.email;

  addressValidate(firstName);
  addressValidate(lastName);
  addressValidate(address);
  addressValidate(city);
  addressValidate(state);
  addressValidate(zipCode);
  addressValidate(phoneNumber);
  addressValidate(email);
});
