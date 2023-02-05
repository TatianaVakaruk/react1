import React from 'react';
import moment from 'moment';
const formatDate = date => moment(date).format('DD MMM YY');
  const Profile = (props)=>{
    <>
    <div className = "profile__name">{`${props.user.firstName} ${props.user.secondName}`} $</div>
    <div className = "profile__birth">{`Was born ${formatDate(props.user.birthDate)} in ${props.user.birthPlace} `}</div>
    </>
  }
  export default Profile;