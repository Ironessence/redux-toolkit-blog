import { parseISO, formatDistanceToNow } from 'date-fns';

import React from 'react';
import styled from 'styled-components';

const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <Span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </Span>
  );
};

const Span = styled.span`
  color: gray;
`;

export default TimeAgo;
