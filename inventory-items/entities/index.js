import moment from 'moment';
import { } from 'lodash';
import buildMakeItem from './item.js';

const makeItem = buildMakeItem({
  moment,
});

export default Object.freeze({
  makeItem,
});
