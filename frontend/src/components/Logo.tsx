import Image from "next/image";
import { Group, Text } from "@mantine/core";
import Logo from "@/models/Logo"
import { FRONTEND_UPLOAD_URL } from "@/config/api";
import { Manrope } from 'next/font/google';
import Link from "next/link";

const manrope = Manrope({ 
  weight: "500",
  subsets: ["latin"]
});

export default function LogoComponent({ logo, size = 36 }: { logo: Logo, size?: number }) {
  return (
    <Link href="/">  
      <Group gap="xs">
        <Image 
          src={FRONTEND_UPLOAD_URL + logo.attributes.light.data.attributes.url}
          width={size}
          height={size} 
          alt={logo.attributes.light.data.attributes.alternativeText}
        />
        <Text style={manrope.style} size="lg">
          {logo.attributes.sitename}
        </Text>
      </Group>
    </Link>
  );
}