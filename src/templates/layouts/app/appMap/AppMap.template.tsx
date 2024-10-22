import { FC, useEffect, useState } from "react";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { useCities } from "../../../../hooks/useCities";
import { useGeolocation } from "../../../../hooks/useGeolocation";
import { useUrlPosition } from "../../../../hooks/useUrlPosition";
import styles from "./AppMapTemplate.module.css";

const AppMapTemplate: FC = () => {
    const [mapPosition, setMapPosition] = useState<[number, number]>([
        51.505, -0.09,
    ]);
    const { lat, lng } = useUrlPosition();
    const {
        isLoading: isLoadingPosition,
        position: geolocationPosition,
        getCurrentPosition,
    } = useGeolocation();

    const { cities } = useCities();

    useEffect(() => {
        if (lat && lng) {
            setMapPosition([lat, lng]);
        }
    }, [lat, lng]);

    useEffect(() => {
        if (geolocationPosition) {
            setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
        }
    }, [geolocationPosition]);

    return (
        <div className={styles.mapContainer}>
            {!geolocationPosition && (
                <Button
                    type="button"
                    variant="position"
                    onClick={getCurrentPosition}
                >
                    {isLoadingPosition ? "Loading..." : "Use position"}
                </Button>
            )}
            <MapContainer
                center={mapPosition}
                // center={[lat, lng]}
                zoom={13}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map((city) => (
                    <Marker
                        position={[city.position.lat, city.position.lng]}
                        key={city.id}
                    >
                        <Popup>
                            <span>{city.emoji}</span>
                            <span>{city.cityName}</span>
                        </Popup>
                    </Marker>
                ))}

                <ChangeCenter position={mapPosition} />
                <DetectClick />
            </MapContainer>
        </div>
    );
};

const ChangeCenter: FC<{ position: [number, number] }> = ({ position }) => {
    const map = useMap();
    map.setView(position, 13);
    return null;
};

const DetectClick = () => {
    const navigate = useNavigate();
    const map = useMapEvents({
        click(e) {
            map.locate();
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
        },
    });
    return null;
};

export default AppMapTemplate;
