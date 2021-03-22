import { Point } from './point';

export class Polygon {
  public coordinates: Point[];

  constructor(coors: Point[], clone: boolean = true) {
    if (coors.length < 3) {
      throw 'Must have more than 3 coordinates to be a polygon';
    }
    if (coors[0].notEqual(coors[coors.length - 1])) {
      throw 'The first and the last coordinate must be the same';
    }

    this.coordinates = clone ? coors.map(c => c.clone()) : coors;
  }

  /**
   * Get area of the polygon
   */
  public getArea(): number {
    let sum: number = 0;
    for (let i = 0; i < this.coordinates.length - 1; i++) {
      sum += ((this.coordinates[i + 1].x * this.coordinates[i].y) - (this.coordinates[i].x * this.coordinates[i + 1].y));
    }
    return Math.abs(sum / 2);
  }
  
  /**
   * Get centroid point of the ploygon
   */
  public getCentroid(): Point {
    let areaN: number = 0;
    let cenX: number = 0;
    let cenY: number = 0;
    for (let i = 0; i < this.coordinates.length - 1; i++) {
      let areaI = (this.coordinates[i].x * this.coordinates[i + 1].y) - (this.coordinates[i + 1].x * this.coordinates[i].y);
      cenX += (this.coordinates[i].x + this.coordinates[i + 1].x) * areaI;
      cenY += (this.coordinates[i].y + this.coordinates[i + 1].y) * areaI;
      areaN -= areaI;
    }
    const area = -areaN / 2;
    return new Point(cenX / (6 * area), cenY / (6 * area));
  }

  public equal(polygon: Polygon): boolean {
    if (this.coordinates.length != polygon.coordinates.length) {
      return false;
    }

    for (let i = 0; i < this.coordinates.length; i++) {
      if (this.coordinates[i].notEqual(polygon.coordinates[i])) {
        return false;
      }
    }
    return true;
  }

  public toString(): string {
    return `(${this.coordinates.map(c => c.toString()).join(', ')})`;
  }
}
