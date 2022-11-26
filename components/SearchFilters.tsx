import { Box, Flex, Select } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters: NextPage = () => {
  const [filters, searchFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues: any) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            w="fit-content"
            p="2"
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
