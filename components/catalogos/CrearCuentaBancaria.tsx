import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from "@/components/shared/Modal";
import bankData from "../../public/data/bankData.json"

interface BankData {
  clabe: string | number;
  marca: string;
  nombre: string;
}

const sortedBanks: BankData[] = bankData.sort((a, b) => a.marca.localeCompare(b.marca));

const CrearCuentaBancaria = ({
  toggleOpen,
  open,
}: {
  toggleOpen: () => void;
  open: boolean;
}) => {
  // Esquema de validación Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nombre es requerido'),
    accountNumber: Yup.string().required('Número de cuenta es requerido'),
    CLABE: Yup.string()
      .matches(/^\d{18}$/, 'La CLABE debe tener 18 dígitos y ser solo números')
      .required("La CLABE es requerida"),
    bank: Yup.string().required('Banco es requerido'),
  });

  return (
    <Modal open={open} toggleOpen={toggleOpen} height="min-h-[1100px]">
      <div className="flex justify-between items-center mb-4 pb-4 bb-dashed lg:mb-6 lg:pb-6">
        <h4 className="h4">Crear cuenta</h4>
      </div>
      {/* Formik wrapper */}
      <Formik
        initialValues={{
          name: '',
          accountNumber: '',
          CLABE: '',
          bank: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {/* Formik form */}
        {({ isSubmitting }) => (
          <Form>
            <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
              <div className="col-span-2">
                <label htmlFor="name" className="md:text-lg font-medium block mb-4">
                  Nombre
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
                  placeholder="Nombre para asignar a la cuenta"
                />
                <ErrorMessage name="name" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2">
                <label htmlFor="name" className="md:text-lg font-medium block mb-4">
                  No. cuenta
                </label>
                <Field
                  type="text"
                  name="accountNumber"
                  className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
                  placeholder="Número de cuenta"
                />
                <ErrorMessage name="accountNumber" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2">
                <label htmlFor="name" className="md:text-lg font-medium block mb-4">
                  CLABE
                </label>
                <Field
                  type="text"
                  name="CLABE"
                  placeholder="000000000000000000"
                  maxLength={18}
                  className="w-full text-sm  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
                />
                <ErrorMessage name="CLABE" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2">
                <label htmlFor="bank" className="md:text-lg font-medium block mb-4">
                  Banco
                </label>
                <Field
                  as="select"
                  name="bank"
                  className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
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
                <ErrorMessage name="bank" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
              </div>
              <div className="col-span-2 mt-4">
                {
                  isSubmitting ?
                    <button
                      className="flex w-full justify-center py-3 bg-primary-200 rounded-full text-white"
                      disabled
                    >
                      Creando cuenta...
                    </button>
                    :
                    <button
                      className="flex w-full justify-center py-3 bg-primary-500 rounded-full text-white"
                      type="submit"
                    >
                      Crear cuenta
                    </button>
                }
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CrearCuentaBancaria;
