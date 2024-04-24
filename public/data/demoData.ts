import { Event } from "./types";
import {
    EventStatus, TicketsPayments, Disbursements, DisbursementsSstatus,
    AccountsBank, AccountsBankStatus, DisbursementsMethod, EventModality,
    Contract, ContractStatus, ContractFiscalType, SalesCart, SalesCartStatus
} from "./types";

export const eventsData: Event[] = [
    {
        id: 1,
        idUser: 1,
        EventName: "The Wall: La Película con Orquesta en Vivo Puebla Nov",
        Description: "Hola",
        EventDescription: "Hola",
        EventModality: EventModality.Presencial,
        StartDate: new Date("2024-02-29T19:00:00"),
        EndDate: new Date("2024-02-29T19:30:00"),
        Location: "14 a sur",
        LocationURL: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCfxYY9o0mKJCaw5MXGbKc1czcytIQAvXs&q=19.0446205,-98.19238279999999",
        Venue: "Salon",
        hasSeats: true,
        ImageURL: "https://home-statics.boletia.com/uploads/event/banner/226085/boletiathewall9marzopueblacopia.jpeg",
        Slug: "evento-prueba-2",
        MaxTicketsPerOrder: 10,
        Logo: "https://home-statics.boletia.com/uploads/event/logo/226085/boletiaPRINCIPALthewall9marzopuebla2copia.jpeg",
        SeatsioId: "015553cd-e0df-4b5f-ac4b-9f721bdc19d6",
        AvailableQuantity: 400,
        CashPay: false,
        Status: EventStatus.Active,
        Sales: 100,
        TicketQuantity: 720,
        TicketSales: 11,
        CreateDate: new Date("2024-01-29T18:00:00"),
    },
    {
        id: 2,
        idUser: 1,
        EventName: "Conferencia de Tecnología Dic",
        Description: "Hola",
        EventDescription: "Hola",
        EventModality: EventModality.Presencial,
        StartDate: new Date("2024-02-28T18:00:00"),
        EndDate: new Date("2024-02-28T19:00:00"),
        Location: "14 a sur",
        LocationURL: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCfxYY9o0mKJCaw5MXGbKc1czcytIQAvXs&q=19.0446205,-98.19238279999999",
        Venue: "Salon",
        hasSeats: true,
        ImageURL: "https://home-statics.boletia.com/uploads/event/banner/226085/boletiathewall9marzopueblacopia.jpeg",
        Slug: "evento-prueba",
        MaxTicketsPerOrder: 10,
        Logo: "https://home-statics.boletia.com/uploads/event/logo/226085/boletiaPRINCIPALthewall9marzopuebla2copia.jpeg",
        SeatsioId: "015553cd-e0df-4b5f-ac4b-9f721bdc19d6",
        AvailableQuantity: 400,
        CashPay: false,
        Status: EventStatus.Active,
        Sales: 200,
        TicketQuantity: 1024,
        TicketSales: 50,
        CreateDate: new Date("2024-02-28T18:00:00"),
    },
    {
        id: 3,
        idUser: 2,
        EventName: "Conferencia de Tecnología Ene",
        Description: "Hola",
        EventDescription: "Hola",
        EventModality: EventModality.Presencial,
        StartDate: new Date("2024-02-28T18:00:00"),
        EndDate: new Date("2024-02-28T19:00:00"),
        Location: "14 a sur",
        LocationURL: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCfxYY9o0mKJCaw5MXGbKc1czcytIQAvXs&q=19.0446205,-98.19238279999999",
        Venue: "Salon",
        hasSeats: true,
        ImageURL: "https://home-statics.boletia.com/uploads/event/banner/226085/boletiathewall9marzopueblacopia.jpeg",
        Slug: "evento-prueba",
        MaxTicketsPerOrder: 10,
        Logo: "https://home-statics.boletia.com/uploads/event/logo/226085/boletiaPRINCIPALthewall9marzopuebla2copia.jpeg",
        SeatsioId: "015553cd-e0df-4b5f-ac4b-9f721bdc19d6",
        AvailableQuantity: 400,
        CashPay: false,
        Status: EventStatus.Active,
        Sales: 14520,
        TicketQuantity: 649,
        TicketSales: 48,
        CreateDate: new Date("2024-01-28T18:00:00"),
    },
    // {
    //     id: 4,
    //     EventName: "Conferencia de Tecnología Ene",
    //     Description: "Hola",
    //     EventDescription: "Hola",
    //     EventModality: "Presencial",
    //     StartDate: new Date("2024-02-28T18:00:00"),
    //     EndDate: new Date("2024-02-28T19:00:00"),
    //     Location: "14 a sur",
    //     LocationURL: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCfxYY9o0mKJCaw5MXGbKc1czcytIQAvXs&q=19.0446205,-98.19238279999999",
    //     hasSeats: true,
    //     ImageURL: "https://home-statics.boletia.com/uploads/event/banner/226085/boletiathewall9marzopueblacopia.jpeg",
    //     Slug: "evento-prueba",
    //     MaxTicketsPerOrder: 10,
    //     Logo: "https://home-statics.boletia.com/uploads/event/logo/226085/boletiaPRINCIPALthewall9marzopuebla2copia.jpeg",
    //     SeatsioId: "015553cd-e0df-4b5f-ac4b-9f721bdc19d6",
    //     AvailableQuantity: 400,
    //     CashPay: false,
    //     Status: EventStatus.Active,
    //     Sales: 14520,
    //     TicketQuantity: 649,
    //     TicketSales: 110,
    //     CreateDate: new Date("2024-01-27T18:00:00"),
    // },
    // {
    //     id: 5,
    //     EventName: "Conferencia de Tecnología Feb",
    //     Description: "Hola",
    //     EventDescription: "Hola",
    //     EventModality: "Presencial",
    //     StartDate: new Date("2024-02-28T18:00:00"),
    //     EndDate: new Date("2024-02-28T19:00:00"),
    //     Location: "14 a sur",
    //     LocationURL: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCfxYY9o0mKJCaw5MXGbKc1czcytIQAvXs&q=19.0446205,-98.19238279999999",
    //     hasSeats: true,
    //     ImageURL: "https://home-statics.boletia.com/uploads/event/banner/226085/boletiathewall9marzopueblacopia.jpeg",
    //     Slug: "evento-prueba",
    //     MaxTicketsPerOrder: 10,
    //     Logo: "https://home-statics.boletia.com/uploads/event/logo/226085/boletiaPRINCIPALthewall9marzopuebla2copia.jpeg",
    //     SeatsioId: "015553cd-e0df-4b5f-ac4b-9f721bdc19d6",
    //     AvailableQuantity: 400,
    //     CashPay: false,
    //     Status: EventStatus.Active,
    //     Sales: 14520,
    //     TicketQuantity: 649,
    //     TicketSales: 349,
    //     CreateDate: new Date("2024-02-14T18:00:00"),
    // },
    // {
    //     id: 6,
    //     EventName: "The Wall: La Película con Orquesta en Vivo Puebla Mar",
    //     Description: "Hola",
    //     EventDescription: "Hola",
    //     EventModality: "En línea",
    //     StartDate: new Date("2024-02-29T20:30:00"),
    //     EndDate: new Date("2024-02-29T22:30:00"),
    //     Location: "14 a sur",
    //     LocationURL: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCfxYY9o0mKJCaw5MXGbKc1czcytIQAvXs&q=19.0446205,-98.19238279999999",
    //     hasSeats: true,
    //     ImageURL: "https://home-statics.boletia.com/uploads/event/banner/226085/boletiathewall9marzopueblacopia.jpeg",
    //     Slug: "evento-prueba-3",
    //     MaxTicketsPerOrder: 10,
    //     Logo: "https://home-statics.boletia.com/uploads/event/logo/226085/boletiaPRINCIPALthewall9marzopuebla2copia.jpeg",
    //     SeatsioId: "015553cd-e0df-4b5f-ac4b-9f721bdc19d6",
    //     AvailableQuantity: 400,
    //     CashPay: false,
    //     Status: EventStatus.Active,
    //     Sales: 1256256,
    //     TicketQuantity: 649,
    //     TicketSales: 21,
    //     CreateDate: new Date("2024-02-01T18:00:00"),
    // },
];

export const ticketsPaymentsData: TicketsPayments[] = [
    // {
    //     id: 1,
    //     idEvent: 1,
    //     reservationId: 1,
    //     eventTicketId: 1,
    //     financialStatus: "paid",
    //     seat: "General 1",
    //     price: 300,
    //     paymentMethod: "Credit Card",
    //     paymentId: "1521c445swadfq!",
    //     paidDate: new Date("2024-01-29T13:49:00"),
    // },
    // {
    //     id: 2,
    //     idEvent: 1,
    //     reservationId: 1,
    //     eventTicketId: 1,
    //     financialStatus: "paid",
    //     seat: "General 1",
    //     price: 400,
    //     paymentMethod: "Credit Card",
    //     paymentId: "1521c445swadfq!",
    //     paidDate: new Date("2024-01-30T14:49:00"),
    // },
    // {
    //     id: 100,
    //     idEvent: 1,
    //     reservationId: 1,
    //     eventTicketId: 1,
    //     financialStatus: "paid",
    //     seat: "General 1",
    //     price: 400,
    //     paymentMethod: "Credit Card",
    //     paymentId: "1521c445swadfq!",
    //     paidDate: new Date("2024-01-30T16:49:00"),
    // },
    // {
    //     id: 3,
    //     idEvent: 1,
    //     reservationId: 1,
    //     eventTicketId: 1,
    //     financialStatus: "paid",
    //     seat: "General 1",
    //     price: 300,
    //     paymentMethod: "Credit Card",
    //     paymentId: "1521c445swadfq!",
    //     paidDate: new Date("2024-01-31T13:49:00"),
    // },
    {
        id: 4,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 100,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-02-01T13:49:00"),
    },
    {
        id: 5,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 200,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-02-02T13:49:00"),
    },
    {
        id: 6,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 300,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-02-03T13:49:00"),
    },
    {
        id: 6,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 400,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-02-04T13:49:00"),
    },
    {
        id: 7,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 500,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-02-05T13:49:00"),
    },
    {
        id: 8,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 600,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-02-06T13:49:00"),
    },
    {
        id: 9,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 600,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-02-06T13:49:00"),
    },
    {
        id: 10,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 500,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-02-07T13:49:00"),
    },
    {
        id: 11,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 400,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-03-01T13:49:00"),
    },
    {
        id: 11,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 700,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-03-02T13:49:00"),
    },
    {
        id: 12,
        idEvent: 1,
        reservationId: 1,
        eventTicketId: 1,
        financialStatus: "paid",
        seat: "General 1",
        price: 100,
        paymentMethod: "Credit Card",
        paymentId: "1521c445swadfq!",
        paidDate: new Date("2024-03-03T13:49:00"),
    },
];

export const DisbursementsData: Disbursements[] = [
    {
        id: 1,
        idUser: 1,
        idEvent: 1,
        origen: "BBVA Débito",
        CLABE: "121212121212",
        amount: 250000,
        reference: "12570312",
        method: DisbursementsMethod.Transferencia,
        note: "Pagado",
        status: DisbursementsSstatus.Pagado,
        dateDisbursements: new Date("2024-03-01T13:49:00")
    },
    {
        id: 2,
        idUser: 1,
        idEvent: 2,
        origen: "BBVA Débito",
        CLABE: "121212121212",
        amount: 1125652,
        reference: "12570312",
        method: DisbursementsMethod.Transferencia,
        note: "Procesando",
        status: DisbursementsSstatus.Procesando,
        dateDisbursements: null
    },
];

export const AccountsBankData: AccountsBank[] = [
    {
        id: 1,
        idUser: 1,
        name: "BBVA Débito",
        accountNumber: "123456789",
        CLABE: "1234567891011",
        bank: "BBVA",
        status: AccountsBankStatus.Activa,
        createDate: new Date("2024-03-01T13:49:00")
    }
];

export const ContractData: Contract[] = [
    {
        id: 1,
        idUser: 1,
        idUserFiscalType: ContractFiscalType.Fisica,
        identificacionAnverso: null,
        identificacionReverso: null,
        actaConstitutiva: null,
        poderNotarial: null,
        comprobanteDomicilio: null,
        caratulaEstadoCuenta: null,
        constanciaSituacionFiscal: null,
        name: "Angel Eduardo",
        nombreRepresentanteLegal: "Jorge Rojas",
        codigoPostal: "72587",
        ciudad: "Puebla",
        nombreEmpresaOrganizador: "La Empresa",
        rfcPerson: "TOVA891207KA8",
        regimenFiscal: ['Régimen Simplificado de Confianza', 'Coordinados'],
        createDate: new Date("2024-03-01T13:49:00"),
        updateDate: new Date("2024-03-01T13:49:00"),
        estatus: ContractStatus.Vigente,
        urlContract: "https://google.com"
    }
];

export const SalesCartData: SalesCart[] = [
    {
        id: 1,
        idUser: 1,
        idEvent: 1,
        urlSalesCart: "https://google.com",
        status: SalesCartStatus.Emitida,
        createDate: new Date("2024-03-01T13:49:00")
    }
];