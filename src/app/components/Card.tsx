import React from "react";
import type { ReactElement } from "react";
import styled from "styled-components";
import { ICharacter } from "../../type";

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
  backface-visibility: inherit;
  border-radius: 4px;
`;

const Back = styled.div` 
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  backface-visibility: inherit;
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

export default function CardWrapper({  active, onClick, character, children }: { active: boolean, onClick?: (id: number) => void, character: ICharacter, children: ReactElement }) {
    const [ rotation] = React.useState((Math.random() * 40) - 40);
    const [ positionX] = React.useState((Math.random() * 400) - 200);
    const [ positionY] = React.useState((Math.random() * 200) - 100);

    const style = {
        transform: !active ? 
            `translateX(${positionX}%) translateY(${positionY}%) rotateZ(${rotation}deg) rotate3d(0, 1, 0, 180deg)`: 
            "scale(1.5)",
        zIndex: active ? 2 : 0,
        padding: active ? "4px" : 0
    };
    
    return (
        <Card onClick={() => { !!onClick && onClick(character.id); }} style={style}>
            <Front>
                {children}
            </Front>
            <Back>
                <CardBackFaceImage src="/assets/card-back-face.jpg"></CardBackFaceImage>
            </Back>
        </Card>
    );
}