import {
  PAGE_CURRENCIES,
  PAGE_FAVORITES,
  PAGE_INVEST,
  PAGE_RECOMMENDATIONS,
  PAGE_STOCKS,
} from '../constants/invest.constants';
import { UrlSegment, UrlSegmentGroup } from '@angular/router';

export const matchPageInvest = (url: UrlSegment[]) => {
  if (url.length === 1 && PAGE_INVEST.includes(url[0].path)) {
    return { consumed: url };
  }
  return null;
};

const segmentMatcher = (segmentGroup: UrlSegmentGroup, pageName: string) =>
  segmentGroup.segments.length === 1 && segmentGroup.segments[0].path === pageName;

export const matchPageRecommendations = (url: UrlSegment[], segmentGroup: UrlSegmentGroup) => {
  return segmentMatcher(segmentGroup, PAGE_RECOMMENDATIONS) ? { consumed: url } : null;
};

export const matchPageStocks = (url: UrlSegment[], segmentGroup: UrlSegmentGroup) => {
  return segmentMatcher(segmentGroup, PAGE_STOCKS) ? { consumed: url } : null;
};

export const matchPageCurrencies = (url: UrlSegment[], segmentGroup: UrlSegmentGroup) => {
  return segmentMatcher(segmentGroup, PAGE_CURRENCIES) ? { consumed: url } : null;
};

export const matchPageFavorites = (url: UrlSegment[], segmentGroup: UrlSegmentGroup) => {
  return segmentMatcher(segmentGroup, PAGE_FAVORITES) ? { consumed: url } : null;
};
