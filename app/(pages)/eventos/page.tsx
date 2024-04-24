import React from 'react';
import Banner from '@/components/shared/Banner';
import TablaEventos from '@/components/eventos/TablaEventos';

const page = () => {
    return (
        <div>
            <Banner title="Eventos" />
            <div className="grid grid-cols-1 gap-4 xxl:gap-6">
                <div className="min-h-screen">
                    <TablaEventos />
                </div>
            </div>
        </div>
    );
};

export default page;