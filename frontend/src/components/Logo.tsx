import Image from "next/image";
import { useComputedColorScheme } from "@mantine/core";
import Logo from "@/models/Logo"
import api from "@/config/api";

export default function LogoComponent({ logo, size = 36 }: { logo: Logo, size?: number }) {
  const computedColorScheme = useComputedColorScheme('light');
  var icon = computedColorScheme === "light" ? logo.attributes.light : logo.attributes.dark;

  return (
    <>
      <Image 
        src={api + icon.data.attributes.url}
        width={size}
        height={size} 
        alt={icon.data.attributes.alternativeText}
      /> 
      {logo.attributes.sitename}
    </>
  );
}