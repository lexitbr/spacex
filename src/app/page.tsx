import RocketItemBox from "@/components/rocket.component";
import { getRockets } from "@/services/rocket.service";
import { Rocket } from "@/types/rocket.type";
import {
  Text,
  Container,
  Grid,
  Heading,
  Code,
  Flex,
  Link as Ulink,
  Button,
} from "@radix-ui/themes";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

export default async function Home() {
  const rockets = await getRockets();

  return (
    <>
      <Heading align="center" as="h1" color="violet">
        SpaceX Rockets
      </Heading>
      <Text size="1" align="center" as="p" mt="2" mb="7" color="gray">
        Clique em um foguete para ver mais detalhes, fotos e curiosidades.
      </Text>

      <Grid columns={{ xs: "9", md: "2" }} gap="5">
        {rockets.map((rocket: Rocket, index: number) => (
          <RocketItemBox key={index} rocket={rocket} />
        ))}
      </Grid>

      <Flex align="center" justify="center" mt="9" direction="column" gap="2">
        <Text size="1" color="gray">
          Desenvolvido por{" "}
          <Ulink
            href="https://www.linkedin.com/in/filipecamargo10/"
            target="_blank"
          >
            Filipe Camargo.
          </Ulink>
        </Text>
        <Text size="1" color="gray" ml="2">
          Um teste de NextJS 14 com full SSR.
        </Text>

        <Ulink href="https://github.com/lexitbr/spacex" target="_blank">
          <Button variant="outline" color="violet">
            <BsGithub /> View on Github
          </Button>
        </Ulink>
      </Flex>

      <Flex
        justify="center"
        align="center"
        style={{ fontSize: "40px" }}
        mt="4"
        gap="4"
      >
        <TbBrandNextjs color="gray" /> <TbBrandNodejs color="gray" />
      </Flex>
    </>
  );
}
