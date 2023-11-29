import { formatDistanceToNow, parseISO } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
    let timeAgo = ''
    if(timeStamp){
        const Date = parseISO(timeStamp)
        const timePeriod = formatDistanceToNow(Date)
        timeAgo = `${timePeriod} ago`
    }

  return (
    <>
      <p>{timeAgo}</p>
    </>
  );
};

export default TimeAgo