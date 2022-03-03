import React from 'react';

// import { Form } from '@unform/web';
// import { useHistory } from 'react-router-dom';
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
//     history.push('/questionario/5');
//   }, [history]);
//   const handleSubmitRadio = useCallback(
//     (data: unknown) => {
//       sessionStorage.setItem('data1', JSON.stringify(data));
//       history.push('/questionario/7');
//     },
//     [history],
//   );
//   return (
//     <AnimationContainer>
//       <Form className={classes.text} onSubmit={handleSubmitRadio}>
//         <RadioButton
//           name="radio13"
//           question="13- Tem dificuldades no serviço (seu trabalho é penoso,
//             causa-lhe sofrimento)?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio14"
//           question="14- É incapaz de desempenhar um papel útil em sua vida?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio15"
//           question="15- Tem perdido o interesse pelas coisas?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio16"
//           question="16- Você se sente uma pessoa inútil sem préstimo?"
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
//             <Button type="button" text="próximo" />
//           </Grid>
//         </Grid>
//       </Form>
//     </AnimationContainer>
//   );
// };

// export default App;
