import * as React from 'https://discovery-solutions.github.io/react/dist/index.mjs';
import { fetcher } from "./fetcher.js";

export const useEntities = (key, params = {}) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  
  const fetchEntities = async () => {
    try {
      if (error) return;

      const queryString = new URLSearchParams(params).toString();
      const url = `/${key}${queryString ? `?${queryString}` : ""}`;
      
      const raw = await fetcher(url);
      setData(raw);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  React.useEffect(() => {
    if (error) return;

    fetchEntities();
  }, [error]);

  return [data, error];
};

export const useEntitiy = (key, id) => {
  const [entity, setEntity] = React.useState(null);

  const fetchEntity = async () => {
    try {
      const data = await fetcher(`/${key}/${id}`);
      setEntity(data);
    } catch (error) {
      console.error(error);
      alert(`Error fetching entity ${key} ${id}`);
    }
  }

  React.useEffect(() => {
    fetchEntity();
  }, []);

  return [entity];
};

export const useTags = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  
  const fetchTags = async () => {
    try {
      if (error) return;

      const raw = await fetcher('/post/tags');
      setData(raw);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  React.useEffect(() => {
    if (error) return;

    fetchTags();
  }, [error]);

  return [data, error];
};