import moment from "moment";

export default function creationDate(date: string | number) {
  const message = moment(date).fromNow();
  return message;
}
