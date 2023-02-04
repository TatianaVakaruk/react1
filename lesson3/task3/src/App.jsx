import React from 'react';
import Comment from './Comment.jsx';
const UserInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatar1.githubusercontent.com'
};
const App=()=>{
return (
    <Comment 
    user={UserInfo}
    text="Good job"
    data={new Data('2012-04-23T18:25:43.511Z')} 
    />
)
}
export default App;