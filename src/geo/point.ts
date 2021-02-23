export class Point {
  public x: number;
  public y: number;

  /**
   * Object Dimension
   */
  public get length(): number {
    return 2;
  }

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public equal(p: Point): boolean {
    return this.x === p.x && this.y === p.y;
  }

  public notEqual(p: Point): boolean {
    return !this.equal(p);
  }

  public lessThan(p: Point): boolean {
    return (this.x < p.x) || (this.x === p.x && this.y < p.y);
  }

  public greaterThan(p: Point): boolean {
    return (this.x > p.x) || (this.x === p.x && this.y > p.y);
  }

  public greaterOrEqual(p: Point): boolean {
    return this.greaterThan(p) || this.equal(p);
  }

  public lessOrEqual(p: Point): boolean {
    return this.lessThan(p) || this.equal(p);
  }

  public toString(): string {
    return `(${this.x},${this.y})`;
  }

  public distanceTo(p: Point): number {
    return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2));
  }
}
