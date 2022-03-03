import React from 'react';

// import { useHistory } from 'react-router-dom';
// import { Form } from '@unform/web';
// import { Grid } from '@material-ui/core';
// import { makeStyles, createStyles } from '@material-ui/core/styles';
// import Button from '../Button';
// import { AnimationContainer } from './styles';
// import RadioButton from '../RadioButton';

// const useStyles = makeStyles(() =>
//   createStyles({
//     p: {
//       marginTop: '1em',
//     },
//     div: {
//       marginTop: '4em',
//     },
//     text: {
//       marginTop: '4em',
//     },
//   }),
// );

// const App: React.FC = () => {
//   const classes = useStyles();
//   const history = useHistory();
//   const [radio, setRadio] = useState({ name: '', value: '' });

//   const handleClickLeft = useCallback(() => {
//     history.push('/questionario/4');
//   }, [history]);
//   const handleSubmitRadio = useCallback(
//     (data: unknown) => {
//       sessionStorage.setItem('data1', JSON.stringify(data));
//       history.push('/questionario/6');
//     },
//     [history],
//   );
//   return (
//     <AnimationContainer>
//       <Form className={classes.text} onSubmit={handleSubmitRadio}>
//         <RadioButton
//           name="radio9"
//           question="9- Tem se sentido triste ultimamente?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio10"
//           question="10- Tem chorado mais do que de costume?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio11"
//           question="11- Encontra dificuldades para realizar com satisfação
//           suas atividades diárias?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio12"
//           question="12- Tem dificuldades para tomar decisões?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <Grid
//           container
//           direction="row"
//           justifyContent="flex-end"
//           alignItems="center"
//           className={classes.div}
//         >
//           <Grid item onClick={handleClickLeft}>
//             <Button type="button" text="voltar" />
//           </Grid>
//           <Grid item>
//             <Button type="submit" text="próximo" />
//           </Grid>
//         </Grid>
//       </Form>
//     </AnimationContainer>
//   );
// };

// export default App;
