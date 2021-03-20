import { Point } from '../src/geo/point';
import { Utils } from '../src/geo/utils';
import { diff } from './functions/diff';

describe('Utils', () => {
  it('pointToLineDistance', () => {
    expect(diff(Utils.pointToLineDistance(new Point(10, 0), new Point(0, 100), new Point(0, 1)), 10)).toBeLessThan(0.0001);
    expect(diff(Utils.pointToLineDistance(new Point(0, 10), new Point(1000, 0.001), new Point(-100, 0)), 9.9999090909)).toBeLessThan(0.0001);
    expect(diff(Utils.pointToLineDistance(new Point(0, 0), new Point(0, 10), new Point(10, 0)), 7.07106781187)).toBeLessThan(0.0001);
    expect(diff(Utils.pointToLineDistance(new Point(0, 0), new Point(10, 10), new Point(10, 10)), 14.1421356237)).toBeLessThan(0.0001);
  });

  it('sphericalDistance', () => {
    const valencia = [39.467705, -0.378632];
    const chiangMai = [18.7872873, 98.9868443];
    const tokyo = [35.6786804, 139.7675981];
    const auckland = [-36.8550286, 174.7650285];
    const lima = [-12.0529855, -77.0033153];

    const distanceVlcCmg = Utils.sphericalDistance(valencia[0], valencia[1], chiangMai[0], chiangMai[1]);
    const distanceCmgTok = Utils.sphericalDistance(chiangMai[0], chiangMai[1], tokyo[0], tokyo[1]);
    const distanceTokAuk = Utils.sphericalDistance(tokyo[0], tokyo[1], auckland[0], auckland[1]);
    const distanceAukLim = Utils.sphericalDistance(auckland[0], auckland[1], lima[0], lima[1]);
    const distanceLimVlc = Utils.sphericalDistance(lima[0], lima[1], valencia[0], valencia[1]);

    expect(diff(distanceVlcCmg, 9460)).toBeLessThan(2);
    expect(diff(distanceCmgTok, 4407)).toBeLessThan(2);
    expect(diff(distanceTokAuk, 8838)).toBeLessThan(2);
    expect(diff(distanceAukLim, 10770)).toBeLessThan(2);
    expect(diff(distanceLimVlc, 9740)).toBeLessThan(2);
  });
});
