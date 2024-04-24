"use client"

import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Contract, ContractStatus } from './../../../public/data/types';

interface ContratoFormProps {
    contractData: Contract | null; // Accepts null if there is no data available
}

const ContratoForm: React.FC<ContratoFormProps> = ({ contractData }) => {
    const [disabledCheckbox, setDisabledCheckbox] = useState(true);

    const initialValues: Contract = contractData || {
        id: 0,
        idUser: 0,
        idUserFiscalType: null,
        identificacionAnverso: null,
        identificacionReverso: null,
        actaConstitutiva: null,
        poderNotarial: null,
        comprobanteDomicilio: null,
        caratulaEstadoCuenta: null,
        constanciaSituacionFiscal: null,
        name: '',
        nombreRepresentanteLegal: '',
        codigoPostal: '',
        ciudad: '',
        nombreEmpresaOrganizador: '',
        rfcPerson: '',
        regimenFiscal: [],
        createDate: new Date(),
        updateDate: new Date(),
        estatus: ContractStatus.PorLlenar, // Assuming you have a default value for ContractStatus
        urlContract: null
    };

    const validationSchema = Yup.object().shape({
        rfcPerson: Yup.string()
            .required("El RFC es requerido")
            .min(12, "El RFC debe tener al menos 12 caracteres")
            .max(13, "El RFC debe tener como máximo 13 caracteres"),
        idUserFiscalType: Yup.string().required("Tipo de persona requerido"),
        identificacionAnverso: Yup.mixed().required("Inserta el anverso de tu identificación")
            .test('fileFormat', 'Únicamente archivos tipo PDF, PNG, JPG', (value: any) => {
                if (value) {
                    const supportedFormats = ['pdf', 'png', 'jpg', 'jpeg'];
                    return supportedFormats.includes(value.name.split('.').pop());
                }
                return true;
            })
            .test('fileSize', 'Solo archivos menores a 3MB', (value: any) => {
                if (value) {
                    return value.size <= 3145728;
                }
                return true;
            }),
        identificacionReverso: Yup.mixed().required("Inserta el reverso de tu identificación")
            .test('fileFormat', 'Únicamente archivos tipo PDF, PNG, JPG', (value: any) => {
                if (value) {
                    const supportedFormats = ['pdf', 'png', 'jpg', 'jpeg'];
                    return supportedFormats.includes(value.name.split('.').pop());
                }
                return true;
            })
            .test('fileSize', 'Solo archivos menores a 3MB', (value: any) => {
                if (value) {
                    return value.size <= 3145728;
                }
                return true;
            }),
        actaConstitutiva: Yup.mixed().when('idUserFiscalType', ([idUserFiscalType], schema) => {
            return idUserFiscalType === 'moral'
                ? schema.required("Inserta el acta constitutiva") // Se aplica la validación "required"
                    .test('fileFormat', 'Únicamente archivos tipo PDF, JPG, PNG', (value: any) => {
                        if (value) {
                            const supportedFormats = ['pdf', 'png', 'jpg', 'jpeg'];
                            return supportedFormats.includes(value.name.split('.').pop()?.toLowerCase() ?? '');
                        }
                        return true;
                    })
                    .test('fileSize', 'Solo archivos menores a 3MB', (value: any) => {
                        if (value) {
                            return value.size <= 3145728;
                        }
                        return true;
                    })
                : Yup.mixed().notRequired();
        }),
        poderNotarial: Yup.mixed().when('idUserFiscalType', ([idUserFiscalType], schema) => {
            return idUserFiscalType === 'moral'
                ? schema.required("Inserta el poder notarial") // Se aplica la validación "required"
                    .test('fileFormat', 'Únicamente archivos tipo PDF, JPG, PNG', (value: any) => {
                        if (value) {
                            const supportedFormats = ['pdf', 'png', 'jpg', 'jpeg'];
                            return supportedFormats.includes(value.name.split('.').pop()?.toLowerCase() ?? '');
                        }
                        return true;
                    })
                    .test('fileSize', 'Solo archivos menores a 3MB', (value: any) => {
                        if (value) {
                            return value.size <= 3145728;
                        }
                        return true;
                    })
                : Yup.mixed().notRequired();
        }),
        comprobanteDomicilio: Yup.mixed().required("Inserta el comprobante de domicilio")
            .test('fileFormat', 'Únicamente archivos tipo PDF, PNG, JPG', (value: any) => {
                if (value) {
                    const supportedFormats = ['pdf', 'png', 'jpg', 'jpeg'];
                    return supportedFormats.includes(value.name.split('.').pop());
                }
                return true;
            })
            .test('fileSize', 'Solo archivos menores a 3MB', (value: any) => {
                if (value) {
                    return value.size <= 3145728;
                }
                return true;
            }),
        caratulaEstadoCuenta: Yup.mixed().required("Inserta la caratula del estado de cuenta")
            .test('fileFormat', 'Únicamente archivos tipo PDF, PNG, JPG', (value: any) => {
                if (value) {
                    const supportedFormats = ['pdf', 'png', 'jpg', 'jpeg'];
                    return supportedFormats.includes(value.name.split('.').pop());
                }
                return true;
            })
            .test('fileSize', 'Solo archivos menores a 3MB', (value: any) => {
                if (value) {
                    return value.size <= 3145728;
                }
                return true;
            }),
        constanciaSituacionFiscal: Yup.mixed().required("Inserta la constancia de situación fiscal")
            .test('fileFormat', 'Únicamente archivos tipo PDF, PNG, JPG', (value: any) => {
                if (value) {
                    const supportedFormats = ['pdf', 'png', 'jpg', 'jpeg'];
                    return supportedFormats.includes(value.name.split('.').pop());
                }
                return true;
            })
            .test('fileSize', 'Solo archivos menores a 3MB', (value: any) => {
                if (value) {
                    return value.size <= 3145728;
                }
                return true;
            }),
        name: Yup.string().required('El nombre es requerido'),
        nombreRepresentanteLegal: Yup.string().required('El nombre del representante legal es requerido'),
        codigoPostal: Yup.string()
            .required('El código postal es requerido')
            .matches(/^[0-9]+$/, 'El código postal solo puede contener números'),
        ciudad: Yup.string().required('La ciudad es requerida'),
        nombreEmpresaOrganizador: Yup.string().required('El nombre de la empresa organizadora es requerido'),
        regimenFiscal: Yup.string().required('El régimen fiscal es requerido'),
    });

    // const runValidations = (values: any) => {
    //     validationSchema
    //         .validate(values, { abortEarly: false })
    //         .then((responseData) => {
    //             console.log("no validation errors");
    //             console.log(responseData);
    //         })
    //         .catch((err) => {
    //             console.error("Errores de validación:");
    //             for (const fieldName in err.errors) {
    //                 const fieldErrors = err.errors[fieldName];

    //                 // Check if fieldErrors is actually an array before using map
    //                 if (Array.isArray(fieldErrors)) {
    //                     console.error(`- ${fieldName}: ${fieldErrors.map((error) => error.message).join(', ')}`);
    //                 } else {
    //                     console.error(`- ${fieldName}: ${fieldErrors}`); // Print the single error as a string
    //                 }
    //             }
    //         });
    // };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, dirty, setFieldValue, resetForm, values }) => (
                <Form className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxxxl:gap-6">
                    {/* <div>
                        <button type="button" onClick={() => runValidations(values)}>run validations</button>
                    </div> */}
                    {/* Your form fields */}
                    <div className="col-span-2">
                        <label htmlFor="rfcPerson" className="md:text-lg font-medium block mb-4">
                            RFC
                        </label>
                        <Field
                            type="text"
                            name="rfcPerson"
                            placeholder="RFC"
                            maxLength={13}
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            onChange={
                                (e: any) => {
                                    const value = e.target.value.toUpperCase();
                                    setFieldValue("rfcPerson", value)
                                    if (value.length == 12) {
                                        setFieldValue("idUserFiscalType", "moral")
                                        setDisabledCheckbox(true)
                                        //añade aquí un disabled al input con name idUserFiscalType
                                    }
                                    else if (value.length == 13) {
                                        setFieldValue("idUserFiscalType", "fisica")
                                        setDisabledCheckbox(true)
                                        //añade aquí un disabled al input con name idUserFiscalType
                                    }
                                    else if (value.length < 12) {
                                        setFieldValue("idUserFiscalType", null)
                                        setDisabledCheckbox(true)
                                    }
                                }
                            }
                            disabled={contractData ? true : false}
                        />
                        <ErrorMessage name="rfcPerson" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="idUserFiscalType" className="md:text-lg font-medium block mb-4">
                            Persona:
                        </label>
                        <div className="flex gap-5">
                            <label htmlFor="fisica" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="radio"
                                    id="fisica"
                                    name="idUserFiscalType"
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
                                    name="idUserFiscalType"
                                    value="moral"
                                    className="accent-secondary1 scale-125"
                                    disabled={disabledCheckbox}
                                />{" "}
                                Moral
                            </label>
                            <ErrorMessage name="idUserFiscalType" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="identificacionAnverso" className="md:text-lg font-medium block mb-4">
                            Identificación anverso
                        </label>
                        <input
                            type="file"
                            name="identificacionAnverso"
                            accept=".pdf,.png,.jpg,.jpeg"
                            onChange={(e: any) => {
                                const file = e.target.files[0];
                                // Realizar la validación del archivo aquí si es necesario
                                setFieldValue("identificacionAnverso", file);
                            }}
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            disabled={contractData ? true : false}
                        />
                        <small>Únicamente archivos de tipo PDF, JPG, PNG de menos de 3MB</small>
                        <ErrorMessage name="identificacionAnverso" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="identificacionReverso" className="md:text-lg font-medium block mb-4">
                            Identificación reverso
                        </label>
                        <input
                            type="file"
                            name="identificacionReverso"
                            accept=".pdf,.png,.jpg,.jpeg"
                            onChange={(e: any) => {
                                const file = e.target.files[0];
                                // Realizar la validación del archivo aquí si es necesario
                                setFieldValue("identificacionReverso", file);
                            }}
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            disabled={contractData ? true : false}
                        />
                        <small>Únicamente archivos de tipo PDF, JPG, PNG de menos de 3MB</small>
                        <ErrorMessage name="identificacionReverso" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    {values.idUserFiscalType === "moral" && (
                        <div className="col-span-2">
                            <label htmlFor="actaConstitutiva" className="md:text-lg font-medium block mb-4">
                                Acta constitutiva (PDF, PNG, JPG, JPEG)
                            </label>
                            <input
                                type="file"
                                name="actaConstitutiva"
                                accept=".pdf,.png,.jpg,.jpeg"
                                onChange={(e: any) => {
                                    const file = e.target.files[0];
                                    setFieldValue("actaConstitutiva", file);
                                }}
                                className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                                disabled={contractData ? true : false}
                            />
                            <small>Únicamente archivos de tipo PDF, JPG, PNG de menos de 3MB</small>
                            <ErrorMessage name="actaConstitutiva" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                        </div>
                    )}

                    {values.idUserFiscalType === "moral" && (
                        <div className="col-span-2">
                            <label htmlFor="poderNotarial" className="md:text-lg font-medium block mb-4">
                                Poder notarial (PDF, PNG, JPG, JPEG)
                            </label>
                            <input
                                type="file"
                                name="poderNotarial"
                                accept=".pdf,.png,.jpg,.jpeg"
                                onChange={(e: any) => {
                                    const file = e.target.files[0];
                                    setFieldValue("poderNotarial", file);
                                }}
                                className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                                disabled={contractData ? true : false}
                            />
                            <small>Únicamente archivos de tipo PDF, JPG, PNG de menos de 3MB</small>
                            <ErrorMessage name="poderNotarial" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                        </div>
                    )}

                    <div className="col-span-2">
                        <label htmlFor="comprobanteDomicilio" className="md:text-lg font-medium block mb-4">
                            Comprobante de domicilio
                        </label>
                        <input
                            type="file"
                            name="comprobanteDomicilio"
                            accept=".pdf,.png,.jpg,.jpeg"
                            onChange={(e: any) => {
                                const file = e.target.files[0];
                                setFieldValue("comprobanteDomicilio", file);
                            }}
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            disabled={contractData ? true : false}
                        />
                        <small>Únicamente archivos de tipo PDF, JPG, PNG de menos de 3MB</small><br />
                        <small>No mayor a 3 meses de antigüedad</small>
                        <ErrorMessage name="comprobanteDomicilio" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="caratulaEstadoCuenta" className="md:text-lg font-medium block mb-4">
                            Caratula estado de cuenta
                        </label>
                        <input
                            type="file"
                            name="caratulaEstadoCuenta"
                            accept=".pdf,.png,.jpg,.jpeg"
                            onChange={(e: any) => {
                                const file = e.target.files[0];
                                setFieldValue("caratulaEstadoCuenta", file);
                            }}
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            disabled={contractData ? true : false}
                        />
                        <small>Únicamente archivos de tipo PDF, JPG, PNG de menos de 3MB</small><br />
                        <small>No mayor a 3 meses de antigüedad</small>
                        <ErrorMessage name="caratulaEstadoCuenta" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="constanciaSituacionFiscal" className="md:text-lg font-medium block mb-4">
                            Constancia de situación fiscal
                        </label>
                        <input
                            type="file"
                            name="constanciaSituacionFiscal"
                            accept=".pdf,.png,.jpg,.jpeg"
                            onChange={(e: any) => {
                                const file = e.target.files[0];
                                setFieldValue("constanciaSituacionFiscal", file);
                            }}
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            disabled={contractData ? true : false}
                        />
                        <small>Únicamente archivos de tipo PDF, JPG, PNG de menos de 3MB</small><br />
                        <small>No mayor a 3 meses de antigüedad</small>
                        <ErrorMessage name="constanciaSituacionFiscal" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="name" className="md:text-lg font-medium block mb-4">
                            Nombre
                        </label>
                        <Field
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            disabled={contractData ? true : false}
                        />
                        <ErrorMessage name="name" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="nombreRepresentanteLegal" className="md:text-lg font-medium block mb-4">
                            Nombre del representante legal
                        </label>
                        <Field
                            type="text"
                            name="nombreRepresentanteLegal"
                            placeholder="Representante legal"
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            disabled={contractData ? true : false}
                        />
                        <ErrorMessage name="nombreRepresentanteLegal" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="codigoPostal" className="md:text-lg font-medium block mb-4">
                            Código postal
                        </label>
                        <Field
                            type="text"
                            name="codigoPostal"
                            maxLength={5}
                            placeholder="Código postal"
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            disabled={contractData ? true : false}
                        />
                        <ErrorMessage name="codigoPostal" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="ciudad" className="md:text-lg font-medium block mb-4">
                            Ciudad
                        </label>
                        <Field
                            type="text"
                            name="ciudad"
                            placeholder="Ciudad"
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            disabled={contractData ? true : false}
                        />
                        <ErrorMessage name="ciudad" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="nombreEmpresaOrganizador" className="md:text-lg font-medium block mb-4">
                            Nombre de la empresa organizadora
                        </label>
                        <Field
                            type="text"
                            name="nombreEmpresaOrganizador"
                            placeholder="Empresa organizadora"
                            className={`w-full text-sm bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 ${contractData ? 'cursor-not-allowed' : ''}`}
                            disabled={contractData ? true : false}
                        />
                        <ErrorMessage name="nombreEmpresaOrganizador" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>

                    <div className="col-span-2">
                        <label className="md:text-lg font-medium block mb-4">Selecciona tu Régimen Fiscal</label>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                            <label htmlFor="generalLeyPersonasMorales" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="generalLeyPersonasMorales"
                                    name="regimenFiscal"
                                    value="General de Ley Personas Morales"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                General de Ley Personas Morales
                            </label>
                            <label htmlFor="personasFisicasEmpresarialesProfesionales" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="personasFisicasEmpresarialesProfesionales"
                                    name="regimenFiscal"
                                    value="Personas Físicas con Actividades Empresariales y Profesionales"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Personas Físicas con Actividades Empresariales y Profesionales
                            </label>
                            <label htmlFor="regimenSimplificadoConfianza" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="regimenSimplificadoConfianza"
                                    name="regimenFiscal"
                                    value="Régimen Simplificado de Confianza"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Régimen Simplificado de Confianza
                            </label>
                            <label htmlFor="personasMoralesconFinesnoLucrativos" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="personasMoralesconFinesnoLucrativos"
                                    name="regimenFiscal"
                                    value="Personas Morales con Fines no Lucrativos"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Personas Morales con Fines no Lucrativos
                            </label>
                            <label htmlFor="RegimendelasActividadesEmpresarialesconingresosatravesdePlataformasTecnologicas" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="RegimendelasActividadesEmpresarialesconingresosatravesdePlataformasTecnologicas"
                                    name="regimenFiscal"
                                    value="Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas
                            </label>
                            <label htmlFor="sueldosySalarioseIngresosAsimiladosaSalarios" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="sueldosySalarioseIngresosAsimiladosaSalarios"
                                    name="regimenFiscal"
                                    value="Sueldos y Salarios e Ingresos Asimilados a Salarios"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Sueldos y Salarios e Ingresos Asimilados a Salarios
                            </label>
                            <label htmlFor="residentesenelExtranjerosinEstablecimientoPermanenteenMexico" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="residentesenelExtranjerosinEstablecimientoPermanenteenMexico"
                                    name="regimenFiscal"
                                    value="Residentes en el Extranjero sin Establecimiento Permanente en México"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Residentes en el Extranjero sin Establecimiento Permanente en México
                            </label>
                            <label htmlFor="arrendamiento" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="arrendamiento"
                                    name="regimenFiscal"
                                    value="Arrendamiento"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Arrendamiento
                            </label>
                            <label htmlFor="RegimendeEnajenacionoAdquisiciondeBienes" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="RegimendeEnajenacionoAdquisiciondeBienes"
                                    name="regimenFiscal"
                                    value="Régimen de Enajenación o Adquisición de Bienes"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Régimen de Enajenación o Adquisición de Bienes
                            </label>
                            <label htmlFor="ingresosporDividendossociosyaccionistas" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="ingresosporDividendossociosyaccionistas"
                                    name="regimenFiscal"
                                    value="Ingresos por Dividendos (socios y accionistas)"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Ingresos por Dividendos (socios y accionistas)
                            </label>
                            <label htmlFor="ingresosIntereses" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="ingresosIntereses"
                                    name="regimenFiscal"
                                    value="Ingresos por intereses"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Ingresos por intereses
                            </label>

                            <label htmlFor="ingresosPremios" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="ingresosPremios"
                                    name="regimenFiscal"
                                    value="Régimen de los ingresos por obtención de premios"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Régimen de los ingresos por obtención de premios
                            </label>

                            <label htmlFor="sociedadesCooperativas" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="sociedadesCooperativas"
                                    name="regimenFiscal"
                                    value="Sociedades Cooperativas de Producción que optan por diferir sus ingresos"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Sociedades Cooperativas de Producción que optan por diferir sus ingresos
                            </label>

                            <label htmlFor="actividadesAgricolas" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="actividadesAgricolas"
                                    name="regimenFiscal"
                                    value="Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras
                            </label>

                            <label htmlFor="opcionalGruposSociedades" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="opcionalGruposSociedades"
                                    name="regimenFiscal"
                                    value="Opcional para Grupos de Sociedades"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Opcional para Grupos de Sociedades
                            </label>

                            <label htmlFor="coordinados" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="coordinados"
                                    name="regimenFiscal"
                                    value="Coordinados"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Coordinados
                            </label>

                            <label htmlFor="demasIngresos" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="demasIngresos"
                                    name="regimenFiscal"
                                    value="Demás ingresos"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Demás ingresos
                            </label>

                            <label htmlFor="otro" className="flex items-center gap-2 cursor-pointer">
                                <Field
                                    type="checkbox"
                                    id="otro"
                                    name="regimenFiscal"
                                    value="Otro"
                                    className="accent-secondary1 scale-125"
                                    disabled={contractData ? true : false}
                                />
                                Otro
                            </label>
                        </div>
                        <ErrorMessage name="regimenFiscal" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                    </div>


                    <div className="col-span-2">
                        <div className="flex mt-6 xxl:mt-10 gap-4">
                            {dirty ? (
                                <button className="px-5 bg-primary-500 rounded-full text-white" type="submit" disabled={isSubmitting}>
                                    Guardar cambios
                                </button>
                            ) : (
                                <button className="px-5 bg-primary-200 rounded-full text-white" disabled>
                                    Guardar cambios
                                </button>
                            )}
                            <button type="button" className="btn-outline px-5" onClick={() => { resetForm(); }}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ContratoForm;