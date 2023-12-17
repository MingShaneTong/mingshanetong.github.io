import NavbarElement from '@/components/Navbar';
import FooterElement from '@/components/Footer';
import { getNavData, getFooterData, getLogoData } from '@/controllers/layoutController';
import Response from '@/models/api/Response';
import Logo from '@/models/Logo';
import { Navbar } from '@/models/Navbar';
import { Footer } from '@/models/Footer';

export default async function Template({ children }: { children: React.ReactNode[] }) {
  let logoData: Response<Logo>;
  let navData: Response<Navbar>;
  let footerData: Response<Footer>;

  try {
    logoData = await getLogoData();
    navData = await getNavData();
    footerData = await getFooterData();
  } catch {
    return children;
  }

  return (
    <>
      <NavbarElement data={navData.data} logo={logoData.data} />
      {children}
      <FooterElement data={footerData.data} logo={logoData.data} />
    </>
  );
}