import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from "@/components/shared/Modal";
import { FocusEvent, useState } from "react";
import { AccountsBankData, eventsData, DisbursementsData } from "@/public/data/demoData";
import { DisbursementsMethod, DisbursementsSstatus, EventStatus, AccountsBankStatus } from '@/public/data/types';
import { NumericFormat } from 'react-number-format';

const CrearDispersion = ({
  toggleOpen,
  open,
}: {
  toggleOpen: () => void;
  open: boolean;
}) => {

  // Definir opciones para el método de pago y el estatus
  const paymentMethods = Object.values(DisbursementsMethod);
  const statuses = Object.values(DisbursementsSstatus);

  // Definir esquema de validación Yup
  const validationSchema = Yup.object().shape({
    evento: Yup.string().required('El evento es requerido'),
    cuentaOrigen: Yup.string().required('La cuenta origen es requerida'),
    clabeDestino: Yup.string()
      .matches(/^\d{1,18}$/, 'La CLABE debe tener 18 dígitos y ser solo números')
      .required("La CLABE es requerida"),
    cantidad: Yup.number().required('La cantidad es requerida'),
    referencia: Yup.string().required('La referencia es requerida'),
    metodoPago: Yup.string().required('El método de pago es requerido'),
    estatus: Yup.string().required('El estatus es requerido'),
  });

  return (
    <Modal open={open} toggleOpen={toggleOpen} height="min-h-[1100px]">
      <div className="flex justify-between items-center mb-4 pb-4 bb-dashed lg:mb-6 lg:pb-6">
        <h4 className="h4">Agregar dispersión</h4>
      </div>
      <Formik
        initialValues={{
          evento: '',
          cuentaOrigen: '',
          clabeDestino: '',
          cantidad: '',
          referencia: '',
          metodoPago: '',
          estatus: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Aquí puedes manejar la lógica para enviar el formulario
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
              <div className="col-span-2">
                <label htmlFor="evento" className="md:text-lg font-medium block mb-4">Evento</label>
                <Field as="select" name="evento" className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3">
                  <option value="">Selecciona un evento</option>
                  {eventsData
                    .filter(event => {
                      const associatedDisbursement = DisbursementsData.find(disbursement => disbursement.idEvent === event.id);
                      return (
                        event.Status === EventStatus.Active &&
                        event.EndDate &&
                        event.EndDate < new Date() &&
                        (!associatedDisbursement || associatedDisbursement.status === DisbursementsSstatus.Procesando)
                      );
                    })
                    .sort((a, b) => a.EventName.localeCompare(b.EventName))
                    .map(event => (
                      <option key={event.id} value={event.id}>{event.EventName}</option>
                    ))
                  }
                </Field>
                <ErrorMessage name="evento" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2">
                <label htmlFor="cuentaOrigen" className="md:text-lg font-medium block mb-4">Cuenta Origen</label>
                <Field as="select" name="cuentaOrigen" className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3">
                  <option value="">Selecciona una cuenta</option>
                  {AccountsBankData.filter(account => account.status === AccountsBankStatus.Activa).map(account => (
                    <option key={account.id} value={account.id}>{account.name}</option>
                  ))}
                </Field>
                <ErrorMessage name="cuentaOrigen" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2">
                <label htmlFor="clabeDestino" className="md:text-lg font-medium block mb-4">CLABE Destino</label>
                <Field
                  type="text"
                  name="clabeDestino"
                  placeholder="000000000000000000"
                  maxLength={18}
                  className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
                />
                <ErrorMessage name="clabeDestino" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="cantidad" className="md:text-lg font-medium block mb-4">Cantidad</label>
                <NumericFormat
                  name="cantidad"
                  value={values.cantidad}
                  thousandSeparator=","
                  prefix="$"
                  onValueChange={(value) => {
                    setFieldValue("cantidad", value.floatValue);
                  }}
                  className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
                />
                <ErrorMessage name="cantidad" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="referencia" className="md:text-lg font-medium block mb-4">Referencia</label>
                <Field type="text" name="referencia" className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3" />
                <ErrorMessage name="referencia" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2">
                <label htmlFor="metodoPago" className="md:text-lg font-medium block mb-4">Método de Pago</label>
                <Field as="select" name="metodoPago" className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3">
                  <option value="">Selecciona un método de pago</option>
                  {paymentMethods.map(method => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </Field>
                <ErrorMessage name="metodoPago" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2">
                <label htmlFor="estatus" className="md:text-lg font-medium block mb-4">Estatus</label>
                <Field as="select" name="estatus" className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3">
                  <option value="">Selecciona un estatus</option>
                  {statuses.sort().map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </Field>
                <ErrorMessage name="estatus" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2 mt-4">
                <button className="btn flex w-full justify-center" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Creando...' : 'Crear Dispersión'}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CrearDispersion;
