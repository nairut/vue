import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module'; // Assuming you have installed the 'react-gtm-module' package

const TagManagerComponent = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-K3GKPJ5'
    };
    TagManager.initialize(tagManagerArgs);

    // Cleanup function (optional)
    return () => {
      // Perform any cleanup operations here, if needed.
    };
  }, []);
sadfsadf
  return (
    <div>
      {/* Your component's content goes here */}
    </div>
  );
};

export default TagManagerComponent;
