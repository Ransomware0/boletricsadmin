"use client"

import React from 'react';
import "./Contrato.css"
import ContratoForm from './ContratoForm';
import { ContractData } from '@/public/data/demoData';
import { ContractStatus } from '@/public/data/types';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const Contrato = () => {

    const handleCorreoElectronico = (url: any) => {
        window.open(`mailto:legal@boletrics.com?subject=Actualización%20de%20contrato%20📝📝%20-%20%20Boletrics&body=Hola,%0A%0ADeseo%20actualizar%20mi%20contrato.%0A%0AMotivo:%0A%0ACliente:%20${ContractData[0].idUser}%0A%0ASaludos.`, '_blank');
    };

    return (
        <>
            <div className="grid grid-cols-12 gap-4 xxxxxl:gap-6">
                <div className="col-span-12 lg:col-span-6">
                    <div className="box xxl:p-8 xxxl:p-10">
                        <h4 className="h4 bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
                            Solicitud de contrato
                        </h4>
                        {ContractData.length > 0 && (
                            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 mb-2">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-yellow-700">
                                            Sí usted desea actualizar su información, envíe un correo electrónico escribiendo únicamente el motivo, dando clic en{' '}
                                            <button onClick={() => handleCorreoElectronico("legal@boletrics.com")} className="font-medium text-yellow-700 underline hover:text-yellow-600">
                                                legal@boletrics.com
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <small>Para poder llenar este formulario, recomendamos tener a la mano todos los archivos y datos necesarios.</small>
                        <ContratoForm contractData={ContractData[0]} />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    {/* Delete Your Account */}
                    <div className="box xxl:p-8 xxxl:p-10 mb-6">
                        <h4 className="h4 bb-dashed mb-4 pb-4 pt-4 md:mb-6 md:pb-6 text-center text-white gradient-background rounded">
                            Para poder realizar una dispersión a tu cuenta debes contar con un contrato firmado y vigente.
                        </h4>
                        <p className="mt-6 xl:mt-8 gap-4 xxxl:gap-6">
                            <strong>Es importante que lea y comprenda esta información</strong>: Para que usted pueda gozar de la dispersión del pago de sus eventos, debe contar con un contrato firmado, vigente y actualizado. Este contrato te protege ante cualquier situación.
                            <br />
                        </p>
                        <div className="grid grid-cols-12 gap-6 mt-4 px-4">
                            <div className="col-span-6">
                                Persona física: <br /><br />
                                <ul className="list-disc">
                                    <li>Identificación oficial</li>
                                    <li>Comprobante de domicilio</li>
                                    <li>Carátula del estado de cuenta</li>
                                    <li>Constancia de situación fiscal</li>
                                </ul>
                            </div>
                            <div className="col-span-6">
                                Persona moral: <br /><br />
                                <ul className="list-disc">
                                    <li>Acta constitutiva</li>
                                    <li>Poder notarial</li>
                                    <li>Identificación oficial</li>
                                    <li>Comprobante de domicilio</li>
                                    <li>Carátula del estado de cuenta</li>
                                    <li>Constancia de situación fiscal</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-6 xl:mt-8 gap-4 xxxl:gap-6">
                            <strong>Estado de tu contrato</strong>:
                            <br /><br />
                            {ContractData.length > 0 ? (
                                <>
                                    {ContractData[0].estatus === ContractStatus.PorLlenar && (
                                        <span className="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                                            <svg className="h-1.5 w-1.5 fill-red-500" viewBox="0 0 6 6" aria-hidden="true">
                                                <circle cx={3} cy={3} r={3} />
                                            </svg>
                                            {ContractStatus.PorLlenar}
                                        </span>
                                    )}
                                    {ContractData[0].estatus === ContractStatus.EnRevisión && (
                                        <span className="inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                                            <svg className="h-1.5 w-1.5 fill-yellow-500" viewBox="0 0 6 6" aria-hidden="true">
                                                <circle cx={3} cy={3} r={3} />
                                            </svg>
                                            {ContractStatus.EnRevisión}
                                        </span>
                                    )}
                                    {ContractData[0].estatus === ContractStatus.Vigente && (
                                        <>
                                            <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                                                <svg className="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                                                    <circle cx={3} cy={3} r={3} />
                                                </svg>
                                                {ContractStatus.Vigente}
                                            </span>
                                            <div className="rounded-md bg-green-50 p-4 mt-3">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <a
                                                            href={ContractData[0].urlContract ?? ""}
                                                            className="text-sm font-medium text-green-800 underline hover:text-green-700"
                                                            target="_blank"
                                                            rel="noopener noreferrer" // Es importante agregar esto por razones de seguridad
                                                            download
                                                        >
                                                            Descargar contrato
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                                    <svg className="h-1.5 w-1.5 fill-red-500" viewBox="0 0 6 6" aria-hidden="true">
                                        <circle cx={3} cy={3} r={3} />
                                    </svg>
                                    {ContractStatus.PorLlenar}
                                </span>
                            )}

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contrato;