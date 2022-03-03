import React from 'react';

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
//     history.push('/questionario/3');
//   }, [history]);
//   const handleSubmitRadio = useCallback(
//     (data: unknown) => {
//       sessionStorage.setItem('data1', JSON.stringify(data));
//       history.push('/questionario/5');
//     },
//     [history],
//   );
//   return (
//     <AnimationContainer>
//       <form className={classes.text} onSubmit={handleSubmitRadio}>
//         <RadioButton
//           name="radio5"
//           question="5- Tem tremores nas mãos?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio6"
//           question="6- Sente-se nervoso(a), tenso(a) ou preocupado(a)?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio7"
//           question="7- Tem má digestão?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio8"
//           question="8- Tem dificuldade de pensar com clareza?"
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
//       </form>
//     </AnimationContainer>
//   );
// };

// export default App;
