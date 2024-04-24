"use client";
import Dropdown from "@/components/shared/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import QuillEditor from "../settings/profile/QuillEditor";
import { EventModality } from "@/public/data/types";

const eventModalityOptions: { [key: string]: EventModality } = {
  "Presencial": EventModality.Presencial,
  "En línea": EventModality.Online,
  "Neerme": EventModality.Neerme,
};

const AgregarEvento = () => {
  const validationSchema = Yup.object().shape({
    eventName: Yup.string().required("El nombre del evento es obligatorio"),
    eventModality: Yup.string().required("La modalidad del evento es obligatoria"),
    slug: Yup.string().required("La liga del evento es obligatoria"),
    category: Yup.number().required("La categoría es obligatoria"),
    subcategory: Yup.string().required("La subcategoría es obligatoria"),
    startDate: Yup.date().required("La fecha de inicio es obligatoria"),
    endDate: Yup.date().required("La fecha de fin es obligatoria"),
    location: Yup.string().required("La dirección es obligatoria"),
    venue: Yup.string().required("El recinto es obligatorio"),
  });

  const initialValues = {
    eventName: "",
    eventModality: "",
    slug: "",
    category: "",
    subcategory: "",
    startDate: null,
    endDate: null,
    location: "",
    venue: "",
  };

  const generateSlug = (eventName: string) => {
    return eventName
      .toLowerCase() // Convertir a minúsculas
      .replace(/\s+/g, '-') // Reemplazar espacios por guiones
      .normalize('NFD') // Normalizar caracteres Unicode
      .replace(/[\u0300-\u036f]/g, '') // Eliminar diacríticos
      .replace(/[^\w\-]+/g, ''); // Eliminar caracteres especiales excepto guiones y alfanuméricos
  };

  return (
    <div className="box mb-4 xxxl:mb-6">
      <div className="mb-6 pb-6 bb-dashed flex justify-between items-center">
        <h4 className="h4">Agregar evento</h4>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="flex flex-col gap-6">
            <div className="box bg-secondary1/5 dark:bg-bg3 xl:p-8 grid grid-cols-2 gap-4 xxl:gap-6">
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="eventName" className="mb-4 md:text-lg font-medium block">Nombre del evento</label>
                <Field
                  type="text"
                  name="eventName"
                  maxLength="70"
                  className={`w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${errors.eventName && touched.eventName ? "border-red-500 dark:border-red-500" : ""
                    }`}
                  placeholder="Nombre del evento"
                  onChange={
                    (e: any) => {
                      setFieldValue("eventName", e.target.value)
                      setFieldValue("slug", generateSlug(e.target.value))
                    }
                  }
                />
                <ErrorMessage name="eventName" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                <span id="CountCharacterEventName" className="text-sm text-gray-500 dark:text-gray-300">
                  Max. 70/{values.eventName.length} caracteres
                </span>
              </div>

              <div className="col-span-2 md:col-span-1">
                <label htmlFor="eventModality" className="mb-4 md:text-lg font-medium block">Modalidad</label>
                <Field
                  as="select"
                  name="eventModality"
                  className={`w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${errors.eventModality && touched.eventModality ? "border-red-500 dark:border-red-500" : ""
                    }`}
                >
                  <option value="">Selecciona una opción</option>
                  {Object.keys(eventModalityOptions).sort().map((key) => (
                    <option
                      key={key}
                      value={eventModalityOptions[key]}
                      className="hover:bg-primary hover:text-white"
                      style={{ padding: "8px 0" }}
                    >
                      {key}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="eventModality" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>

              <div className="col-span-2">
                <label htmlFor="slug" className="md:text-lg font-medium block mb-4">
                  Slug
                </label>
                <div className="mt-2 flex rounded-md">
                  <Field
                    type="text"
                    name="slug"
                    value={generateSlug(values.eventName)}
                    placeholder="URL del evento"
                    className="w-full text-sm bg-n0 dark:bg-bg3 border border-n30 dark:border-n500 rounded-r-none rounded-3xl px-3 md:px-6 py-2 md:py-3"
                    disabled
                  />
                  <span className="inline-flex items-center rounded-r-3xl border border-r-0 border-n30 dark:border-n500 bg-primary/5 dark:bg-bg3 px-3 text-gray-500 sm:text-sm">
                    boletrics.com
                  </span>
                </div>
                <ErrorMessage name="slug" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>

              <div className="col-span-2 md:col-span-2">
                <label htmlFor="category" className="mb-4 md:text-lg font-medium block">Descripción</label>
                <QuillEditor />
              </div>
            </div>

            <div className="box bg-secondary1/5 dark:bg-bg3 xl:p-8 grid grid-cols-2 gap-4 xxl:gap-6">
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="category" className="md:text-lg font-medium block mb-4">Categoría</label>
                <Field
                  type="number"
                  name="category"
                  className={`w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${errors.category && touched.category ? "border-red-500" : ""
                    }`}
                  placeholder="Enter Number"
                />
                <ErrorMessage name="category" component="div" className="text-red-500 text-xs mt-1 ml-3" />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label htmlFor="subcategory" className="md:text-lg font-medium block mb-4">Subcategoría</label>
                <Field
                  type="text"
                  name="subcategory"
                  className={`w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${errors.subcategory && touched.subcategory ? "border-red-500" : ""
                    }`}
                  placeholder="Enter Name"
                />
                <ErrorMessage name="subcategory" component="div" className="text-red-500 text-xs mt-1 ml-3" />
              </div>
            </div>

            <div className="box bg-secondary1/5 dark:bg-bg3 xl:p-8 grid grid-cols-2 gap-4 xxl:gap-6">
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="startDate" className="md:text-lg font-medium block mb-4">Fecha inicio</label>
                <DatePicker
                  selected={values.startDate}
                  onChange={(date) => setFieldValue("startDate", date)}
                  dateFormat="dd/MM/yyyy"
                  className={`w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${errors.startDate && touched.startDate ? "border-red-500" : ""
                    }`}
                />
                <ErrorMessage name="startDate" component="div" className="text-red-500 text-xs mt-1 ml-3" />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label htmlFor="endDate" className="md:text-lg font-medium block mb-4">Fecha fin</label>
                <DatePicker
                  selected={values.endDate}
                  onChange={(date) => setFieldValue("endDate", date)}
                  dateFormat="dd/MM/yyyy"
                  className={`w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${errors.endDate && touched.endDate ? "border-red-500" : ""
                    }`}
                />
                <ErrorMessage name="endDate" component="div" className="text-red-500 text-xs mt-1 ml-3" />
              </div>
            </div>

            <div className="box bg-secondary1/5 dark:bg-bg3 xl:p-8 grid grid-cols-2 gap-4 xxl:gap-6">
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="location" className="md:text-lg font-medium block mb-4">Dirección</label>
                <Field
                  type="number"
                  name="location"
                  className={`w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${errors.location && touched.location ? "border-red-500" : ""
                    }`}
                  placeholder="Enter Money"
                />
                <ErrorMessage name="location" component="div" className="text-red-500 text-xs mt-1 ml-3" />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label htmlFor="venue" className="md:text-lg font-medium block mb-4">Recinto</label>
                <Field
                  type="number"
                  name="venue"
                  className={`w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${errors.venue && touched.venue ? "border-red-500" : ""
                    }`}
                  placeholder="Venue"
                />
                <ErrorMessage name="venue" component="div" className="text-red-500 text-xs mt-1 ml-3" />
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 mt-2">
              <button type="submit" className="btn">Crear evento</button>
              <button type="button" className="btn-outline">Save as Draft</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AgregarEvento;
