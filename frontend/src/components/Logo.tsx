import { Group, Text } from "@mantine/core";
import Logo from "@/models/Logo"
import { Manrope } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";

const manrope = Manrope({ 
  weight: "500",
  subsets: ["latin"]
});

export default function LogoComponent({ logo, size = 36 }: { logo: Logo, size?: number }) {
  return (
    <Link href="/">  
      <Group gap="xs">
        <Image 
          src={logo.attributes.media.url}
          width={size}
          height={size} 
          alt={logo.attributes.media.alternativeText}
        />
        <Text style={manrope.style} size="lg">
          {logo.attributes.sitename}
        </Text>
      </Group>
    </Link>
  );
}