import React, { useEffect } from 'react';

function SendComponent() {
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    /* put server here */
    const url = 'put server here';
    /* example purpose */
    const data = JSON.stringify({
      key1: 'value1',
      key2: 'value2',
    });

    /* open up to send data */
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');


    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log('Response: ', response);
      }
    };

    xhr.send(data);
  }, []);

  return (
    <div>
      {/* put jsx components here */}
    </div>
  );
}

export default SendComponent;