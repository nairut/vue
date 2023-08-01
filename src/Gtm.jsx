import React, { useEffect } from 'react';

function TagManager() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-K3GKPJ5'
    };
    TagManager.initialize(tagManagerArgs);

    // Additional cleanup if needed
    return () => {
      // Clean up any resources or event listeners here
    };
  }, []);

  // Your TagManager component implementation
  return <div>TagManager Component</div>;
}

export default TagManager;
