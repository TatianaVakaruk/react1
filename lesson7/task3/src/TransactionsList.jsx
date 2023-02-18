import React from 'react';
import Translation from './Translation';
const TransactionsList = ({translations})=>{
return (
    <ul className="transactions">
    
    {translations.map(elem =>(
       <Translation key={elem.id} from={elem.from} to={elem.to} time={elem.time} amount={elem.amount} rate={elem.rate} /> 
        
    ))
}
    
</ul>
)
}
export default TransactionsList;