"use client";

import Image from "next/image";
import countriesData from "./../../../public/data/countryData.json"
import statesData from "./../../../public/data/statesData.json"
import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Fragment, useRef, useState, ChangeEvent } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface Country {
  id: number;
  name: string;
}

interface State {
  id: number;
  id_country: number;
  name: string;
}

const countries: Country[] = [
  { id: 42, name: "México" },
  ...countriesData.countries.map(country => ({ id: country.id, name: country.name }))
];

const Profile = () => {

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const cancelButtonRef = useRef(null)

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("El nombre es requerido"),
    lname: Yup.string().required("Los apellidos son requeridos"),
    email: Yup.string().email("Formato de correo electrónico inválido").required("El correo electrónico es requerido"),
    phone: Yup.string().required("El teléfono es requerido"),
    gender: Yup.string().required("El género es requerido"),
  });

  const addressValidationSchema = Yup.object().shape({
    country: Yup.string().required("El país es requerido"),
    state: Yup.string().required("El estado es requerido"),
    calles: Yup.string().required("La dirección es requerida"),
    num_ext: Yup.string().required("El número exterior es requerido"),
    colonia: Yup.string().required("La colonia es requerida"),
    zip: Yup.string()
      .matches(/^\d{1,6}$/, { message: 'El código postal debe contener solo números y tener como máximo 6 caracteres' })
      .required("El código postal es requerido")
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Verificar tipo y tamaño del archivo
      if (/\.(jpg|jpeg|png)$/i.test(file.name) && file.size <= 1024 * 1024) {
        // Crear una URL local para previsualizar la imagen
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            setImagePreview(reader.result.toString());
          }
        };
        reader.readAsDataURL(file);
      } else {
        // Si el archivo no cumple con los requisitos, mostrar un mensaje de error
        alert('El archivo debe ser de tipo JPG, JPEG o PNG y no puede superar los 150KB.');
      }
    }
  };

  const handleCheckboxChange = () => {
    setConfirmDelete(!confirmDelete);
  };

  const handleDeleteButtonClick = () => {
    if (confirmDelete) {
      setOpenModal(true);
    }
  };

  const handleDelete = () => {
    // Aquí ejecutas la lógica para eliminar la cuenta
    console.log('Eliminando la cuenta...');
    setOpenModal(false); // Cerrar el modal después de la eliminación
  };

  return (
    <div className="grid grid-cols-12 gap-4 xxxxxl:gap-6">
      <div className="col-span-12 lg:col-span-6">
        <div className="box xxl:p-8 xxxl:p-10">
          <h4 className="h4 bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
            Configuración de la cuenta
          </h4>
          <p className="text-lg font-medium mb-4">Foto de perfil</p>
          <div className="flex flex-wrap gap-6 xxl:gap-10 items-center bb-dashed mb-6 pb-6">
            {imagePreview ? (
              <Image
                src={imagePreview}
                className="rounded-xl"
                alt="Preview"
                width={120}
                height={120}
              />
            ) : (
              <Image
                src="/images/placeholder.png"
                width={120}
                height={120}
                className="rounded-xl"
                alt="img"
              />
            )}
            <div className="flex gap-4">
              <label htmlFor="photo-upload" className="btn">
                Subir foto
              </label>
              <input
                type="file"
                id="photo-upload"
                className="hidden"
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
              />
              {/* <button className="btn-outline" onClick={() => setImagePreview(null)}>
                Cancelar
              </button> */}
            </div>
          </div>
          <Formik
            initialValues={{
              fname: "",
              lname: "",
              email: "",
              phone: "",
              gender: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isSubmitting, dirty, resetForm }) => (
              <Form className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxxxl:gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="fname" className="md:text-lg font-medium block mb-4">
                    Nombre/s
                  </label>
                  <Field
                    type="text"
                    name="fname"
                    placeholder="Tus nombre/s"
                    className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                  />
                  <ErrorMessage name="fname" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="lname" className="md:text-lg font-medium block mb-4">
                    Apellidos
                  </label>
                  <Field
                    type="text"
                    name="lname"
                    placeholder="Ambos apellidos"
                    className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                  />
                  <ErrorMessage name="lname" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="email" className="md:text-lg font-medium block mb-4">
                    Correo electrónico
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                  />
                  <ErrorMessage name="email" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="phone" className="md:text-lg font-medium block mb-4">
                    Teléfono
                  </label>
                  <div className="mt-2 flex rounded-md">
                    <span className="inline-flex items-center rounded-l-3xl border border-r-0 border-n30 dark:border-n500 bg-primary/5 dark:bg-bg3 px-3 text-gray-500 sm:text-sm">
                      +52
                    </span>
                    <Field
                      type="text"
                      name="phone"
                      placeholder="10 dígitos"
                      className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-l-none rounded-3xl px-3 md:px-6 py-2 md:py-3"
                    />
                  </div>
                  <ErrorMessage name="phone" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>

                <div className="col-span-2">
                  <label htmlFor="gender" className="md:text-lg font-medium block mb-4">
                    Género:
                  </label>
                  <div className="flex gap-5">
                    <label htmlFor="male" className="flex items-center gap-2 cursor-pointer">
                      <Field type="radio" id="male" name="gender" value="male" className="accent-secondary1 scale-125" />{" "}
                      Masculino
                    </label>
                    <label htmlFor="female" className="flex items-center gap-2 cursor-pointer">
                      <Field type="radio" id="female" name="gender" value="female" className="accent-secondary1 scale-125" />{" "}
                      Femenino
                    </label>
                    <label htmlFor="other" className="flex items-center gap-2 cursor-pointer">
                      <Field type="radio" id="other" name="gender" value="other" className="accent-secondary1 scale-125" />{" "}
                      Otro
                    </label>
                    <ErrorMessage name="gender" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex flex-col gap-4">
                    <span className="text-sm">
                      Al usar esta plataforma, acepto la política de privacidad
                      <br />
                      Al usar esta plataforma, acepto todos los términos y condiciones
                    </span>
                  </div>
                  <div className="flex mt-6 xxl:mt-10 gap-4">
                    {
                      dirty ?
                        <button className="px-5 bg-primary-500 rounded-full text-white" type="submit" disabled={isSubmitting}>
                          Guardar cambios
                        </button>
                        :
                        <button className="px-5 bg-primary-200 rounded-full text-white" disabled>
                          Guardar cambios
                        </button>
                    }
                    <button
                      type="button"
                      className="btn-outline px-5"
                      onClick={() => {
                        resetForm();
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        {/* Address */}
        {/* <div className="box xxl:p-8 xxxl:p-10 mb-6">
          <h4 className="h4 bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">Dirección</h4>
          <Formik
            initialValues={{
              country: 42,
              state: "1753",
              calles: "14 a sur",
              num_ext: "11102",
              num_int: "4",
              colonia: "INFONAVIT San Jorge",
              zip: "72587",
            }}
            validationSchema={addressValidationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isSubmitting, dirty, resetForm, setFieldValue }) => (
              <Form className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="country" className="md:text-lg font-medium block mb-4">
                    País
                  </label>
                  <Field
                    as="select"
                    name="country"
                    className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const selectedCountryId = parseInt(e.target.value);
                      const country = countries.find((country) => country.id === selectedCountryId);
                      setFieldValue("country", selectedCountryId); // Aquí se establece el valor en el formulario usando setFieldValue
                      setSelectedCountry(country || { id: 0, name: "Selecciona un país" });
                    }}
                  >
                    <option value="">Selecciona un país</option>
                    {countries.map((country: Country, index: number) => (
                      <option key={index} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="country" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="state" className="md:text-lg font-medium block mb-4">
                    Estado
                  </label>
                  <Field
                    as="select"
                    name="state"
                    className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                  >
                    <option value="">Selecciona un estado</option>
                    {states
                      .filter((state) => state.id_country === selectedCountry.id)
                      .map((state: State, index: number) => (
                        <option key={index} value={state.id}>
                          {state.name}
                        </option>
                      ))}
                  </Field>
                  <ErrorMessage name="state" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="calles" className="md:text-lg font-medium block mb-4">
                    Calles
                  </label>
                  <Field
                    type="text"
                    name="calles"
                    placeholder="Ingresa Dirección 1"
                    className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                  />
                  <ErrorMessage name="calles" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="num_ext" className="md:text-lg font-medium block mb-4">
                    Número exterior
                  </label>
                  <Field
                    type="text"
                    name="num_ext"
                    placeholder="Ingresa Dirección 1"
                    className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                  />
                  <ErrorMessage name="num_ext" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="num_int" className="md:text-lg font-medium block mb-4">
                    Número interior
                  </label>
                  <Field
                    type="text"
                    name="num_int"
                    placeholder="Ingresa Dirección 1"
                    className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                  />
                  <ErrorMessage name="num_int" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="colonia" className="md:text-lg font-medium block mb-4">
                    Colonia
                  </label>
                  <Field
                    type="text"
                    name="colonia"
                    placeholder="Ingresa tu colonia"
                    className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                  />
                  <ErrorMessage name="colonia" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="zip" className="md:text-lg font-medium block mb-4">
                    Código Postal
                  </label>
                  <Field
                    type="text"
                    name="zip"
                    placeholder="Ingresa Código Postal"
                    className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                  />
                  <ErrorMessage name="zip" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                </div>
                <div className="col-span-2 flex pt-4 gap-4">
                  {
                    dirty ?
                      <button className="px-5 bg-primary-500 rounded-full text-white" type="submit" disabled={isSubmitting}>
                        Guardar cambios
                      </button>
                      :
                      <button className="px-5 bg-primary-200 rounded-full text-white" disabled>
                        Guardar cambios
                      </button>
                  }
                  <button
                    className="btn-outline px-5"
                    type="button"
                    onClick={() => {
                      resetForm();
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div> */}
        {/* Privacy */}
        {/* <div className="box xxl:p-8 xxxl:p-10 mb-6">
          <h4 className="h4 bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">Privacy</h4>
          <form className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
            <div className="col-span-2">
              <label
                htmlFor="privacy"
                className="md:text-lg font-medium block mb-4">
                Who can see your profile photo?
              </label>
              <Dropdown
                items={privacylist}
                setSelected={setPrivacy}
                selected={privacy}
                btnClass="md:py-3 py-2.5 w-full rounded-[32px] md:px-5"
                contentClass="w-full"
              />
            </div>
            <div className="col-span-2 flex pt-4 gap-4">
              <button className="btn px-5">Save Changes</button>
              <button className="btn-outline px-5">Cancel</button>
            </div>
          </form>
        </div> */}
        {/* Delete Your Account */}
        <div className="box xxl:p-8 xxxl:p-10 mb-6">
          <h4 className="h4 bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
            Elimina tu cuenta
          </h4>
          <form className="mt-6 xl:mt-8 gap-4 xxxl:gap-6">
            <p className="mb-4">
              Cuando elimina su cuenta, pierde el acceso a los servicios y eliminamos permanentemente sus datos personales. Puedes cancelar la eliminación durante 30 días.
              <br />
            </p>
            <input
              type="checkbox"
              id="confirmDelete"
              name="confirmDelete"
              className="mr-2"
              checked={confirmDelete}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="confirmDelete" className="mb-4">Confirmo que deseo eliminar mi cuenta.</label>
            <div className="col-span-2 flex mt-6 xxl:mt-10 gap-4">
              <button
                type="button"
                className={`btn-outline px-5 ${confirmDelete ? '' : 'cursor-not-allowed opacity-50'}`}
                onClick={handleDeleteButtonClick}
                disabled={!confirmDelete}
              >
                Eliminar
              </button>
            </div>
          </form>
          <Transition.Root show={openModal} as={Fragment}>
            <Dialog
              as="div"
              className="fixed z-30 inset-0 overflow-y-auto"
              initialFocus={cancelButtonRef}
              onClose={() => setOpenModal(false)}
            >
              <div className="flex items-center justify-center min-h-screen">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div className="p-8">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-medium text-gray-900">Desactivar cuenta</h3>
                          <div className="mt-2 text-sm text-gray-500">
                            <p>
                              ¿Está seguro de que desea desactivar su cuenta? Todos sus datos se eliminarán permanentemente de nuestros servidores para siempre. Esta acción no se puede deshacer.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          type="button"
                          className="mr-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-600 rounded-md shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          onClick={() => setOpenModal(false)}
                          ref={cancelButtonRef}
                        >
                          Cancelar
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          onClick={handleDelete}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </div>
    </div>
  );
};

export default Profile;
