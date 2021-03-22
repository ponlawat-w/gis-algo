import { Point } from '../src/geo/point';

describe('Point', () => {
  let p0: Point = new Point(0, 0),
    p1: Point = new Point(0, 1),
    p2: Point = new Point(1, 1),
    p3: Point = new Point(1, 0);

  it('equal', () => {
    expect(p0.equal(new Point(0, 0))).toBeTruthy();
    expect(p1.equal(new Point(0, 1))).toBeTruthy();
    expect(p2.equal(new Point(1, 1))).toBeTruthy();
    expect(p3.equal(new Point(1, 0))).toBeTruthy();
    expect(p0.equal(p1)).toBeFalsy();
  });

  it('notEqual', () => {
    expect(p0.notEqual(p1)).toBeTruthy();
    expect(p1.notEqual(p2)).toBeTruthy();
    expect(p2.notEqual(p3)).toBeTruthy();
    expect(p3.notEqual(p0)).toBeTruthy();
    expect(p0.notEqual(new Point(0, 0))).toBeFalsy();
  });

  it('lessThan', () => {
    expect(p0.lessThan(p0)).toBeFalsy();
    expect(p0.lessThan(p1)).toBeTruthy();
    expect(p1.lessThan(p2)).toBeTruthy();
    expect(p2.lessThan(p3)).toBeFalsy();
    expect(p3.lessThan(p0)).toBeFalsy();
  });

  it('greaterThan', () => {
    expect(p0.greaterThan(p0)).toBeFalsy();
    expect(p0.greaterThan(p1)).toBeFalsy();
    expect(p1.greaterThan(p2)).toBeFalsy();
    expect(p2.greaterThan(p3)).toBeTruthy();
    expect(p3.greaterThan(p0)).toBeTruthy();
  });

  it('greaterOrEqual', () => {
    expect(p0.greaterOrEqual(p0)).toBeTruthy();
    expect(p0.greaterOrEqual(p1)).toBeFalsy();
    expect(p1.greaterOrEqual(p2)).toBeFalsy();
    expect(p2.greaterOrEqual(p3)).toBeTruthy();
    expect(p3.greaterOrEqual(p0)).toBeTruthy();
  });

  it('lessOrEqual', () => {
    expect(p0.lessOrEqual(p0)).toBeTruthy();
    expect(p0.lessOrEqual(p1)).toBeTruthy();
    expect(p1.lessOrEqual(p2)).toBeTruthy();
    expect(p2.lessOrEqual(p3)).toBeFalsy();
    expect(p3.lessOrEqual(p0)).toBeFalsy();
  });
  
  it('toString', () => {
    expect(p0.toString()).toEqual('(0,0)');
    expect(p1.toString()).toEqual('(0,1)');
    expect(p2.toString()).toEqual('(1,1)');
    expect(p3.toString()).toEqual('(1,0)');
    let p: Point;
    p = new Point(1, 3);
    expect(p.toString()).toEqual('(1,3)');
    p = new Point(5.10000, 8.004);
    expect(p.toString()).toEqual('(5.1,8.004)');
  });

  it('distanceTo', () => {
    expect(p0.distanceTo(p0)).toEqual(0);
    expect(p0.distanceTo(p1)).toEqual(1);
    expect(p0.distanceTo(p2)).toEqual(Math.sqrt(2));
  });

  it('clone', () => {
    const p1 = new Point(1, 1);
    const p2 = p1.clone();
    expect(p1 === p2).toBeFalsy();
    expect(p1.equal(p2)).toBeTruthy();
  });

  it('fromNumberArray', () => {
    const coors = [[0, 0], [0, 1], [1, 0], [1, 1]];
    const points = [new Point(0, 0), new Point(0, 1), new Point(1, 0), new Point(1, 1)];
    const results = Point.fromNumberArray(coors);
    for (let i = 0; i < points.length; i++) {
      expect(points[i].equal(results[i])).toBeTruthy();
    }
  });
});
