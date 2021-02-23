import { Utils } from '../src/geo/utils';

describe('Utils', () => {
  const error = (a: number, b: number): number => Math.abs(a - b);

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

    expect(error(distanceVlcCmg, 9460)).toBeLessThan(2);
    expect(error(distanceCmgTok, 4407)).toBeLessThan(2);
    expect(error(distanceTokAuk, 8838)).toBeLessThan(2);
    expect(error(distanceAukLim, 10770)).toBeLessThan(2);
    expect(error(distanceLimVlc, 9740)).toBeLessThan(2);
  });
});
