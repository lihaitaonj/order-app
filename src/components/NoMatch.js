import React from 'react';

const NoMatch = ({status}) => {
  return (
    <div>
      {status} 浏览器地址不存在，请确认是否输入有误
    </div>
  );
}

export default NoMatch;
