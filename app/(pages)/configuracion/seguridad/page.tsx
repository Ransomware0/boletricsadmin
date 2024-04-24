import ChangePassword from "@/components/settings/security/ChangePassword";
import TwoFactor from "@/components/settings/security/TwoFactor";
import Banner from "@/components/shared/Banner";

const SecurityPage = () => {
  return (
    <div>
      <Banner title="Seguridad" />
      <div className="flex flex-col gap-4 xxl:gap-6">
        <ChangePassword />
        {/* <TwoFactor /> */}
      </div>
    </div>
  );
};

export default SecurityPage;
