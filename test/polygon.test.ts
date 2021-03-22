import { diff } from './functions/diff';
import { Point } from '../src/geo/point';
import { Polygon } from '../src/geo/polygon';

describe('polygon', () => {
  const testPolygon1 = new Polygon(Point.fromNumberArray([[0, 0], [2, 0], [2, 2], [0, 2], [0, 0]]));
  const testPolygon2 = new Polygon(Point.fromNumberArray([
    [0, 10], [5, 0], [10, 10], [15, 0], [20, 10], [25, 0], [30, 20], [40, 20], [45, 0], [50, 50],
    [40, 40], [30, 50], [25, 20], [20, 50], [15, 10], [10, 50], [8, 8], [4, 50], [0, 10]
  ]));

  it('constructor', () => {
    try {
      new Polygon([]);
      expect(true).toBeFalsy();
    } catch {
      expect(true).toBeTruthy();
    }

    try {
      new Polygon([new Point(0, 0), new Point(0, 0)]);
      expect(true).toBeFalsy();
    } catch {
      expect(true).toBeTruthy();
    }

    try {
      new Polygon([new Point(0, 0), new Point(0, 1), new Point(1, 0), new Point(1, 1)]);
      expect(true).toBeFalsy();
    } catch {
      expect(true).toBeTruthy();
    }
  });

  it('equal', () => {
    const poly1 = new Polygon(Point.fromNumberArray([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]));
    const poly1b = new Polygon(Point.fromNumberArray([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]));
    const poly2 = new Polygon(Point.fromNumberArray([[0, 0], [0, 2], [2, 2], [3, 1], [2, 0], [0, 0]]));
    const poly3 = new Polygon(Point.fromNumberArray([[0, 0], [2, 0], [2, 2], [1, 3], [0, 2], [0, 0]]));

    expect(poly1.equal(poly1b)).toBeTruthy();
    expect(poly1.equal(poly2)).toBeFalsy();
    expect(poly1.equal(poly3)).toBeFalsy();
  });

  it('getArea', () => {
    expect(testPolygon1.getArea()).toEqual(4);
    expect(testPolygon2.getArea()).toEqual(1294);
  });

  it('getCentroid', () => {
    const centroid1 = testPolygon1.getCentroid();
    expect(diff(centroid1.x, 1)).toBeLessThan(0.0001);
    expect(diff(centroid1.y, 1)).toBeLessThan(0.0001);

    const centroid2 = testPolygon2.getCentroid();
    expect(diff(centroid2.x, 25.221020092735703)).toBeLessThan(0.0001);
    expect(diff(centroid2.y, 24.624420401854714)).toBeLessThan(0.0001);
  });
});
