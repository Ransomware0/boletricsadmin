import Extensions from "@/components/settings/social-network/Extensions";
import SocialMedia from "@/components/settings/social-network/SocialMedia";
import Banner from "@/components/shared/Banner";

const SocialNetworkPage = () => {
  return (
    <div>
      <Banner title="Social Network" />
      <div className="flex flex-col gap-4 xxl:gap-6">
        <Extensions />
        <SocialMedia />
      </div>
    </div>
  );
};

export default SocialNetworkPage;
