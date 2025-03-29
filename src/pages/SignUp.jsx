import { useState, useMemo } from "react";
import Input from "../components/common/Input";
import SelectWithSearch from "../components/common/SelectWithSearch";
import RadioButtonGroup from "../components/common/RadioButtonGroup";
import useFetch from "../hooks/useFetch";
import { API, REQUEST_OPTIONS } from "../config/api";
import { validateForm } from "../components/signup/validate";
import { formSchema } from "../config/formSchema";
import { isdCodes } from "../assets/isd";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formFields, setFormFields] = useState(
    formSchema.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { data: countries, loading: loadingCountries } = useFetch(
    API.COUNTRIES_LIST,
    REQUEST_OPTIONS
  );
  const { data: states, loading: loadingStates } = useFetch(
    formFields.country
      ? `${API.COUNTRIES_LIST}/${formFields.country}/states`
      : null,
    REQUEST_OPTIONS
  );
  const { data: cities, loading: loadingCities } = useFetch(
    formFields.country && formFields.state
      ? `${API.COUNTRIES_LIST}/${formFields.country}/states/${formFields.state}/cities`
      : null,
    REQUEST_OPTIONS
  );

  const countryOptions = useMemo(
    () =>
      Array.isArray(countries)
        ? countries.map(({ iso2, name }) => ({ value: iso2, label: name }))
        : [],
    [countries]
  );
  const stateOptions = useMemo(
    () =>
      states
        ? states.map(({ iso2, name }) => ({ value: iso2, label: name }))
        : [],
    [states]
  );

  const cityOptions = useMemo(
    () =>
      cities ? cities.map(({ name }) => ({ value: name, label: name })) : [],
    [cities]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => {
      let updatedFields = { ...prev, [name]: value };

      if (name === "country") updatedFields.state = updatedFields.city = "";
      if (name === "state") updatedFields.city = "";

      return updatedFields;
    });

    setErrors((prev) => ({
      ...prev,
      [name]: validateForm({ ...formFields, [name]: value })[name],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formFields);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const { email, password } = formFields;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    if (users.find((user) => user.email === email)) {
      setErrors({ email: "Email already exists!" });
      return;
    }

    // Store user data in localStorage
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please log in.");
    navigate("/login");
  };

  return (
    <>
      {loadingCountries || loadingStates || loadingCities ? (
        <p className="text-center text-black">Loading......</p>
      ) : (
        <div
          className="bg-neutral-200 flex min-h-[100vh] items-center justify-center"
          style={{
            background:
              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
          }}
        >
          <div className="w-full px-10 text-neutral-800">
            <div className="p-10 rounded-lg grid grid-cols-2 gap-5 bg-white">
              {formSchema.map((field) =>
                field.type === "select" ? (
                  <SelectWithSearch
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    value={formFields[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    options={
                      field.name === "country"
                        ? countryOptions
                        : field.name === "state"
                        ? stateOptions
                        : field.name === "city"
                        ? cityOptions
                        : field.name === "isdCode"
                        ? isdCodes
                        : []
                    }
                    error={errors[field.name]}
                  />
                ) : field.type === "radio" ? (
                  <div className="col-span-2">
                    <RadioButtonGroup
                      key={field.name}
                      label={field.label}
                      name={field.name}
                      options={field.options}
                      value={formFields[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      error={errors[field.name]}
                    />
                  </div>
                ) : (
                  <Input
                    key={field.name}
                    label={field.label}
                    icon={field.icon}
                    placeholder={`Enter your ${field.label}`}
                    type={field.type}
                    name={field.name}
                    value={formFields[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    error={errors[field.name]}
                  />
                )
              )}
              <div className="flex justify-end">
                <button
                  className="rounded mt-4 px-6 h-[40px] text-sm font-medium uppercase leading-normal text-white bg-pink-700"
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
