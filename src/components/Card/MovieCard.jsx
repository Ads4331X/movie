import { Box, CardMedia, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useMovie } from "../../hooks/useMovie";

export function MovieCard() {
  let { movies } = useMovie();

  console.log(movies);

  return (
    <Container>
      <Box
        sx={{
          color: "white",
          display: "flex",
          padding: "25px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Latest YIFY Movies Torrents
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                image={movie.medium_cover_image}
                alt="Movie Pic"
                sx={{ height: 300 }}
              ></CardMedia>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
