import * as React from 'https://discovery-solutions.github.io/react/dist/index.mjs';
import { fetcher } from "./fetcher.js";

export const useEntities = (key) => {
  const [data, setData] = React.useState([]);
  
  const fetchEntities = async () => {
    try {
      const raw = await fetcher(`/${key}`);
      setData(raw[key] || raw);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    fetchEntities()
  }, []);

  return [(data || [])];
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
    fetchEntity()
  }, []);

  return [entity];
};