"use client"

import * as React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

interface Rule {
  text: string;
  fulfilled: boolean;
}

const rules: Rule[] = [
  { text: "Mínimo 8 caracteres", fulfilled: false },
  { text: "Al menos 1 letra minúscula (a-z)", fulfilled: false },
  { text: "Al menos 1 letra mayúscula (A-Z)", fulfilled: false },
  { text: "Al menos 1 número (0-9)", fulfilled: false },
  { text: "Al menos 1 carácter especial", fulfilled: false },
];

const ChangePassword: React.FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPassNew, setShowPassNew] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [fulfilledRules, setFulfilledRules] = useState<boolean[]>(() => rules.map(() => false));

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Se requiere la contraseña antigua"),
    newPassword: Yup.string()
      .required("Se requiere la nueva contraseña")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(/[a-z]/, "La contraseña debe contener una letra minúscula")
      .matches(/[A-Z]/, "La contraseña debe contener una letra mayúscula")
      .matches(/[0-9]/, "La contraseña debe contener un número")
      .matches(/[^a-zA-Z0-9]/, "La contraseña debe contener un carácter especial"),
    confirmPassword: Yup.string()
      .required("Se requiere confirmar la contraseña")
      .oneOf([Yup.ref("newPassword")], "Las contraseñas deben coincidir"),
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const updatedFulfilledRules = rules.map((rule) => {
      switch (rule.text) {
        case "Mínimo 8 caracteres":
          return value.length >= 8;
        case "Al menos 1 letra minúscula (a-z)":
          return /[a-z]/.test(value);
        case "Al menos 1 letra mayúscula (A-Z)":
          return /[A-Z]/.test(value);
        case "Al menos 1 número (0-9)":
          return /[0-9]/.test(value);
        case "Al menos 1 carácter especial":
          return /[^a-zA-Z0-9]/.test(value);
        default:
          return false;
      }
    });
    setFulfilledRules(updatedFulfilledRules);
  };

  return (
    <div className="box xl:p-8 xxl:p-10">
      <h4 className="h4 bb-dashed pb-4 mb-4 md:mb-6 md:pb-6">
        Cambiar contraseña
      </h4>
      <Formik
        initialValues={{ oldPassword: "", newPassword: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission with validated values
          console.log(values);
        }}
      >
        {({ isSubmitting, dirty, setFieldValue, resetForm }) => (
          <Form className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="oldPassword" className="md:text-lg font-medium block mb-4">
                Contraseña actual
              </label>
              <div className=" bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 relative">
                <Field
                  type={showPass ? "text" : "password"}
                  name="oldPassword"
                  placeholder="Contraseña actual"
                  className="w-11/12 text-sm bg-transparent"
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute ltr:right-5 rtl:left-5 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  {showPass ? <IconEye /> : <IconEyeOff />}
                </span>
              </div>
              <ErrorMessage name="oldPassword" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="newPassword" className="md:text-lg font-medium block mb-4">
                Nueva contraseña
              </label>
              <div className=" bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 relative">
                <Field
                  type={showPassNew ? "text" : "password"}
                  name="newPassword"
                  placeholder="Nueva contraseña"
                  className="w-11/12 text-sm bg-transparent"
                  onChange={
                    (e: any) => {
                      handlePasswordChange(e);
                      setFieldValue("newPassword", e.target.value, false);
                    }
                  }
                />
                <span
                  onClick={() => setShowPassNew(!showPassNew)}
                  className="absolute ltr:right-5 rtl:left-5 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  {showPassNew ? <IconEye /> : <IconEyeOff />}
                </span>
              </div>
              <ErrorMessage name="newPassword" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
            </div>
            <div className="col-span-2">
              <label htmlFor="confirmPassword" className="md:text-lg font-medium block mb-4">
                Confirmar contraseña
              </label>
              <div className=" bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 relative">
                <Field
                  type={showPassConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirmar contraseña"
                  className="w-11/12 text-sm bg-transparent"
                />
                <span
                  onClick={() => setShowPassConfirm(!showPassConfirm)}
                  className="absolute ltr:right-5 rtl:left-5 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  {showPassConfirm ? <IconEye /> : <IconEyeOff />}
                </span>
              </div>
              <ErrorMessage name="confirmPassword" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="font-medium text-lg mb-4">
                La nueva contraseña debe contener:
              </p>
              <ul className="marker:text-primary list-disc flex flex-col gap-3 list-inside">
                {rules.map((rule, index) => (
                  <li key={index} className={fulfilledRules[index] ? "text-green-500" : ""}>
                    {rule.text} {fulfilledRules[index] && <span>&#10004;</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 flex gap-4">
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
              {/* <button className="btn px-5" type="submit" disabled={isSubmitting || !dirty}>
                Guardar cambios
              </button> */}
              <button
                type="button"
                className="btn-outline px-5"
                onClick={() => {
                  resetForm();
                  setFulfilledRules(rules.map(() => false));
                }}
              >
                Cancelar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
