export abstract class Utils {
  private static degToRad(deg: number): number {
    return deg * Math.PI / 180;
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
