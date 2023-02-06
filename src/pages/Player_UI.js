import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  PageStyle,
  Container,
  DialogContainer,
  ButtonGrid,
  OptionButton,
  Sidebar,
  Title,
  Door,
  Avatar,
  Window,
  Scenery,
} from "../styles/Player_UI.style";
import BrownHare from "../assets/BrownHare.png";
import GrayRabbit from "../assets/GrayRabbit.png";
import WhiteBunny from "../assets/WhiteBunny.png";

const PlayerUI = (props) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [gameState, setGameState] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const textNodes = props.dialogs;
  const location = useLocation();
  const player_name = location.state.name;
  const avatar = location.state.avatar;
  const test = false;
  let navigate = useNavigate();
  const [image, setImage] = useState();

  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  const endGame = () => {
    setAnswers([]);
    setGameState([]);
    let path = "/end";
    navigate(path);
  };

  const handleAnswerButtonClick = (nextNode, setState = null) => {
    if (nextNode < 0) {
      nextNode = 1;
      if (test) {
        endGame();
      }
    }
    console.log(gameState);

    if (setState) {
      let data = gameState.filter((item) => item.id === setState.id);
      if (data.length > 0) {
        let number = gameState.findIndex((result) => result.id === setState.id);
        gameState[number].value = gameState[number].value + setState.value;
        // console.log(gameState);
      } else {
        gameState.push(setState);
      }
    }

    setCurrentQuestion(
      textNodes.findIndex((textNode) => textNode.id === nextNode)
    );
  };

  useEffect(() => {
    const readQuestion = (id) => {
      if (textNodes[id].text.includes("player")) {
        setQuestion(textNodes[id].text.replace(/'player'/g, player_name));
      }
      setQuestion(textNodes[id].text.replace("'player'", player_name));
      setImage(require("../assets/" + textNodes[id].image + ".jpg"));

      while (answers.length > 0) {
        answers.pop();
      }

      textNodes[id].options.forEach((option) => {
        if (option.requiredState) {
          let data = gameState.filter(
            (item) =>
              item.id === option.requiredState.id &&
              item.value >= option.requiredState.value
          );

          if (data.length > 0) {
            answers.push(option);
            let number = gameState.findIndex(
              (result) => result.id === option.requiredState.id
            );
            gameState[number].value =
              gameState[number].value - option.requiredState.value;

            if (gameState[number].value === 0) {
              gameState.splice(number, 1);
            }
          }
        } else {
          // console.log(option);
          answers.push(option);
        }
      });
    };

    readQuestion(currentQuestion);
  });

  return (
    <PageStyle>
      <Window>
        <Title>
          <h1>Arboreal Quest: Have fun {player_name}!</h1>
        </Title>

        <Container>
          <Scenery src={image} />

          <Sidebar>
            <div>
              {avatar === "Gray Rabbit" ? (
                <Avatar src={GrayRabbit} />
              ) : avatar === "Brown Hare" ? (
                <Avatar src={BrownHare} />
              ) : (
                <Avatar src={WhiteBunny} />
              )}
            </div>
            <div>
              <Door size={100} onClick={routeChange} />
            </div>
          </Sidebar>
        </Container>

        <DialogContainer>
          
          <div>{question}</div>
          <ButtonGrid>
            {answers.map((answer) => (
              <OptionButton
                key={answer.id}
                onClick={() =>
                  handleAnswerButtonClick(answer.nextText, answer.setState)
                }
              >
                {answer.text}
              </OptionButton>
            ))}
          </ButtonGrid>
        </DialogContainer>
      </Window>
    </PageStyle>
  );
};

export default PlayerUI;
