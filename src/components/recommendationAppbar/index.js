import * as React from 'react';
import {AppBar, Box, Toolbar, Button, List} from '@material-ui/core';
import { useStyle } from "../useMakeStyle";



export default function RecommendationAppBar() {
  const classBtn = useStyle();
  return (
    <Box>
      <AppBar color="inherit" position="static" className={classBtn.recommendationAppBar}>
      <Toolbar>        
      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton}  size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      <List className={classBtn.spacing}>
      <Button variant="contained"  className={classBtn.recommendationButton} size="Cienciasdedados" >
          Cienciasdedados
      </Button>
      </List>

      </Toolbar>
      </AppBar>
    </Box>
  );
}