import Image from "next/image";
import { Group, Text, useComputedColorScheme } from "@mantine/core";
import Logo from "@/models/Logo"
import { FRONTEND_API_URL } from "@/config/api";
import { Manrope } from 'next/font/google';
import Link from "next/link";

const manrope = Manrope({ 
  weight: "500",
  subsets: ["latin"]
});

export default function LogoComponent({ logo, size = 36 }: { logo: Logo, size?: number }) {
  // const computedColorScheme = useComputedColorScheme('light');
  // var iconStyles = computedColorScheme === "light" ? 
  //   [{ display: "block" }, { display: "none" }]: 
  //   [{ display: "none" }, { display: "block" }];
        
  return (
    <Link href="/">  
      <Group gap="xs">
        <Image 
          src={FRONTEND_API_URL + logo.attributes.light.data.attributes.url}
          width={size}
          height={size} 
          alt={logo.attributes.light.data.attributes.alternativeText}
          // style={iconStyles[0]}
        />
        {/* <Image 
          src={FRONTEND_API_URL + logo.attributes.dark.data.attributes.url}
          width={size}
          height={size} 
          alt={logo.attributes.dark.data.attributes.alternativeText}
          style={iconStyles[1]}
        /> */}
        <Text style={manrope.style} size="lg">
          {logo.attributes.sitename}
        </Text>
      </Group>
    </Link>
  );
}