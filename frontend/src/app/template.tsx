import NavbarElement from '@/components/Navbar';
import FooterElement from '@/components/Footer';
import { getNavData, getFooterData } from '@/controllers/layoutController';


export default async function Template({ children }: { children: React.ReactNode[] }) {
  let navData = await getNavData();
  let footerData = await getFooterData();

  return (
    <>
      <NavbarElement data={navData.data} />
      {children}
      <FooterElement data={footerData.data}/>
    </>
  );
}