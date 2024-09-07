import {createStore} from 'redux';
const intialState = {
balance: 0,
loan: 0,
loanPurpose: '',
};

function reducer(state = intialState, action) {

  switch(action.type){
    case 'account/deposit':
      return {
        ...state, balance: state.balance + action.payload
      };
      case 'account/withdraw':
        return {
          ...state, balance: state.balance - action.payload
        };
        case 'account/requestLoan':
          if (state.loan > 0) return state;
        //
        return { 
          ...state,
          loan: action.payload.amount,
          loanPurpose: action.payload.loanPurpose,
           balance: state.balance + action.payload.amount,
        };

      case 'account/payloan':
            return { 
              ...state,
              loan: 0,
              loanPurpose: '',
               balance: state.balance - state.loan,
            };

     default:
     return state;      
  }
}

const store = createStore(reducer);

// store.dispatch({type: 'account/deposit', payload: 500});
// console.log(store.getStore());
// store.dispatch({type: 'account/withdraw', payload: 300});
// console.log(store.getStore());
// store.dispatch({
//   type: 'account/requestLoan',
//    payload: {amount:1000, loanPurpose: 'Buy a Car'}
//   });
//   console.log(store.getStore());
//   store.dispatch({type: 'account/payLoan'});
// console.log(store.getStore());

function deposite(amount) {
  return ({type: 'account/deposit', payload: amount});
}
function withdraw(amount) {
  return ({type: 'account/withdraw', payload: amount});
}
function requestLoan(amount,loanPurpose) {
  return {
      type: 'account/requestLoan',
       payload: {amount, loanPurpose}
      };
}
function payLoan(amount) {
  return {
      type: 'account/requestLoan',
      };
}



store.dispatch(deposite(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, 'buy a car'));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());


