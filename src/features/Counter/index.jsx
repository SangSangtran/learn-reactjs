import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
// import styles from './styles.module.css';

// const MyComponent = styled('div')({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
// });

const GradientButton = styled('button')({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 'none',
  borderRadius: 8,
  color: 'white',
  padding: '0.5rem 1.5rem',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: 0.85,
  },
});

const ButtonGroup = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '1rem',
});

const CounterFeature = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const handleIncreaseClick = () => {
    const action = increase(); // action creator
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease(); // action creator
    dispatch(action);
  };
  //   return (
  //     <div className={styles.counter}>
  //       Counter: {counter}
  //       <MyComponent>
  //         <div>
  //           <button onClick={handleIncreaseClick}>Increase</button>
  //           <button onClick={handleDecreaseClick}>Decrease</button>
  //         </div>
  //       </MyComponent>
  //     </div>
  //   );
  // };

  return (
    <div style={{ textAlign: 'center', color: 'goldenrod', marginTop: '2rem' }}>
      <h2>Counter: {counter}</h2>
      <ButtonGroup>
        <GradientButton onClick={handleIncreaseClick}>Increase</GradientButton>
        <GradientButton onClick={handleDecreaseClick}>Decrease</GradientButton>
      </ButtonGroup>
    </div>
  );
};

CounterFeature.propTypes = {};

export default CounterFeature;
