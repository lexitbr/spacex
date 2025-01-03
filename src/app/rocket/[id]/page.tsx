import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import "react-slideshow-image/dist/styles.css";
import React from "react";
import { getRocket } from "@/services/rocket.service";
import { Rocket } from "@/types/rocket.type";
import Slider from "@/components/slider.component";
import { FaArrowLeft } from "react-icons/fa";
import RocketDetail from "@/components/rocket.detail.component";
import { RiWeightLine } from "react-icons/ri";
import { GoRocket } from "react-icons/go";
import { TbLocationDollar } from "react-icons/tb";
import { AiOutlineColumnWidth, AiOutlineColumnHeight } from "react-icons/ai";
import Link from "next/link";
import RocketMetatags from "@/components/rocket.metatags.component";
import { ImWikipedia } from "react-icons/im";
import { CiFlag1 } from "react-icons/ci";

export default async function RocketDetails({
  params,
}: {
  params: { id: string };
}) {
  const rocket = (await getRocket(params.id)) as Rocket;

  return (
    <>
      <RocketMetatags rocket={rocket} />

      <Flex direction="column">
        <Box
          style={{
            position: "relative",
            display: "block",
            width: "100%",
          }}
          mb="6"
        >
          <Heading align="center" color="violet">
            {rocket.name}
          </Heading>
          <Link href="/">
            <FaArrowLeft
              color="mint"
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                left: 0,
                top: 5,
              }}
            />
          </Link>
        </Box>

        <Slider images={rocket.flickr_images} />

        <Text size="1" mt="3" color="violet">
          {rocket.description}
        </Text>

        <Link href={rocket.wikipedia} target="_blank">
          <Button
            color="gray"
            style={{ width: 120, color: "gray", cursor: "pointer" }}
            mt="4"
            variant="outline"
          >
            <ImWikipedia style={{ width: 30, height: 30 }} /> Wikipedia
          </Button>
        </Link>

        <Heading mt="4" size="2" mb="4" color="mint">
          Detalhes:
        </Heading>

        <Grid columns={{ xs: "1", lg: "2" }} gap="3">
          <RocketDetail
            title="Primeiro lançamento"
            value={new Date(rocket.first_flight).toLocaleDateString("pt-BR")}
            Icon={GoRocket}
          />
          <RocketDetail
            title="Custo por lançamento"
            value={rocket.cost_per_launch.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
            Icon={TbLocationDollar}
          />
          <RocketDetail
            title="Altura"
            value={rocket.height.meters.toLocaleString("pt-BR", {
              style: "unit",
              unit: "meter",
            })}
            Icon={AiOutlineColumnHeight}
          />
          <RocketDetail
            title="Largura"
            value={rocket.diameter.meters.toLocaleString("pt-BR", {
              style: "unit",
              unit: "meter",
            })}
            Icon={AiOutlineColumnWidth}
          />
          <RocketDetail
            title="Peso"
            value={rocket.mass.kg.toLocaleString("pt-BR", {
              style: "unit",
              unit: "kilogram",
            })}
            Icon={RiWeightLine}
          />
          <RocketDetail title="País" value={rocket.country} Icon={CiFlag1} />
        </Grid>
      </Flex>
    </>
  );
}
