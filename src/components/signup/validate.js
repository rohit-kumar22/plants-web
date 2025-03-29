export const validateForm = (formFields) => {
  const errors = {};

  // Required Fields Validation
  const requiredFields = [
    "userLevel",
    "firstName",
    "lastName",
    "email",
    "address",
    "country",
    "state",
    "city",
    "pincode",
    "isdCode",
    "phoneNumber",
    "password",
    "confirmPassword",
  ];

  requiredFields.forEach((field) => {
    if (!formFields[field]) {
      errors[field] = `${field.replace(/([A-Z])/g, " $1")} is required.`;
    }
  });

  // First Name & Last Name: No spaces & only one word
  if (formFields.firstName && !/^\S+$/.test(formFields.firstName)) {
    errors.firstName = "First name must be a single word without spaces.";
  }
  if (formFields.lastName && !/^\S+$/.test(formFields.lastName)) {
    errors.lastName = "Last name must be a single word without spaces.";
  }

  // Email Validation
  if (
    formFields.email &&
    !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formFields.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  // Phone Number: Exactly 10 digits
  if (formFields.phoneNumber && !/^\d{10}$/.test(formFields.phoneNumber)) {
    errors.phoneNumber = "Phone number must be exactly 10 digits.";
  }

  // Pincode: 6-digit validation
  if (formFields.pincode && !/^\d{6}$/.test(formFields.pincode)) {
    errors.pincode = "Pincode must be exactly 6 digits.";
  }

  // Password: 8-15 characters, 1 uppercase, 1 number, 1 special character
  if (
    formFields.password &&
    !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      formFields.password
    )
  ) {
    errors.password =
      "Password must be 8-15 characters, include 1 uppercase letter, 1 number, and 1 special character.";
  }

  // Confirm Password: Must match Password
  if (
    formFields.confirmPassword &&
    formFields.password !== formFields.confirmPassword
  ) {
    errors.confirmPassword = "Passwords do not match.";
  }

  // Address: At least 20 words
  if (formFields.address && formFields.address.trim().split(/\s+/).length < 3) {
    errors.address = "Address must be at least 20 words.";
  }

  return errors;
};
