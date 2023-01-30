export const formValidations = {
  email: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
      message: "El correo debe tener un formato valido",
    },
  },
  password: { required: "Este campo es requerido", minLength: 6 },
  password2: { required: "Este campo es requerido", minLength: 6 },
  firstname: { required: "Este campo es requerido", minLength: 6 },
  lastname: { required: "Este campo es requerido", minLength: 6 },
  username: { required: "Este campo es requerido", minLength: 6 },
  address: { required: "Este campo es requerido", minLength: 6 },
  idnumber: { required: "Este campo es requerido", minLength: 6 },
  phone1: { required: "Este campo es requerido", minLength: 6 },
  country: { required: "Este campo es requerido" },
  state: { required: "Este campo es requerido", minLength: 6 },
  city: { required: "Este campo es requerido", minLength: 6 },
  age: { required: "Este campo es requerido", minLength: 6 },
  course: { required: "Este campo es requerido", minLength: 6 },
  socialmedia: { required: "Este campo es requerido", minLength: 6 },
  gender: { required: "Este campo es requerido", minLength: 6 },
  terms: { required: "Este campo es requerido", minLength: 6 },
};
