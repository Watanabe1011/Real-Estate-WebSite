import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import millify from "millify";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { Hit as ForRentHit } from "../interfaces/for-rent";
import { Hit as ForSaleHit } from "../interfaces/for-sale";
import DefaultImage from "../public/house.jpg";

type Props = {
  property: ForRentHit | ForSaleHit;
};

const Property: NextPage<Props> = ({ property }) => {
  return (
    <Link href={`/property/${property.externalID}`} passHref>
      <Flex
        flexWrap="wrap"
        w={[300, 420]}
        p="5"
        paddingTop="0"
        justifyContent="flex-start"
        cursor="pointer"
      >
        {/* PROPERTY IMAGE */}
        <Box>
          <Image
            src={`${
              property.coverPhoto ? property.coverPhoto.url : DefaultImage
            }`}
            width={400}
            height={260}
            alt="House"
          />
        </Box>
        {/* PROPERTY DESCRIPTION */}
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {property.isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(property.price)}
                {property.rentFrequency && `/${property.rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={property.agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {property.rooms} <FaBed /> | {property.baths} <FaBath />{" "}
            {millify(property.area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize="lg">
            {property.title.length > 30
              ? `${property.title.substring(0, 30)}...`
              : property.title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
