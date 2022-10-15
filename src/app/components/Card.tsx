import React from "react";
import styled from "styled-components";
import { StyledEngineProvider } from "@mui/styled-engine";
import { Card as MUICard, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { GetCharacters_characters_results } from "../services/rickandMortyService/__generated__/GetCharacters";

const useStyles = makeStyles({
  card: {
    border: 0,
    boxSizing: "content-box",
    borderColor: "transparent",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#3c3e4480",
    color: "#f5f5f5",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: "5px",
    columnGap: "2%",
  },
  cardContent: {
    right: 0,
    padding: "5px",
    position: "absolute",
    margin: "6px",
    backdropFilter: "brightness(0.97) blur(1px)",
  },
  title1: {
    fontWeight: 800,
    lineHeight: 1,
    textOrientation: "mixed",
    "writing-mode": "vertical-lr",
    fontSize: "1.5rem",
    textShadow: "1px 1px #02020282",
    fontFamily: "rickandmorty",
  },
  titleStatus: {
    position: "absolute",
    color: "red",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    textOrientation: "mixed",
    "writing-mode": "vertical-lr",
    fontSize: "6em",
    transform: "rotateZ(220deg)",
    fontFamily: "rickandmorty",
  },
});

const Card = styled.div`
  width: 200px;
  height: 300px;
  position: absolute;
  transform-style: preserve-3d;
  backface-visibility: none;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 1s;
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: white;
  transform: translateZ(1px);
  backface-visibility: hidden;
  border-radius: 4px;
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 5px;
  transform: rotate3d(0, 1, 0, -180deg);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid black;
  transition-duration: 300ms;

  &:hover {
    transform: scale(1.1) rotate3d(0, 1, 0, -180deg);
  }
`;

const CardBackFaceImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const CardImg = styled.div`
  margin: 5px;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function CardWrapper({
  active,
  onClick,
  character,
}: {
  active: boolean;
  onClick?: (id: number | null | undefined) => void;
  character: GetCharacters_characters_results | null;
}) {
  const [rotation] = React.useState(Math.random() * 40 - 40);
  const [positionX] = React.useState(Math.random() * 400 - 200);
  const [positionY] = React.useState(Math.random() * 200 - 100);
  const classes = useStyles();

  const style = {
    transform: !active
      ? `translateX(${positionX}%) translateY(${positionY}%) rotateZ(${rotation}deg) rotate3d(0, 1, 0, 180deg)`
      : "scale(1.5)",
    zIndex: active ? 2 : 0,
    padding: active ? "4px" : 0,
  };

  return (
    <Card
      data-cy={"card"}
      onClick={() => {
        !!onClick && onClick(character?.id);
      }}
      style={style}
    >
      <Front data-cy={"front"}>
        <StyledEngineProvider injectFirst={true}>
          <MUICard className={classes.card}>
            <CardImg
              style={{ backgroundImage: `url(${character?.image || ""})` }}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h2" component="p" className={classes.title1}>
                {!!character && character.name?.toUpperCase()}
              </Typography>
            </CardContent>
            <Typography component="div" className={classes.titleStatus}>
              {!!character &&
                character.status === "Dead" &&
                character.status.toUpperCase()}
            </Typography>
          </MUICard>
        </StyledEngineProvider>
      </Front>
      <Back data-cy={"back"}>
        <CardBackFaceImage src="/assets/card-back-face.jpg"></CardBackFaceImage>
      </Back>
    </Card>
  );
}
