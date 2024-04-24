import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface DateFilterProps {
    handleDateFilter: (startDate: Date | null, endDate: Date | null) => void;
    startDate: Date | null;
    endDate: Date | null;
}

const DateFilter: React.FC<DateFilterProps> = ({ handleDateFilter, startDate, endDate }) => {
    const [value, setValue] = useState({
        startDate: startDate,
        endDate: endDate
    });

    const today = new Date();

    useEffect(() => {
        setValue({
            startDate: startDate,
            endDate: endDate
        });
    }, [startDate, endDate]);

    const handleValueChange = (newValue: any) => {
        setValue(newValue);
        if (newValue.startDate && newValue.endDate) {
            handleDateFilter(newValue.startDate, newValue.endDate);
        }
        else {
            // Obtener la fecha de hoy

            // Obtener una fecha antigua (por ejemplo, un año atrás)
            const oneYearAgo = new Date(today);
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

            handleDateFilter(null, null);
        }
    };

    return (
        <div className="flex justify-end flex-wrap items-center gap-4 mb-6 lg:mb-8">
            <div>
                <i className="las la-filter"></i>
            </div>
            <div>
                <Datepicker
                    i18n={"es"}
                    configs={{
                        shortcuts: {
                            today: "Hoy",
                            yesterday: "Ayer",
                            past: period => `Últimos ${period} días`,
                            currentMonth: "Mes actual",
                            pastMonth: "Mes anterior"
                        },
                        footer: {
                            cancel: "Cancelar",
                            apply: "Aplicar"
                        }
                    }}
                    displayFormat={"DD/MM/YYYY"}
                    maxDate={today}
                    value={value}
                    onChange={handleValueChange}
                    containerClassName="w-full"
                    showShortcuts={true}
                    placeholder={"Filtrar..."}
                />
            </div>
            <div>
                <button onClick={() => handleValueChange({})}>Borrar</button>
            </div>
        </div>
    );
};

export default DateFilter;
