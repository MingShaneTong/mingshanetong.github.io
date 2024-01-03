import NavbarElement from '@/components/Navbar';
import FooterElement from '@/components/Footer';
import { getNavData, getSocialData, getLogoData } from '@/controllers/layoutController';
import Response from '@/models/api/Response';
import Logo from '@/models/Logo';
import { Navbar } from '@/models/Navbar';
import { Social } from '@/models/Social';

export default async function Template({ children }: { children: React.ReactNode[] }) {
  let logoData: Response<Logo>;
  let navData: Response<Navbar>;
  let socialData: Response<Social>;

  try {
    logoData = await getLogoData();
    navData = await getNavData();
    socialData = await getSocialData();
  } catch {
    return children;
  }

  return (
    <>
      <NavbarElement data={navData.data} logo={logoData.data} />
      {children}
      <FooterElement socials={socialData.data} logo={logoData.data} />
    </>
  );
}