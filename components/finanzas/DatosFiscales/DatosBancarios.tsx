"use client";

import countriesData from "../../../public/data/countryData.json"
import statesData from "../../../public/data/statesData.json"
import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from 'react'
import bankData from "../../../public/data/bankData.json"

interface BankData {
    clabe: string | number;
    marca: string;
    nombre: string;
}

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

const states: State[] = [
    ...statesData.states.map(state => ({ id: state.id, id_country: state.id_country, name: state.name }))
];

const sortedBanks: BankData[] = bankData.sort((a, b) => a.marca.localeCompare(b.marca));

const DatosBancarios = () => {

    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [disabledCheckbox, setDisabledCheckbox] = useState(true);
    const [disabledCheckboxDF, setDisabledCheckboxDF] = useState(true);

    const validationSchema = Yup.object().shape({
        bank_name: Yup.string().required("El nombre del banco es requerido"),
        bank_clabe: Yup.string()
            .matches(/^\d{1,18}$/, 'La CLABE debe tener 18 dígitos y ser solo números')
            .required("La CLABE es requerida"),
        bank_account: Yup.string().required("La cuenta es requerida"),
        bank_name_user: Yup.string().required("El nombre de la tarjeta es requerido"),
        RFC: Yup.string()
            .required("El RFC es requerido")
            .min(12, "El RFC debe tener al menos 12 caracteres")
            .max(13, "El RFC debe tener como máximo 13 caracteres"),
        pf_pm: Yup.string().required("Requerido"),
    });

    const validationSchemaDF = Yup.object().shape({
        fname: Yup.string().required("El nombre es requerido"),
        lname: Yup.string().required("Los apellidos son requeridos"),
        email: Yup.string().email("Formato de correo electrónico inválido").required("El correo electrónico es requerido"),
        phone: Yup.string().required("El teléfono es requerido"),
        r_social: Yup.string().required("La razón social es requerida"),
        rfcdf: Yup.string().required("El RFC es requerido"),
        pf_pm_df: Yup.string().required("Requerido"),
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

    return (
        <div className="grid grid-cols-12 gap-4 xxxxxl:gap-6">
            <div className="col-span-12 lg:col-span-12">
                <div className="box xxl:p-8 xxxl:p-10">
                    <h4 className="h4 bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
                        Cuenta bancaria
                    </h4>
                    <small>Sin estos datos, no podremos reembolsar tus ingresos.</small>
                    <Formik
                        initialValues={{
                            bank_name: "",
                            bank_clabe: "",
                            bank_account: "",
                            bank_name_user: "",
                            RFC: "",
                            pf_pm: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ isSubmitting, dirty, resetForm, setFieldValue, setFieldTouched }) => (
                            <Form className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxxxl:gap-6">
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="bank_name" className="md:text-lg font-medium block mb-4">
                                        Banco
                                    </label>
                                    <Field
                                        as="select"
                                        name="bank_name"
                                        className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                                    >
                                        {/* Opción por defecto */}
                                        <option value="">Seleccionar banco</option>
                                        {/* Mapear los bancos ordenados */}
                                        {sortedBanks.map((bank) => (
                                            <option key={bank.clabe} value={bank.marca}>
                                                {bank.marca}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="bank_name" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="bank_account" className="md:text-lg font-medium block mb-4">
                                        No. Cuenta
                                    </label>
                                    <Field
                                        type="text"
                                        name="bank_account"
                                        placeholder="Cuenta"
                                        className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                                    />
                                    <ErrorMessage name="bank_account" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="bank_clabe" className="md:text-lg font-medium block mb-4">
                                        CLABE
                                    </label>
                                    <Field
                                        type="text"
                                        name="bank_clabe"
                                        placeholder="000000000000000000"
                                        maxLength={18}
                                        className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                                    />
                                    <ErrorMessage name="bank_clabe" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="bank_name_user" className="md:text-lg font-medium block mb-4">
                                        Nombre del tarjetahabiente
                                    </label>
                                    <Field
                                        type="text"
                                        name="bank_name_user"
                                        placeholder="Nombre completo"
                                        className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                                    />
                                    <ErrorMessage name="bank_name_user" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="RFC" className="md:text-lg font-medium block mb-4">
                                        RFC
                                    </label>
                                    <Field
                                        type="text"
                                        name="RFC"
                                        placeholder="RFC"
                                        maxLength={13}
                                        className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                                        onChange={
                                            (e: any) => {
                                                setFieldValue("RFC", e.target.value)
                                                if (e.target.value.length == 12) {
                                                    setFieldValue("pf_pm", "moral")
                                                    setDisabledCheckbox(true)
                                                    //añade aquí un disabled al input con name pf_pm
                                                }
                                                else if (e.target.value.length == 13) {
                                                    setFieldValue("pf_pm", "fisica")
                                                    setDisabledCheckbox(true)
                                                    //añade aquí un disabled al input con name pf_pm
                                                }
                                                else if (e.target.value.length < 12) {
                                                    setFieldValue("pf_pm", null)
                                                    setDisabledCheckbox(true)
                                                }
                                            }
                                        }
                                    />
                                    <ErrorMessage name="RFC" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="pf_pm" className="md:text-lg font-medium block mb-4">
                                        Persona:
                                    </label>
                                    <div className="flex gap-5">
                                        <label htmlFor="fisica" className="flex items-center gap-2 cursor-pointer">
                                            <Field
                                                type="radio"
                                                id="fisica"
                                                name="pf_pm"
                                                value="fisica"
                                                className="accent-secondary1 scale-125"
                                                disabled={disabledCheckbox}
                                            />{" "}
                                            Física
                                        </label>
                                        <label htmlFor="moral" className="flex items-center gap-2 cursor-pointer">
                                            <Field
                                                type="radio"
                                                id="moral"
                                                name="pf_pm"
                                                value="moral"
                                                className="accent-secondary1 scale-125"
                                                disabled={disabledCheckbox}
                                            />{" "}
                                            Moral
                                        </label>
                                        <ErrorMessage name="pf_pm" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                                    </div>
                                </div>
                                <div className="col-span-2">
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
                                <div id="datos-fiscales"></div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
                {/* Address */}
                <div className="box xxl:p-8 xxxl:p-10 mb-6">
                    <h4 className="h4 bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">Datos fiscales</h4>
                    <small>Sin estos datos, no podremos reembolsar tus ingresos.</small>
                    <Formik
                        initialValues={{
                            fname: "",
                            lname: "",
                            email: "",
                            phone: "",
                            r_social: "",
                            rfcdf: "",
                            pf_pm_df: "",
                        }}
                        validationSchema={validationSchemaDF}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ isSubmitting, dirty, resetForm, setFieldValue }) => (
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
                                    <label htmlFor="r_social" className="md:text-lg font-medium block mb-4">
                                        Razon social
                                    </label>
                                    <Field
                                        type="text"
                                        name="r_social"
                                        placeholder="Razón social"
                                        className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                                    />
                                    <ErrorMessage name="r_social" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="RFC" className="md:text-lg font-medium block mb-4">
                                        RFC
                                    </label>
                                    <Field
                                        type="text"
                                        name="RFC"
                                        placeholder="RFC"
                                        maxLength={13}
                                        className="w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3"
                                        onChange={
                                            (e: any) => {
                                                setFieldValue("RFC", e.target.value)
                                                if (e.target.value.length == 12) {
                                                    setFieldValue("pf_pm_df", "moral")
                                                    setDisabledCheckboxDF(true)
                                                }
                                                else if (e.target.value.length == 13) {
                                                    setFieldValue("pf_pm_df", "fisica")
                                                    setDisabledCheckboxDF(true)
                                                }
                                                else if (e.target.value.length < 12) {
                                                    setFieldValue("pf_pm_df", null)
                                                    setDisabledCheckboxDF(true)
                                                }
                                            }
                                        }
                                    />
                                    <ErrorMessage name="RFC" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="pf_pm_df" className="md:text-lg font-medium block mb-4">
                                        Persona:
                                    </label>
                                    <div className="flex gap-5">
                                        <label htmlFor="fisica" className="flex items-center gap-2 cursor-pointer">
                                            <Field
                                                type="radio"
                                                id="fisica"
                                                name="pf_pm_df"
                                                value="fisica"
                                                className="accent-secondary1 scale-125"
                                                disabled={disabledCheckboxDF}
                                            />{" "}
                                            Física
                                        </label>
                                        <label htmlFor="moral" className="flex items-center gap-2 cursor-pointer">
                                            <Field
                                                type="radio"
                                                id="moral"
                                                name="pf_pm_df"
                                                value="moral"
                                                className="accent-secondary1 scale-125"
                                                disabled={disabledCheckboxDF}
                                            />{" "}
                                            Moral
                                        </label>
                                        <ErrorMessage name="pf_pm_df" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                                    </div>
                                </div>
                                <div className="col-span-2">
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
                <div className="box xxl:p-8 xxxl:p-10 mb-6">
                    <h4 className="h4 bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">Dirección fiscal</h4>
                    <small>Sin estos datos, no podremos reembolsar tus ingresos.</small>
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
                </div>
            </div>

        </div>
    );
};

export default DatosBancarios;
