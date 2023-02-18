import React from 'react';
import Transaction from './Transaction';
const TransactionsList = ({transactions})=>{
return (
    <ul className="transactions">
    
    {transactions.map(elem =>(
       <Transaction key={elem.id} from={elem.from} to={elem.to} time={elem.time} amount={elem.amount} rate={elem.rate} /> 
        
    ))
}
    
</ul>
)
}
export default TransactionsList;