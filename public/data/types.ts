import { Route } from "next";
import { StaticImageData } from "next/image";

export interface Event {
    id: number;
    idUser: number;
    EventName: string;
    Description: string | null;
    EventDescription: string | null;
    EventModality: EventModality | null; // en base de datos esta como INT por que viene un cátalogo, este lo debes traer en un arreglo armado de distintas tablas
    StartDate: Date | null;
    EndDate: Date | null;
    Location: string | null;
    LocationURL: string | null;
    Venue: string | null;
    hasSeats: boolean;
    ImageURL: StaticImageData | string | null;
    Slug: Route;
    MaxTicketsPerOrder: number | null;
    Logo: string;
    SeatsioId: string | null;
    AvailableQuantity: number | null;
    CashPay: boolean | null;
    Status: EventStatus;
    Sales: number | null; // este es el calculo de todos los boletos que se encuentren en estado paid en la tabla  TicketsReservations
    TicketQuantity: number | null; // hay que ver cuantos boletos hay creador por evento, por ejemplo 100 VIP y 100 generales, total 200 boletos creados
    TicketSales: number | null; // no puede ser mayor a la cantidad de tickets emitidos y se calcula contando cuantos boletos hay vendidos confirmados de los distintos lugares
    CreateDate: Date | null;
}

export enum EventStatus {
    Active = "Activo",
    Inactive = "Inactivo",
    Draft = "Borrador",
    Finished = "Finalizado"
}

export enum EventModality {
    Presencial = "Presencial",
    Online = "En línea",
    Neerme = "Neerme"
}

export interface TicketsPayments {
    id: Number;
    idEvent: Number;
    reservationId: Number;
    eventTicketId: Number;
    financialStatus: string;
    seat: string | null;
    price: Number;
    paymentMethod: string;
    paymentId: string;
    paidDate: Date;
}

export interface Disbursements {
    id: number;
    idUser: Number;
    idEvent: Number;
    origen: string;
    CLABE: string;
    amount: number;
    reference: string;
    method: DisbursementsMethod;
    note: string;
    status: DisbursementsSstatus;
    dateDisbursements: Date | null;
}

export enum DisbursementsSstatus {
    Procesando = "Procensando",
    Error = "Error",
    Pagado = "Pagado",
}

export enum DisbursementsMethod {
    Efectivo = "Efectivo",
    Transferencia = "Transferencia"
}

export interface AccountsBank {
    id: number,
    idUser: number;
    name: string,
    accountNumber: string,
    CLABE: string,
    bank: string,
    status: AccountsBankStatus,
    createDate: Date
}

export enum AccountsBankStatus {
    Activa = "Activa",
    Inactiva = "Inactiva",
}

export interface Contract {
    id: number,
    idUser: number,
    idUserFiscalType: ContractFiscalType | null,
    identificacionAnverso: File | null,
    identificacionReverso: File | null,
    actaConstitutiva: File | null,
    poderNotarial: File | null,
    comprobanteDomicilio: File | null,
    caratulaEstadoCuenta: File | null,
    constanciaSituacionFiscal: File | null,
    name: string,
    nombreRepresentanteLegal: string,
    codigoPostal: string,
    ciudad: string,
    nombreEmpresaOrganizador: string,
    rfcPerson: string,
    regimenFiscal: Array<string>,
    createDate: Date,
    updateDate: Date,
    estatus: ContractStatus
    urlContract: string | null
}

export enum ContractFiscalType {
    Fisica = "fisica",
    Moral = "moral",
}

export enum ContractStatus {
    PorLlenar = "Debe llenar su información",
    EnRevisión = "En revisión",
    Vigente = "Vigente"
}

export interface Contract {
    id: number,
    idUser: number,
    idUserFiscalType: ContractFiscalType | null,
    identificacionAnverso: File | null,
    identificacionReverso: File | null,
    actaConstitutiva: File | null,
    poderNotarial: File | null,
    comprobanteDomicilio: File | null,
    caratulaEstadoCuenta: File | null,
    constanciaSituacionFiscal: File | null,
    name: string,
    nombreRepresentanteLegal: string,
    codigoPostal: string,
    ciudad: string,
    nombreEmpresaOrganizador: string,
    rfcPerson: string,
    regimenFiscal: Array<string>,
    createDate: Date,
    updateDate: Date,
    estatus: ContractStatus
    urlContract: string | null
}

export interface SalesCart {
    id: number,
    idUser: number,
    idEvent: number,
    urlSalesCart: string | null,
    status: SalesCartStatus | null,
    createDate: Date,
}

export enum SalesCartStatus {
    Emitida = "Emitida",
    Procesando = "Procesando"
}

export interface Users {
    id: number,
    userType: UsersType,
    name: string,
    lname: string,
    email: string,
    cel: string,
    gender: string,
    createDate: Date,
    updateDate: Date,
    delete: Boolean,
    active: Boolean
}

export enum UsersType {
    userClient = "Cliente",
    userOwner = "Organizador",
    userSales = "Punto de venta",
    admin = "Administrador",
    superAdmin = "Super administrador",
    userCheckIn = "Usuario verificador de boletos",
}