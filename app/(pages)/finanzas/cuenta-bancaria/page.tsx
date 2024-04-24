import DatosBancarios from "@/components/finanzas/DatosFiscales/DatosBancarios";
import Banner from "@/components/shared/Banner";

const ProfilePage = () => {
  return (
    <div>
      <Banner title="Datos fiscales" />
      <DatosBancarios />
    </div>
  );
};

export default ProfilePage;
