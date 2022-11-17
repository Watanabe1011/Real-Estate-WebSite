import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import Property from "../components/Property";
import SearchFilters from "../components/SearchFilters";
import { Hit as ForRentHit } from "../interfaces/for-rent";
import { Hit as ForSaleHit } from "../interfaces/for-sale";
import { baseUrl, fetchApi } from "../utils/fetchApi";

type Props = {
  properties: any;
};

const Search: NextPage<Props> = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prev) => !prev)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter}></Icon>
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties?.hits?.map((property: ForRentHit | ForSaleHit) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image
            src="/noresults.svg"
            alt="no result"
            width={200}
            height={200}
          />
          <Text fontSize="2xl" marginTop="3">
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data,
    },
  };
};
