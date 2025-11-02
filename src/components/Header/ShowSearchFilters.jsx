import {
  Container,
  Input,
  Button,
  Select,
  FormControl,
  MenuItem,
  Box,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useSearchContext } from "../../context/SearchContext";

export function ShowSearchFilters() {
  const { showSearchDetails } = useSearchContext();

  const [filters, setFilters] = useState({
    quality: "All",
    genre: "All",
    year: "All",
    language: "All",
    rating: "All",
    type: "All",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  if (!showSearchDetails) return null;

  const filterOptions = [
    {
      label: "Quality",
      value: "quality",
      options: ["All", "480p", "720p", "1080p", "1080p.x265", "2160p", "3D"],
    },
    {
      label: "Genre",
      value: "genre",
      options: ["All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi"],
    },
    {
      label: "Year",
      value: "year",
      options: ["All", "2025", "2024", "2023", "2022", "2021"],
    },
    {
      label: "Language",
      value: "language",
      options: ["All", "English", "Hindi", "Spanish", "French", "Japanese"],
    },
    {
      label: "Rating",
      value: "rating",
      options: ["All", "1+", "2+", "3+", "4+", "5+"],
    },
    {
      label: "Type",
      value: "type",
      options: ["All", "Movie", "TV Show", "Documentary"],
    },
  ];

  return (
    <Container
      sx={{
        position: "fixed",
        top: "38px",
        left: 0,
        right: 0,
        backgroundColor: "#171717",
        color: "#999999",
        padding: "20px",
        zIndex: 40,
        borderBottom: "1px solid #2f2f2f",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          marginBottom: 2,
        }}
      >
        <Input
          type="search"
          placeholder="Search for a movie"
          sx={{
            flex: 1,
            backgroundColor: "#2f2f2f",
            color: "white",
            border: "1px solid #444",
            padding: "4px 8px",
            borderRadius: 1,
          }}
        />
        <Button
          variant="contained"
          color="success"
          sx={{
            borderRadius: 0,
          }}
        >
          Search
        </Button>
      </Box>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        sx={{
          textAlign: "center",
        }}
      >
        {filterOptions.map((filter) => (
          <Grid
            key={filter.value}
            size={6}
            // xs={12}
            // sm={6}
            // md={4}
            // lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <FormControl>
              <label
                htmlFor={filter.value}
                style={{
                  color: "#999999",
                  textAlign: "center",
                  marginBottom: "4px",
                }}
              >
                {filter.label}
              </label>
              <Select
                name={filter.value}
                value={filters[filter.value]}
                onChange={handleFilterChange}
                sx={{
                  backgroundColor: "#282828",
                  color: "#999999",
                  width: "200px",
                  "& .MuiSelect-icon": {
                    color: "#999999",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#282828",
                      color: "white",
                    },
                  },
                }}
              >
                {filter.options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>
      ;
    </Container>
  );
}
