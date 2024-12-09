import { PAGE_INVEST } from '../constants/invest.constants';
import { UrlSegment, UrlSegmentGroup } from '@angular/router';

export const matchInvestPage = (url: UrlSegment[]) => {
  if (url.length === 1 && PAGE_INVEST.includes(url[0].path)) {
    return { consumed: url };
  }
  return null;
};

const matchSegment = (segmentGroup: UrlSegmentGroup, pageName: string) =>
  segmentGroup.segments.length === 1 && segmentGroup.segments[0].path === pageName;

export const matchInvestSubPage = (
  url: UrlSegment[],
  segmentGroup: UrlSegmentGroup,
  pageName: string,
) => {
  return matchSegment(segmentGroup, pageName) ? { consumed: url } : null;
};
