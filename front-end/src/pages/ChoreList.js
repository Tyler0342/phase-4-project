import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "../styles";
import styled from "styled-components";

function ChoreList() {
  const [chores, setChores] = useState([]);

  useEffect(() => {
    fetch("/chores")
      .then((r) => r.json())
      .then(setChores);
  }, []);

  return (
    <Wrapper>
      {chores.length > 0 ? (
        chores.map((chore) => (
          <Chore key={chore.id}>
            <Box>
              <h2>{chore.title}</h2>
              <p>
                <em>Difficulty: {chore.difficulty}</em>
                &nbsp;·&nbsp;
                <cite>By {chore.user.username}</cite>
              </p>
            </Box>
          </Chore>
        ))
      ) : (
        <>
          <h2>No Chores Found</h2>
          <Button as={Link} to="/new">
            Add A Chore
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Chore = styled.article`
  margin-bottom: 24px;
`;

export default ChoreList;
