import { Rocket } from "@/types/rocket.type";
import {
  Card,
  Grid,
  Inset,
  Text,
  Strong,
  Badge,
  Box,
  Heading,
  Link as Ulink,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const RocketItemBox = ({ rocket }: { rocket: Rocket }) => (
  <Box
    style={{
      borderRadius: 5,
      overflow: "hidden",
      display: "block",
      position: "relative",
    }}
  >
    <Link href={`/rocket/${rocket.id}`} passHref>
      <Badge
        color={rocket.active ? "lime" : "red"}
        size="1"
        variant="solid"
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        {rocket.active ? "Ativo" : "Inativo"}
      </Badge>
      <Image
        src={rocket.flickr_images[0]}
        alt="Rocket Image"
        style={{
          display: "block",
          objectFit: "cover",
          width: "100%",
          height: 185,
          backgroundColor: "var(--gray-5)",
        }}
        width={748}
        height={498}
      />
      <Box
        position="absolute"
        bottom="0"
        width="100%"
        style={{ background: `rgba(0, 0, 0, 0.7)` }}
      >
        <Heading
          as="h2"
          size="2"
          mt="3"
          mb="2"
          align="center"
          style={{ color: "white" }}
        >
          {rocket.name}
        </Heading>
      </Box>
    </Link>
  </Box>
);

export default RocketItemBox;
