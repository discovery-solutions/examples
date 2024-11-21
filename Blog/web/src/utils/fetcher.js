const BASE_URL = 'http://localhost:4000';

const fetcher = async (url, options = {}) => {
  try {
    if (!url.includes('http')) url = BASE_URL + url;

    const response = await fetch(url, options);

    if (!response.ok)
      throw new Error(`HTTP error! Status: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error('Request failed', error);
    throw error;
  }
};

fetcher.get = (url, config = {}) => fetcher(url, config);
fetcher.put = (url, body, config = {}) => fetcher(url, { ...config, method: 'post', body });
fetcher.post = (url, body, config = {}) => fetcher(url, { ...config, method: 'put', body  });
fetcher.patch = (url, body, config = {}) => fetcher(url, { ...config, method: 'patch', body  });
fetcher.delete = (url, body, config = {}) => fetcher(url, { ...config, method: 'delete', body  });

export { fetcher }