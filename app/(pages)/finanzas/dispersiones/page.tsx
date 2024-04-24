import React from 'react';
import Banner from '@/components/shared/Banner';
import TablaDispersiones from '@/components/finanzas/Dispersiones/TablaDispersiones';

const page = () => {
    return (
        <div>
            <Banner title="Dispersiones" />
            <div className="grid grid-cols-1 gap-4 xxl:gap-6">
                <div className='col-span-1 min-h-screen'>
                    <TablaDispersiones />
                </div>
            </div>
        </div>
    );
};

export default page;