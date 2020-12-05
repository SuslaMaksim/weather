
import { useState, useEffect } from 'react';

export const usePositionHook = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onChange = (pos) => {
        let crd = pos.coords;
        setPosition({latitude:crd.latitude,longitude:crd.longitude});
    };

    const onError = (err) => {
        setError(`ERROR(${err.code}): ${err.message}`);
    };

    useEffect(() => {
        const geo = navigator.geolocation;

        if (!geo) {
            setError('Геолокация не поддерживается браузером');
            return;
        }

       let watcher = geo.getCurrentPosition(onChange, onError);

        return () => geo.clearWatch(watcher);
    }, []);

    return {...position, error};
}