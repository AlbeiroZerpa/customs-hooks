import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async() => {
        const respURL = await fetch(url);
        const data = await respURL.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])
    

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
