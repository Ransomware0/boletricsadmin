import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from "@/components/shared/Modal";
import { useEffect, useState } from 'react';
import { Event, SalesCart, SalesCartStatus } from '@/public/data/types';
import { SalesCartData, eventsData } from '@/public/data/demoData';

const CrearCartaVenta = ({
    toggleOpen,
    open,
}: {
    toggleOpen: () => void;
    open: boolean;
}) => {
    const [userEvents, setUserEvents] = useState<Event[]>([]);

    const getUserSalesCartData = (userId: number) => {
        return SalesCartData.filter(cart => cart.idUser === userId);
    };

    // Realizar un join con los eventos que tienen el mismo idUser y que no tengan una carta emitida
    const joinUserEventsWithSalesCart = () => {
        const userSalesCartData = getUserSalesCartData(1); // Supongamos que el usuario actual es el número 1
        const filteredEvents = eventsData.filter(event => {
            return event.idUser === 1 && userSalesCartData.every(cart => cart.idEvent !== event.id || cart.status !== SalesCartStatus.Emitida);
        });
        setUserEvents(filteredEvents);
    };

    useEffect(() => {
        joinUserEventsWithSalesCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Esquema de validación Yup
    const validationSchema = Yup.object().shape({
        evento: Yup.string().required('Selecciona un evento'),
    });

    return (
        <Modal open={open} toggleOpen={toggleOpen} height="min-h-[1100px]">
            <div className="flex justify-between items-center mb-4 pb-4 bb-dashed lg:mb-6 lg:pb-6">
                <h4 className="h4">Crear cuenta</h4>
            </div>
            <Formik
                initialValues={{
                    evento: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
                            <div className="col-span-2">
                                <label htmlFor="evento" className="md:text-lg font-medium block mb-4">
                                    Evento
                                </label>
                                <Field
                                    as="select"
                                    name="evento"
                                    className="w-full text-sm bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
                                >
                                    <option value="">Selecciona un evento</option>
                                    {userEvents.map(event => (
                                        <option key={event.id} value={event.id}>{event.EventName}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="evento" component="div" className="mt-2 px-4 text-white bg-red-500 text-xs rounded-full" />
                            </div>
                            <div className="col-span-2 mt-4">
                                {isSubmitting ? (
                                    <button
                                        className="flex w-full justify-center py-3 bg-primary-200 rounded-full text-white"
                                        disabled
                                    >
                                        Solicitando carta...
                                    </button>
                                ) : (
                                    <button
                                        className="flex w-full justify-center py-3 bg-primary-500 rounded-full text-white"
                                        type="submit"
                                    >
                                        Solicitar carta
                                    </button>
                                )}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default CrearCartaVenta;
