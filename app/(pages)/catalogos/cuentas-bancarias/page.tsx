import TablaCuentasBancarias from "@/components/catalogos/TablaCuentasBancarias";
import Banner from "@/components/shared/Banner";

const CuentasBancarias = () => {
    return (
        <div>
            <Banner title="Cuentas Bancarias" />
            <div className="grid grid-cols-12 gap-4 xxl:gap-6">
                <div className="col-span-12 min-h-screen">
                    <TablaCuentasBancarias />
                </div>
            </div>
        </div>
    );
};

export default CuentasBancarias;
