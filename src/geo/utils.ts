import { Point } from './point';

export abstract class Utils {
  private static degToRad(deg: number): number {
    return deg * Math.PI / 180;
  }

  /**
   * Calculate the distance from point p to line p1, p2
   * @param p point
   * @param p1 point1 in line
   * @param p2 point2 in line
   */
  public static pointToLineDistance(p: Point, p1: Point, p2: Point): number {
    if (p1.equal(p2)) {
      return p.distanceTo(p1);
    }

    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;

    const a = dy;
    const b = -dx;
    const c = (p1.y * dx) - (p1.x * dy);
    return Math.abs((a * p.x) + (b * p.y) + c) / Math.sqrt((a * a) + (b * b));
  }

  /**
   * Calculate the great circile between given coordinates
   * @param lat1 Point1 Latitude
   * @param lng1 Point1 Longitude
   * @param lat2 Point2 Latitunde
   * @param lng2 Point2 Longitude
   * @param R earth radius (default = 6371km)
   */
  public static sphericalDistance(lat1: number, lng1: number, lat2: number, lng2: number, R: number = 6371): number {
    const Φ1 = this.degToRad(lat1);
    const Φ2 = this.degToRad(lat2);
    const λ1 = this.degToRad(lng1);
    const λ2 = this.degToRad(lng2);

    const ΔΦ = Math.abs(Φ1 - Φ2);
    const Δλ = Math.abs(λ1 - λ2);
    const α = Math.pow(Math.sin(ΔΦ / 2), 2) + (Math.cos(Φ1) * Math.cos(Φ2) * Math.pow(Math.sin(Δλ / 2), 2));
    const c = 2 * Math.asin(Math.min(1, Math.sqrt(α)));
    return c * R;
  }
}
