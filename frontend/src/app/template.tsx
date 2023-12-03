import NavbarElement from '@/components/Navbar';
import FooterElement from '@/components/Footer';
import { getNavData, getFooterData, getLogoData } from '@/controllers/layoutController';

export default async function Template({ children }: { children: React.ReactNode[] }) {
  let logoData = await getLogoData();
  let navData = await getNavData();
  let footerData = await getFooterData();

  return (
    <>
      <NavbarElement data={navData.data} logo={logoData.data} />
      {children}
      <FooterElement data={footerData.data} logo={logoData.data} />
    </>
  );
}