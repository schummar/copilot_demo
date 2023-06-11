interface Point {
    longitudeRad: number;
    latitudeRad: number;
}

interface Measurement {
    distanceRad: number;
    point: Point;
}

export function trilaterate([a, b, c]: [Measurement, Measurement, Measurement]): Point {
    const { distanceRad: da, point: pa } = a;
    const { distanceRad: db, point: pb } = b;
    const { distanceRad: dc, point: pc } = c;

    const x = (da * da - db * db + pb.longitudeRad * pb.longitudeRad) / (2 * pb.longitudeRad);
    const y = (da * da - dc * dc + pc.longitudeRad * pc.longitudeRad + pc.latitudeRad * pc.latitudeRad) / (2 * pc.latitudeRad) - (pc.longitudeRad / pc.latitudeRad) * x;

    const z = Math.sqrt(da * da - x * x - y * y);

    return { longitudeRad: x, latitudeRad: y };
}

console.log(trilaterate([
    { distanceRad: 45, point: { longitudeRad: 0, latitudeRad: 0 } },
    { distanceRad: 45, point: { longitudeRad: 90, latitudeRad: 0 } },
    { distanceRad: 110, point: { longitudeRad: 0, latitudeRad: 90 } },
]))