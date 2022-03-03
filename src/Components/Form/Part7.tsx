import React from 'react';

// import { useHistory } from 'react-router-dom';
// import { Grid } from '@material-ui/core';
// import { Form } from '@unform/web';
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
//     history.push('/questionario/6');
//   }, [history]);
//   const handleSubmitRadio = useCallback(
//     (data: unknown) => {
//       sessionStorage.setItem('data1', JSON.stringify(data));
//       history.push('/questionario/1/04');
//     },
//     [history],
//   );
//   return (
//     <AnimationContainer>
//       <Form className={classes.text} onSubmit={handleSubmitRadio}>
//         <RadioButton
//           name="radio17"
//           question="17- Tem tido ideia de acabar com a vida?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio18"
//           question="18- Sente-se cansado(a) o tempo todo?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio19"
//           question="19- Você se cansa com facilidade?"
//           radio={radio}
//           setRadio={setRadio}
//         />
//         <RadioButton
//           name="radio20"
//           question="20- Tem sensações desagradáveis no estômago?"
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
//             <Button type="submit" text="concluir" />
//           </Grid>
//         </Grid>
//       </Form>
//     </AnimationContainer>
//   );
// };

// export default App;
