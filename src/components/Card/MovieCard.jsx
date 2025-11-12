import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useMovie } from "../../hooks/useMovie";
import StarIcon from "@mui/icons-material/Star";

export function MovieCard() {
  const { movies } = useMovie();
  console.log(movies);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          color: "white",
          display: "flex",
          padding: "25px",
          fontWeight: "bold",
          fontSize: "20px",
          marginLeft: "68px",
        }}
      >
        Latest YIFY Movies Torrents
      </Box>

      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          gridTemplateColumns: [
            "auto auto",
            "auto auto auto",
            "auto auto auto auto",
          ],
          gap: 4,
        }}
      >
        {movies.map((movie) => {
          return (
            <Card
              component="a"
              href="#"
              key={movie.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "transparent",
                position: "relative",
                textAlign: "center",
              }}
            >
              <CardContent
                sx={{
                  transition: "border 0.3s ease-in-out",
                  padding: 0,
                  border: "5px solid white",
                  position: "relative",
                  backgroundColor: "white",

                  "&:hover": {
                    border: "5px solid #6ac045",

                    "& img": {
                      filter: "brightness(0.4)",
                      transition: "filter 0.3s ease-in-out",
                    },
                    "& .overlay-info": {
                      opacity: 1,
                      transform: "translateY(-250px)",
                    },
                    "& .view-details": {
                      transition: "transform 0.4s ease-in-out",
                      transform: "translateY(-35px)",
                      marginBottom: "20px",
                    },
                  },

                  "&:last-child": {
                    paddingBottom: 0,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={movie.medium_cover_image}
                  alt="Movie Pic"
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    padding: 0,
                  }}
                ></CardMedia>
                <Box
                  className="overlay-info"
                  sx={{
                    color: "white",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    opacity: 0,
                    transition:
                      "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                    transform: "translateY(-250px)",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      transform: "translateY(-50px)",
                    }}
                  >
                    <Typography>
                      {
                        <StarIcon
                          sx={{
                            color: "lime",
                            fontSize: "40px",
                            fontWeight: "bold",
                          }}
                        />
                      }
                    </Typography>
                    <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
                      {movie.rating}/10
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      transform: "translateY(-40px)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        padding: "10px",
                        marginTop: 0,
                      }}
                    >
                      {movie.genres[0]} <br />
                      {movie.genres[1]}
                    </Typography>
                  </Box>
                  <Button
                    className="view-details"
                    variant="contained"
                    color="success"
                    sx={{
                      fontWeight: "bold",
                      transform: "translateY(-10px)",
                      padding: "10px",
                      marginBottom: "30px",
                    }}
                  >
                    {" "}
                    View Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
