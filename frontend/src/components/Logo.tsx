import Image from "next/image";
import { Group, Text, useComputedColorScheme } from "@mantine/core";
import Logo from "@/models/Logo"
import api from "@/config/api";
import styles from "./Logo.module.css";
import { Manrope } from 'next/font/google';
import Link from "next/link";

const manrope = Manrope({ 
  weight: "500",
  subsets: ["latin"]
});

export default function LogoComponent({ logo, size = 36 }: { logo: Logo, size?: number }) {
  const computedColorScheme = useComputedColorScheme('light');
  var icon = computedColorScheme === "light" ? logo.attributes.light : logo.attributes.dark;

  return (
    <Link href="/">  
      <Group gap="xs">
        <Image 
          src={api + icon.data.attributes.url}
          width={size}
          height={size} 
          alt={icon.data.attributes.alternativeText}
        /> 
        <Text style={manrope.style} size="lg">
          {logo.attributes.sitename}
        </Text>
      </Group>
    </Link>
  );
}